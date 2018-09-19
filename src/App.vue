<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" :key="item.label"
      v-bind:class="{finished:item.isFinished}"
      v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from "./store.js"
export default {
  data:function(){
    return{
      title:"my first project",
      items:Store.fetch(),
      newItem:""
    }
  },
  methods: {
      toggleFinish:function(item){
        item.isFinished = !item.isFinished;
      },
      addNew:function(){
      this.items.push(
        {
          label:this.newItem,
          isFinished:false
        }
      );
    }
  },
  watch:{
    items: {
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
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

</style>
