<template>
<div class="box11">
   <h1>経歴</h1>
   <br>
    <div>
      
      <table border="1" align="center">
        
   <tr><th v-for="profile in list" :key="profile.id"><button v-on:click="check=!check">{{profile.name}}</button>
   
   <p v-if="check">
          役職:{{profile.job}}<br>
          名前:{{profile.name}}<br>
          所在地:{{profile.map}}
          </p>
          </th></tr>
        </table>
   </div>
  
</div>
     
   

</template>

<script>
import Vue from "vue";

export default Vue.extend({

   name: 'DKG',
   data: function(){
       return {
  list:[
    {id:1,job:'情報系の大学卒業',name:'名前１',map:'埼玉'},
    {id:2,job:'今はエンジニア見習い',name:'名前２',map:'東京'},
    ],
  check: false,
  bool:'',
       };
   },
  methods: {
    active: function () {
      this.isActive = !this.isActive
    },
  },
});
</script>

<style>
@import "./css/style.css";
.area{
border : 10px;
margin: 50;
}
.box {
  border: solid 8px red;
  box-sizing: border-box;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  font-size: 60px;
}
  .box5 {
  border: none;
  
    content: "";
    display: block;
    clear: both;
}
li{
  list-style:none;
  table-layout: fixed;
}
</style>