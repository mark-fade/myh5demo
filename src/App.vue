<template>
  <div id="app">
    <section class="welcome" v-show="welcome" transition="welcome"></section>
    <button id="bt-vuejs" v-on:click="toVueJsPage()">vue.js学习</button>
    <router-link to="/HelloWorld">点击我跳转</router-link>
  </div>
</template>

<script>
import Store from "./utils/store.js"
export default {
  data:function(){
    return{
      title:"仿界面",
      welcome: true,//欢迎页
    }
  },
  created(){
    setTimeout(() => {
      this.welcome=false;
    }, 500);
  },
  methods: {
    toVueJsPage:function(){
      this.$router.push("/vueJsStudy");
    }
  },
  watch:{

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  text-decoration: underline;
  color: red;
}
.welcome {
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    transition: .25s all linear;
    background: url(./assets/images/launchimage.png) no-repeat center center;
    background-size: cover;
}
#bt-vuejs{
  background-color: blue;
  width: 50px;
  height: 50px;
  color: #fff;
  border-radius: 50px;
  border-color: red;
  border-width: 1px;
  position: fixed;
  bottom:100px;
  right: 20px;
}
</style>
