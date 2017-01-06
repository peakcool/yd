<template>
  <div>
    <cells :items="catalog" :on-cell-click="onCellClick"></cells>
  </div>
</template>

<script>

import {Cells} from 'vonic'
    var http = require('../../utils/HettpHelper.js');
    var common = require('../../utils/Common.js');
    var gloalStore = require('../../vuex/store.js');
    var catalogGetters = require('../../vuex/catalog/getters.js');
    module.exports = {
        vuex : {
            getters : {
                getCatalogList : catalogGetters.getCatalogList
            }
        },
        data : function() {
            return {
                catalog : [],
            }
        },
        components : {
            Cells
        },
        ready : function (){
            var self = this;
            for (var c in self.getCatalogList) {
                var line = "<div class='entrance'><img src='" + self.getCatalogList[c].icon + "' alt='' /><span>" + self.getCatalogList[c].name + "</span></div>";
                this.catalog.push(line);
            }
        }
    }
</script>

<style lang="scss">
    .entrance {
    height: 120px;
    padding: 35px 0;

    .icon {
      font-size: 30px;
      line-height: 30px;
      width: 30px;
      height: 30px;
      margin-bottom: 6px;
    }

    span {
      font-size: 14px;
      line-height: 14px;
    }

  }
</style>