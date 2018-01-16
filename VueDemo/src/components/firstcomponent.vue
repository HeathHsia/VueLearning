<template>
  <div id="firstcomponent">
    <div>
      <h1 class="headerA">I am a title</h1>
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
  .headerA {
    margin: auto;
    background: #1e84e2;
    text-decoration-color: ##eee3df;
    font: 16px;
  }
</style>
