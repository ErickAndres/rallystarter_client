<template>
  <nav class="white">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo"><img src="../assets/rs_logo.svg"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Discover</a></li>
        <li><router-link to="/start/step1">Start a Rally</router-link></li>
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
nav{
  padding: 0.5rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
img {
  display: block;
  /*height: 50px;*/
  width: 100px;
  height: auto;
  margin: 0.2rem 5rem 0.8rem;
}
a{
  color: #4a4a4a;
}
a:hover{
  text-decoration: underline teal;
}
.white{
  padding: 0.4rem 0;
}
</style>
