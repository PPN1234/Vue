<template>
  <div class="Page3">
    <h1>テキストエリアと自己紹介に飛ぶページ</h1>
   <page3/><br>
   <router-link to="/page1" class="box11">自己紹介</router-link> 
  </div>
</template>

<script>
import page3 from '@/components/Page3.vue';
export default {
  name: 'Page3',
  components: {
    page3,
  },
};
</script>