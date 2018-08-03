<template>
  <div class="formContainer">
    <h4>Ready to Rally?</h4>
    <h5>This is the last step. We promise.</h5>
    <form>
      <div class="sidebyside">
        <div>
          <label>Choose a start date</label>
          <p>Today? Tomorrow? In the year 3021?</p>
        </div>
        <input type="date" placeholder="Add Event" class="startDate formInput"/>
      </div>
      <div class="rallyType">
        <label>Finalize your Rally plan</label>
        <section>
          <div>
            <button>Starter Rally</button>
            <p>Free Forever</p>
          </div>
          <div>
            <button>Pro Rally</button>
            <p>Free 30 day Trial!</p>
            <p>$49/month</p>
          </div>
          <div>
            <button>Enterprise Rally</button>
            <p>$499/month & up</p>
          </div>
        </section>
      </div>
    </form>
    <div class="actionButtons">
      <router-link to="/start/step3"><button class="backButton">Back</button></router-link>
      <router-link to="/start/step4"><button class="btn-main">Submit for Review</button></router-link>
    </div>
    <div class="footnote">
      <p>We recommend you <a href="">Preview Your Rally</a></p>
      <img src="../assets/svgs/finger-pointing-up.svg"/>
      <p>Your raly won't be public until the start date, and until it's been approved</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FormStep4',
  data() {
    return {
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formContainer{
  width: 50%;
  margin: 0 auto;
}
h4{
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem;
}
h5{
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}
form{
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  padding: 2.5rem 0;
}
section{
  display: flex;
  padding: 2rem 0;
}
section input{
  width: 75%;
  text-align: center;
}
label{
  font-size: 1.8rem;
  color: #4a4a4a;
  font-weight: 600;
}
input.formInput{
  border-radius: 5px;
  border: 1.5px solid #f0f0f0;
  padding: 0 1rem;
}
button{
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  color: #979797;
  padding: 1.15rem 4rem;
}
section button{
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 0.5rem 2rem;
}
section button:hover,section button:focus {
  background: #2F6E87;
  color: white;
}
.btn-main{
  background: #f95607;
  color: white;
}
.backButton{
  color: #E7612C;
  border: 2px solid #E7612C;
}
.actionButtons{
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}
p{
  text-align: center;
  font-size: 0.9rem;
  color: #979797;
}
.sidebyside{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.sidebyside button{
  margin: .5rem 1rem;
}
.startDate{
  width: 40%;
}
.footnote{
  width: 40%;
  margin-left: 60%;
}
img{
  display: block;
  margin: 0 auto;
}
.rallyType{
  border-top: 2px solid #f0f0f0;
  padding: 3rem 0;
}
a{
  color: #979797;
  text-decoration: underline;
}
@media screen and (max-width : 720px){
  .formContainer{
    width: 80%;
  }
}
</style>
