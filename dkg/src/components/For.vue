<template>
    <div>
        <h1>For.vue</h1>
        <p v-bind:class="classObject">text</p>
        <p v-bind:style="styleObject">Text</p>
        <br>
        <img v-bind="item">
        <br>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="100" cy="75" v-bind:r="radius" fill="lightpink"/>
        </svg>
        <input type="range" min="0" max="100" v-model="radius">

        <div v-if="ifcheck">v-if条件による線画</div>
        <div v-show="ifcheck">v-show条件による表示</div>

        <div v-if="type === 'A'">
            typeにAが格納されています。
        </div>
        <div v-else-if="type === 'B'">
            typeにBが格納されています。
        </div>
        <div v-else>
            どの条件も満たしていません。
        </div>
            名前<input v-model="name" required>
        <button v-on:click="doAdd">モンスターを追加</button>
        
        <li v-for="(list,index) in item2" v-bind:key="list.id" v-if="list.hp">
            ID.{{list.id}} {{list.name}} HP.{{list.hp}}
            <span v-if="list.hp <= 50">瀕死</span>
            <button v-on:click="doAttack(index)">攻撃する</button>
            <!-- 消去ボタン-->
        <button v-on:click="doRemove(index)">モンスターを削除</button>
        </li>
    
    <div class="box1">
    <span v-for="list1 in text">{{list1}}</span>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name:'FOR',
    data: function(){
        return{
        item:{
            src: require("../assets/cat.jpeg"),
            alt:'商品サムネイル',
            width:150,
            height:150,
        },
        item2:[
            {id:1,name:'高村',hp:100},
            {id:2,name:'大沢',hp:80},
            {id:3,name:'ガブリエル',hp:120},
        ],
        ifcheck:true,
        radius:50,
        type:'A',
        name:'',
        text:'Vue'
        };
    },
    computed: {
        classObject: function(){
            return{
            child: true,
            'is-activ':false,
        };
        },
        styleObject: function(){
            return {
            color:'red',
            backgroundColor:'lightgray',
        };
        },
    },   
            created: function(){
                this.item2.forEach(function(list){
                Vue.set(list,'active',false)

                },this);
                },

                methods: {
            doAdd: function(){
                var max = this.item2.reduce(function(a,b){
                    return a > b.id ? a : b.id 
                },0);
                this.item2.push({
                    id:max+1,
                    name:this.name,
                    hp:500,
                });
            },
            doRemove:function(index:any){
                console.log(index);
                this.item2.splice(index,1);
            },
            doAttack:function(index:any){
                this.item2[index].hp -=10;
            },
        },
        });
</script>

<style>
@import "./css/style.css";

</style>