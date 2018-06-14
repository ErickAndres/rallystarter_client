<template>
  <nav class="teal accent-2">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img src="../assets/rs_logo.svg"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Discover</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
img {
  display: block;
  /*height: 50px;*/
  width: 125px;
  max-width: 100%;
  height: auto;
}
</style>
