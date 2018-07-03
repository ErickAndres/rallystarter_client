<template>
  <div>
    <div class="col l5">
      <h1>{{ callout }}</h1>
      <h2>{{ detail }}</h2>
    </div>
    <div class="col l5">
      <img class="responsive-img" src="../assets/home-hero-lg.png" alt="">
    </div>
  </div>
</template>

<script>
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
<style>

</style>
