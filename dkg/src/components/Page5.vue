<template>
  <div class="page5">
    <div>
      <button v-on:click="increment" class="box1">カウントボタン{{count}}回</button><br>
      {{count}}<br>
      <button @click="reset">リセット</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name:'Page5',
  data: function(){
    return{
    count:0,
    };
  },
  methods:{

    increment: function(){
      var vm=this;
      //setTimeout(function() {vm.count++},100),
      //setTimeout(function(){this.count++}.bind(this),100),
      setTimeout(() => {this.count++},100),
      setTimeout(this.callback,100);
    },
        reset: function(){
   this.count=0;
    },
    },
});
</script>
<style scoped>
@import "./css/style.css";
</style>

