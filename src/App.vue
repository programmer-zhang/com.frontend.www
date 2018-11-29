<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .page {
      //padding-top: 51px;
      min-height: 100%;
  }
  .container {
      width: 1100px;
      min-width: 1100px;
      position: relative;
      margin: 0 auto;
  }
</style>
