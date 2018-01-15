<template>
  <div id="firstcomponent">
    <div>
      <h1>I am a title</h1>
      <p>{{message}}</p>
      <router-link :to="{ name: 'HelloWorld', params: {} }">HelloWorldPage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'firstcomponent'
    }
  }
}
</script>

<style>

</style>
