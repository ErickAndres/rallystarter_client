<template>
  <div>
      <ProgressBar></ProgressBar>
      <Cards></Cards>
      <router-view></router-view>
  </div>
</template>

<script>
import ProgressBar from '../../components/Progress';
import Cards from '../../components/Options';

export default {
  // This is the name the element will be called in the browser.
  // It defaults to the name of the module, App(.vue)
  name: 'startRally',
  components: { ProgressBar, Cards },
};
</script>

<style>
</style>
