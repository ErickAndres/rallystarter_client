<template>
  <div>
      <RallyPage></RallyPage>
      <router-view></router-view>
  </div>
</template>

<script>
import RallyPage from '@/components/RallyPage';
export default {
  name: 'RallyShowPage',
  components : { RallyPage },
  data () {
    return {

    }
  }
};
</script>

<style>
</style>
