<template>
  <div class="container">
    <page-header></page-header>
  </div>
</template>

<script>
import PageHeader from '../components/Header';

/**
 * Homepage
 *
 * Contains: Header, Search, RallyList, and Callout components
 */
export default {
  data() {
    return {
      title: 'Welcome to Rally Starter',
      subtitle: 'For organizing events!',
    };
  },
  name: 'HomePage',
  components: { PageHeader },
};
</script>

<style scoped></style>
