<template>
  <div class="containerz">
    <div class="content">
      <h1 class="title">Advocacy Tools for Nonprofits</h1>
      <p>We made it easy for nonprofits, advocacy groups and online organizers
      to embed change campaigns with one-click actions into any website.</p>
      <section>
        <div class='left_side'>
          <img class="widgets_img" src="../assets/widgets-screenshot.png" alt="">
        </div>
        <div class='right_side'>
          <h4 class="title">Embeddable Action Widgets</h4>
          <ul>
            <li>- Click to call/email campaigns, congressional database,
            petitions, boycotts, social media and more.</li>
            <li>- Grow your email list when supporters opt-in as they
            take actions. Available through CSV download and
            database integration.</li>
          </ul>
          <button>Learn More</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

/**
 * Homepage
 *
 * Contains: Header, Search, RallyList, and Callout components
 */
export default {
  data() {
    return {
      lol: 'Welcome to Rally Starter',
    };
  },
  name: 'Advocacy',
};
/* eslint-disable */
</script>

<style scoped>
h1{
  color: #2F6D87;
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
}
p{
  color: #808080;
  width: 60%;
  text-align: center;
  margin: 0 auto;
}
.left_side{
    width: 50%;
}
img{
  width: 90%;
}
.right_side{
  width:50%;
  padding-top: 60px;
  font-size: 1.25rem;
}
.content{
  background: url("../assets/svgs/hex-cluster-2.svg");
  background-position: center;
  background-size: cover;
}
.containerz{
  width: 80%;
  margin: 6% auto;
}
section{
  display: flex;
  margin: 4rem 0;
}
h4{
  color: #2F6D87;
  font-size: 1.6rem;
  font-weight: 800;
}
li{
  font-size: 1.1rem;
  color: #808080;
  padding: 0.5rem;
}
button{
  background: #E7612C;
  color: white;
  border-radius: 5px;
  border: 2px solid  #E7612C;
  padding: 2% 5%;
}
@media screen and (max-width : 720px){
  section{
    flex-direction: column-reverse;
  }
  .left_side, .right_side{
    width: 100%;
  }
}
</style>
