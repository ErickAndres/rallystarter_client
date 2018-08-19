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
// import 'materialize-css/dist/css/materialize.css';
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
@import url('https://fonts.googleapis.com/css?family=Poppins'); /* In alphabetical order?*/
@import './css/global/colors.css';
@import './css/global/containers.css';
@import './css/global/flexbox.css';
/*@import './css/global/form-elements.css';*/
@import './css/global/icons.css'; /* HERE */
@import './css/global/page.css';
@import './css/global/rally-cards.css';
@import './css/global/typography.css';
@import './css/global/utilities.css';
@import '../node_modules/commons.css/lib/index.css';
/*@import '../node_modules/materialize-css/dist/css/materialize.css'; causes conflicts with containers.css*/

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
  line-height: 1.5;
  /*box-sizing: border-box;*/
}
body{
  color: #4a4a4a;
  font-size: 16px;
}
</style>
