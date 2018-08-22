<template>
  <div class="render-top-nav">
    <nav class="border-bottom">
      <div class="container--wide table width-full p-1">
        <div class="middle-cell p-1" data-logo="green-grey-text">
          <a href="/">
            <img class="block" src="../assets/rs_logo.svg">
          </a>
        </div>
        <div class="table-cell pr-1 align-right align-middle">
          <span>
            <span class="sm-sub pl-3 md-pl-2">
              <a class="hover-accent" href="#">Discover</a>
            </span>
            <span class="sm-sub pl-3 md-pl-2">
              <router-link to="/start/step1">Start a Rally</router-link>
            </span>
            <span class="sm-sub pl-3 md-pl-2">
              <a class="hover-accent" href="#" @click="loginModal = true" >Login</a>
            </span>
            <span class="sm-sub pl-3 md-pl-2">
              <a class="hover-accent" href="#" @click="signupModal = true">Signup</a>
            </span>
            <span class="sm-sub pl-3 md-pl-2">
              <a class="hover-accent" href="#">Logout</a>
            </span>
          </span>
        </div>
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
</style>
