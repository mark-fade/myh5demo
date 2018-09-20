<template>
  <div id="app">
    <section class="welcome" v-show="welcome" transition="welcome"></section>
    <button id="bt-vuejs" v-on:click="toVueJsPage()">vue.js学习</button>
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
    }, 1000);
  },
  methods: {
    toVueJsPage:function(){
      this.$router.push('/vueJsStudy');
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
.mobile-tips{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,.75);
    text-align: center;
    color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mobile-tips-inner{
    width: 330px;
    padding-bottom: 200px;
}
.mobile-model{
    flex-grow: 1;
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
