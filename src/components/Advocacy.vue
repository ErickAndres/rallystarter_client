<template>
  <div class="containerz">
    <div class="background_img">
      <img class="responsive-img" src="../assets/svgs/hex-cluster-2.svg" alt="">
    </div>
    <div class="content">
      <h1 class="title">Advocacy Tools for Nonprofits</h1>
      <p>We made it easy for nonprofits, advocacy groups and online organizers
      to embed change campaigns with one-click actions into any website.</p>
      <div class='left_side'>
        <img class="widgets_img" src="../assets/widgets-screenshot.png" alt="">
      </div>
      <div class='right_side'>
        <h4 class="title">Embeddable Action Widgets</h4>
        <ul>
          <li>Click to call/email campaigns, congressional database,
          petitions, boycotts, social media and more.</li>
          <li>Grow your email list when supporters opt-in as they
          take actions. Available through CSV download and
          database integration.</li>
        </ul>
      </div>
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
.left-col {
    float:left;
}
.right_col {
  width:50%;
  float:right;
  padding-top: 60px;
  font-size: 1.25rem;
}
</style>