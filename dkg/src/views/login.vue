<template>
  <div class="Login">
    <h1>テキストエリアと自己紹介に飛ぶページ</h1>
   <Login/><br>
   <router-link to="/dkg" class="box11">自己紹介</router-link> 
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
export default {
  name: 'log',
  components: {
    Login,
  },
};
</script>