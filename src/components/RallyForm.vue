<template>
  <div>
    <form action="/rallies">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title">
      </div>
      <div>
        <label for="summary">Summary</label>
        <input type="text" name="summary">
      </div>
      <div>
        <label for="problem">Problem</label>
        <input type="text" name="problem">
      </div>
      <div>
        <label for="solution">Solution</label>
        <input type="text" name="solution">
      </div>
      <div>
        <label for="category">Category</label>
        <input type="text" name="category">
      </div>
      <div>
        <input type="submit" value="Create Rally">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RallyForm',
  data() {
    return {
      info: 'About this form.',
    };
  },
  props: [],
};
</script>

<style scoped>

</style>
