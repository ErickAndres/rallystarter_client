<template>
  <div class="pt-3">
      <ProgressBar></ProgressBar>
      <router-view></router-view>
  </div>
</template>

<script>
import ProgressBar from '../../components/Progress';

export default {
  // This is the name the element will be called in the browser.
  // It defaults to the name of the module, App(.vue)
  name: 'startRally',
  components: { ProgressBar },
};
</script>

<style>
</style>
