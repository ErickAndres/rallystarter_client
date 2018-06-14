<template>
  <div id="app">
    <!-- REQUIRED: Add nav component-->
    <navbar></navbar>
    <!-- OPTIONAL: Add site header component-->
    <!-- Add so that route components are rendered in <App /> -->
    <router-view/>

    <!-- REQUIRED: Add footer component-->
  </div>
</template>

<script>
  /**
   * Main
   * @desc - The main component that loads all parts of the app.
   * Things like headers, footers, navigation should live here as well as:
   *  - Auth
   *  - State
   */
  import 'materialize-css';
  import 'materialize-css/dist/css/materialize.css';
  import Navbar from './components/Navbar';

  export default {
  // This is the name the element will be called in the browser.
  // It defaults to the name of the module, App(.vue)
  name: 'App',
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
