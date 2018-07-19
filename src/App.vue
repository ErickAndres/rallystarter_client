<template>
  <div>
    <!-- REQUIRED: Add nav component-->
    <navbar></navbar>

    <!-- OPTIONAL: Add site header component-->
    <!-- Add so that route components are rendered in <App /> -->
    <router-view/>

    <!-- REQUIRED: Add footer component-->
    <PageFooter></PageFooter>
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
import PageFooter from './components/Footer';

export default {
  // This is the name the element will be called in the browser.
  // It defaults to the name of the module, App(.vue)
  name: 'App',
  components: { Navbar, PageFooter },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  margin-top: 60px;
  font-size: 16px;
}
*{
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  color: #4a4a4a;
  line-height: 1.5;
}
body{
  color: #4a4a4a;
}
</style>
