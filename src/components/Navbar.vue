<template>
  <div>
    <nav class="white">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo"><img src="../assets/rs_logo.svg"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Discover</a></li>
          <li><router-link to="/start/step1">Start a Rally</router-link></li>
          <li><a href="#" @click="loginModal = true" >Login</a></li>
          <li><a href="#" @click="signupModal = true">Signup</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="modal" v-show="loginModal">
      <div class="modal-content">
        <Login></Login>
      </div>
    </div>
    <div class="modal" v-show="signupModal">
      <div class="modal-content">
        <SignUp></SignUp>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';

export default {
  name: 'Navbar',
  components: { Login, SignUp },
  data() {
    return {
      loginModal: false,
      signupModal: false,
    };
  },
  methods: {
  },
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
div.modal {
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  width: 100%;
}
.modal-open{
  overflow: hidden;
}
div.modal-content {
  background-color: white;
  width: 60%;
  text-align: center;
  padding: 0;
  z-index: 100;
}

</style>
