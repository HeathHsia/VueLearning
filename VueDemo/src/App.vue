<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link :to="{ name: 'firstcomponent'}">firstcomponent Page</router-link> -->
    <div>
      <p>
        ask a question
        <input v-model="question"></input>
        <p v-if="seen">你能看见我吗</p>
      </p>
      <p>{{answer}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        seen: true,
        question: '',
        answer: 'I cant answer you until you ask a question'
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
