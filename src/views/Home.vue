<template>
  <div>
    <PageHeader></PageHeader>
    <SearchBar></SearchBar>
    <Quote></Quote>
    <Advocacy></Advocacy>
  </div>
</template>

<script>
import PageHeader from '../components/Header';
import Quote from '../components/Callout';
import Advocacy from '../components/Advocacy';
import SearchBar from '../components/SearchBar';

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
  components: { PageHeader, Quote, Advocacy, SearchBar },
};
</script>

<style scoped></style>
