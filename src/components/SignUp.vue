<template>
  <section>
    <div class="modalHeader">
      <h3>Signup</h3>
      <a href=""><i class="material-icons">close</i></a>
    </div>
    <div class="modalBody">
      <div>
        <p>To protect our platform from spam and bots, we allow only one action per day for all non-confirmed users. Please register to take unlimited actions for change on Rally Starter.</p>
        <button>Join with Google</button>
        <button>Join with Facebook</button>
        <button>Join with Twitter</button>
        <p><a href="">Already have an account? Log in.</a></p>
      </div>
      <h4 class="valign-wrapper">OR</h4>
      <div>
        <form>
          <label>Email</label>
          <input type="text" placeholder="user@example.com" class="formInput" v-model="email">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" class="formInput" v-model="password">
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter your password again" class="formInput" v-model="password_confirmation">
          <input type="checkbox"/><label class="policy">I agree to Rally Starter's Terms of Use, Privacy Policy, and Copyright Policy.</label>
          <button class="signupButton" @click="register">Join</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'SignUp',
  data() {
    return {
        email: '',
        password: '',
        password_confirmation: ''
    };
  },
  methods: {
    async register () {
    console.log(this.email)
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
    }
  }
};
</script>

<style scoped>
input.formInput{
  border-radius: 5px;
  border: 1.5px solid #f0f0f0;
  width: 95%;
  margin: 0;
  padding: 0 .5em;
  font-size: 100%;
}
button{
  border: 2px solid #50556C;
  border-radius: 5px;
  color: #50556C;
  padding: 0.7rem;
  width: 80%;
  margin: 0.5rem;
}
label{
  text-align: left;
  margin: 0.5rem 0;
  font-weight: 500;
  color: #50556e;
  font-size: 1.1em;
  margin-bottom: .25rem;
}
.modalHeader{
  background: #F7F7F7;
  display: flex;
  justify-content: space-between;
  padding: 2% 2% 1%;
}
h3{
  font-size: 1.3rem;
  background-image: linear-gradient(90deg,#b6fbeb,#b6fbeb);
  background-repeat: no-repeat,no-repeat,repeat-x;
  background-size: 100% .35em;
  background-position: 0 .65em;
}
.modalBody{
  display: flex;
  justify-content: space-around;
}
h4{
  font-size: 1.5rem;
  opacity: .75;
}
form{
  display: flex;
  flex-direction: column;
}
.modalBody div{
  width: 40%;
}
.policy{
  font-size: 0.8rem;
  margin: 1.3rem 0.5rem;
}
.signupButton{
  width: 30%;
  margin-left: 70%;
  margin-bottom: 1rem;
}
a{
  color: #50556C;
  text-decoration: underline;
}
</style>
