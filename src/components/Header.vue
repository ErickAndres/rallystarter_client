<template>
  <div class="headerContainer">
    <div class="headerDetail">
      <h1>{{ callout }}</h1>
      <p>{{ detail }}</p>
    </div>
    <div class="statementImage">
      <img class="responsive-img" src="../assets/home-hero-lg.png" alt="">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'PageHeader',
  data() {
    return {
      callout: 'People-powered Social Change',
      detail: 'Advocacy tools to organize supporters & mobilize actions for a better world',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #2F6D87;
  font-size: 2rem;
  font-weight: 800;
}
.headerContainer{
  display: flex;
  width: 90%;
  margin: 0 auto;
}
p{
  font-size: 1.4rem;
}
.headerDetail{
  margin: 5%;
  width: 60%;
}
.statementImage{
  width: 90%;
}
/*.h1 {*/
/*  float:left;*/
/*}*/
/*.h2 {*/
/*  float:left;*/
/*}*/
/*.responsive-img {*/
/*  float:right;*/
/*}*/
</style>
