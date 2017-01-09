<template>
  <div>
    <cells :items="catalog" :on-cell-click="onCellClick"></cells>
  </div>
</template>

<script>

    import {Cells} from 'vonic'
    module.exports = {
        props : ['catalogList'],
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
            self.$watch("catalogList", function(v){
                for (var c in self.catalogList) {
                    var line = "<div class='entrance'><img src='" + self.catalogList[c].icon + "' alt='' /><span>" + self.catalogList[c].name + "</span></div>";
                    this.catalog.push(line);
                }
            });
        },
        methods : {
            onCellClick() {
                this.$router.go('/goods/1');
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