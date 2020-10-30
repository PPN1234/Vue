<template>
  <div class="Login">
    <h1>ログイン用ページ</h1>
   <Login/><br>
   <router-link to="/dkg" class="box11">DKG</router-link> 
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