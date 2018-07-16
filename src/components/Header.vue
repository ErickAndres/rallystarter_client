<template>
  <div>
    <div class="left">
      <h1>{{ callout }}</h1>
      <h2>{{ detail }}</h2>
    </div>
    <div class="right">
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
.left {
  font-size: 1.25rem;
  float:left;
}
.right {
  float:right;
}
.img {
    /*height: 50px;*/
  width: 125px;
  max-width: 100%;
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
