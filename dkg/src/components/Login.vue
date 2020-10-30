<template>
    <div class="login">
    <p style="white-space: pre-line;">{{ message }}</p><br>
    <textarea v-model="message" placeholder="テキストエリア"></textarea><br>
    <button v-on:click="handleClick">Click</button><br>
    <button v-on:click="count++">このボタンは{{ count }}回押されました.</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name:'Login',
    methods:{
        handleClick:function(){
            alert("ボタンがクリックされました。")
        },
    },
   data: function () {
   return {
    message:'',
    count: 0,
   };
  },
});
</script>