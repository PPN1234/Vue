<template>
  <div class="TOP">
    <p align="center">Vue.jsの勉強ページ</p>
    <router-link to="/show" class="box1">自己紹介</router-link>
    <router-link to="/title" class="box1">活動タイトル</router-link>
    <router-link to="/link" class="box1">各種リンク</router-link>
    <router-link to="/link2" class="box1">テキストエリアやボタンリンク</router-link>

    <div class="box11"> 
      <p v-bind:class="{child:isChild,'is-active':isActive}">アクティブなテキスト</p>
      <p v-bind:style="{color:textColor,backgroundColor:bgColor}">赤色を指定したテキスト</p>
    </div>
  <button v-on:click="isChild=!isChild">切り替え</button>
    <div v-if="check" :class="{child:isChild,'active':isActive}">
      aaa
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data: function () {
    return {
      list:['りんご','いちご'],
      isChild:true,
      isActive:true,
      textColor:'red',
      bgColor:'ligtgray'
    };
  },
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./css/style.css";
.activ{
  color:white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
