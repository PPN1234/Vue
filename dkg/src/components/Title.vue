<template>
  <div>
    <h1>タイトル一覧</h1>
    
    <table border="1" align="center">
   
      <tr><th>公式タイトル</th><th>アイコン</th><th>公式リンク</th></tr>
      
        <tr v-for="playtitle in list" v-bind:key="playtitle.id"><td>{{playtitle.name}}</td>
        <td><img :src="playtitle.pic" width="50" height="50"/></td>
        <td><a :href="playtitle.link" target="_blank">公式リンク</a></td>
        </tr>
       
       </table>
  

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Title",
 
  data: function() {
    return {
      message: "",
      list:[
        {id:1,name:'ApexLegends',pic:require('../assets/apex.png'),link:'https://www.ea.com/ja-jp/games/apex-legends'},
        {id:2,name:'GTA5',pic:require('../assets/gta.jpeg'),link:'https://www.rockstargames.com/V/jp'}
      ],
     
    };
  },
});
</script>
<style scoped>

table{
  table-layout: fixed;
 
}
li{
  list-style:none;
  table-layout: fixed;
}
</style>
