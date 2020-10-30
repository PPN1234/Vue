<template>

  <div id="app">
     <!--<div id="login">
       <router-link to="/login">ログイン</router-link>
    </div>-->
    <div id="nav">
      <div>
      <router-link to="/home" class="box1">HOME画面</router-link> <!--クリックしてページ遷移するリンク-->
      <!--リンク間に半角スペースが入る-->
      </div>
    </div>
    <router-view/>
  </div>
   
</template>

<style>
@import "/components/css/style.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding:30px;
  text-align:center;
}
#login {
text-align: left;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
