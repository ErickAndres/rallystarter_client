<template>
  <div id="app">
    <!--Add nav component-->
    <!--Add header component-->
    <img src="./assets/logo.png">
    <!-- Add so that route components are rendered in <App /> -->
    <router-view/>

    <!--Add footer component-->
  </div>
</template>

<script>
export default {
  // This is the name the element will be called in the browser.
  // It defaults to the name of the module, App(.vue)
  name: 'App',
};
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
</style>
