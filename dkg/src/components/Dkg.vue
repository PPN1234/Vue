<template>
<div class="box11">
   <h1>DKGメンバー</h1>
   <br>
    <div>
      
      <table border="1" align="center">
        
   <tr><th v-for="but in list" :key="but.id"><button v-on:click="check=!check">{{but.name}}</button>
   
   <p v-if="check">
          役職:{{but.job}}<br>
          名前:{{but.name}}<br>
          所在地:{{but.map}}
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
    {id:1,job:'リーダー',name:'dustkinoko',map:'北海道'},
    {id:2,job:'広報',name:'hikarusan',map:'埼玉県'},
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