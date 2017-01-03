var fs = require('fs');
var path = require('path')
var webpack = require('webpack')

//清除build下发布内容
var buildPath = './build/';
var folder_exists = fs.existsSync(buildPath);
if (folder_exists == true) {
    var dirList = fs.readdirSync(buildPath);
    dirList.forEach(function(fileName) {
        fs.unlinkSync(buildPath + fileName);
    });
    console.log("clearing " + buildPath);
};

//readfile
//先把index.html里面关于style和js的hash值都删除掉，避免在使用 npm run dev 的时候，路径还是压缩后的路劲
fs.readFile("index.html", 'utf-8', function(err, data) {
    if (err) {
        console.log("error");
    } else {
        //将index.html里面的hash值清除掉
        var devhtml = data.replace(/((?:href|src)="[^"]+\.)(\w{20}\.)(js|css)/g, '$1$3');
        fs.writeFileSync('index.html', devhtml);
    }
});

//混淆压缩
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//检测重用模块
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//独立样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var production = process.env.PRODUCTION;

var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    //会将所有的样式文件打包成一个单独的style.css
    new ExtractTextPlugin(production ? "style.[hash].css" : "style.css", {
        disable: false, //,
        // allChunks: true  //所有独立样式打包成一个css文件
    }),
    //new ExtractTextPlugin("[name].css" )
    //自动分析重用的模块并且打包成单独的文件
    new CommonsChunkPlugin(production ? "vendor.[hash].js" : "vendor.js"),
    function() {
        return this.plugin('done', function(stats) {
            var content;
            //这里可以拿到hash值   参考：http://webpack.github.io/docs/long-term-caching.html
            content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
            console.log('版本是：' + JSON.stringify(stats.toJson().hash));
            return fs.writeFileSync('build/assets.json', content);
        });
    },
    new webpack.optimize.OccurenceOrderPlugin()
];

//发布编译时，压缩，版本控制
if (process.env.PRODUCTION) {
    //压缩
    plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
}

/*
  版本控制
  package.json中的
    "html-webpack-plugin": "^1.6.2",
  模块是把生成的带有md5戳的文件，插入到index.html中。
  通过index.tpl模板，生成 index.html
 */
var HtmlWebpackPlugin = require("html-webpack-plugin");
//HtmlWebpackPlugin文档 https://www.npmjs.com/package/html-webpack-plugin

//https://github.com/ampedandwired/html-webpack-plugin/issues/52
// plugins.push(new HtmlWebpackPlugin({
//     filename: '../index.html', //会生成d.html在根目录下,并注入脚本
//     // template: '../index.tpl',
//     inject: true //此参数必须加上，不加不注入
// }));

var config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, './node_modules')],
        alias: {
            'vonic': 'vonic/src/vonic.js'
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpg|gif|svg)|((eot|woff|ttf|svg)[\?]?.*)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /vonic.src.*?js$/,
            loader: 'babel'
        }, {
            test: /vue\-scroller.src.*?js$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader'),
        }

        ]
    },
    vue: {
        loaders: {
            scss: 'style!css!sass',
        },
        css: ExtractTextPlugin.extract("style-loader",
            "css-loader?sourceMap!cssnext-loader")
        
    },
    devServer: {
        proxy: {}
    },
    plugins : plugins,
    devtool: '#eval-source-map'
}

var jsonfolder = __dirname + "/src/json";
var urlRex = [];
var files = fs.readdirSync(jsonfolder);
files.forEach(function(file) {
    var st = fs.statSync(path.join(jsonfolder, file));
    if (st.isDirectory()) {
        urlRex.push("\/" + file);
    }
});
urlRex = "(" + urlRex.join("|") + ")*";

if (process.env.LOCALREST) {
    console.log("Use local JSON file for RESTful interface!");
    var server = require("./mockServer");
    //代理到mockserver
    config.devServer.proxy[urlRex] = {
        target: 'http://localhost:3000',
        secure: false
    };
} else {
    console.log("Use backend RESTful interface!");
}
module.exports = config;
