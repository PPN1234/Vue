<template>
    <div class="box11">
        <h2>Ez.vue</h2>
    <button v-on:click="check=!check">切り替え</button><!--クリックでtureを切り替え-->
<div id="About" class="box11">
    <transition class="box11">
        <p v-if="check">v-if</p>
        </transition>
        </div>
    
    <div id="white" class="box11">
    <p>{{message.value}}</p>
    <p>{{message.value.length}}</p>
    <p>{{message.value.length >= 5 ? '5文字以上':'5文字以下'}}</p>
    <p>{{list[2]}}</p>
    <p>{{list[num]}}</p>
    <p style="white-space: pre-line;">{{massa}}</p>
    <input type="text" :value="massa" placeholder="テキスト"><br>
     <input type="text" v-model="massa" placeholder="テキスト">
     <pre>{{$data}}</pre>
    </div>
    </div>
        
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: 'Ez',
    data: function() {
        return{
            message:{
                value: 'textlist',
            },
            massa:'',
            check: true,
            list:['りんご','ばなな','いちご'],
            isChild:true,
            isActive:true,
            textColor:'white',
            bgColor:'ligtgray',
            num: 1,
        };
    },
});

</script>

<style>
@import "./css/style.css";
#About {
color:brown;
}
#white{
text-align: left;
color:black;
}
</style>

   