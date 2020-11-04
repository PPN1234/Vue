<template>
  <div>
    <h1>趣味と勉強</h1>
  <h2>勉強について</h2>
    <table border="1" align="center">
      <tr>
        <th>言語</th>
        <th>時期</th>
        <th>学習方法</th>
        <th>参考公式リンク</th>
      </tr>

      <tr v-for="learningtitle in list2" v-bind:key="learningtitle.id">
        <td>{{ learningtitle.name }}</td>
        <td>{{ learningtitle.time }}</td>
        <td>{{ learningtitle.title }}</td>
        <td><a :href="learningtitle.link" target="_blank">参考リンク</a></td>
      </tr>
    </table>
  <h3>趣味について</h3>
    <table border="1" align="center">
      <tr>
        <th>公式タイトル</th>
        <th>アイコン</th>
        <th>公式リンク</th>
      </tr>
      <tr v-for="playtitle in list" v-bind:key="playtitle.id">
        <td>{{ playtitle.name }}</td>
        <td><img :src="playtitle.pic" width="50" height="50" /></td>
        <td><a :href="playtitle.link" target="_blank">公式リンク</a></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Page2",

  data: function() {
    return {
      message: "",
      list: [
        {
          id: 1,
          name: "ApexLegends",
          pic: require("../assets/apex.png"),
          link: "https://www.ea.com/ja-jp/games/apex-legends",
        },
        {
          id: 2,
          name: "GTA5",
          pic: require("../assets/gta.jpeg"),
          link: "https://www.rockstargames.com/V/jp",
        },
      ],
      list2: [
        {
          id: 1,
          name: "Java",
          time: "大学４年間",
          title: "大学講義＋インターンシップ",
          link:
            "https://docs.oracle.com/javase/jp/8/docs/api/overview-summary.html",
        },
        {
          id: 2,
          name: "Vue.js",
          time: "半年ほど",
          title: "基礎から学ぶVue.js",
          link: "https://cr-vue.mio3io.com/",
        },
        {
          id: 3,
          name: "React.js",
          time: "１ヶ月ほど",
          title: "作りながら学ぶReact",
          link: "https://github.com/yuumi3/react_book",
        },
      ],
    };
  },
});
</script>
<style scoped>
table {
  table-layout: fixed;
}
li {
  list-style: none;
  table-layout: fixed;
}
</style>
