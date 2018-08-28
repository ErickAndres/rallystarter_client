<template>
  <div>
    <div class="center container--narrow-larger color-purple">
      <h3 class="sm-h3 boldest">Ready to Rally?</h3>
      <p class="mb-0 bump max-width-4 mx-auto">This is the last step. We promise.</p>
    </div>
    <form class="pt-2 container--narrow border-top mt-3">
      <div class="col-12 pt-3 pb-4 px-2 flex">
        <div>
          <h4 class="boldest">Choose a start date</h4>
          <p caption>Today? Tomorrow? In the year 3021?</p>
        </div>
        <input type="date" placeholder="Add Event"/> <!-- need to fix border issue -->
      </div>
      <div class="border-top mb-2 p-2">
        <h4 class="boldest">Finalize your Rally plan</h4>
        <section class="flex">
          <div class="col-4">
            <button>Starter Rally</button>
            <p>Free Forever</p>
          </div>
          <div class="col-4">
            <button>Pro Rally</button>
            <p>Free 30 day Trial! 
               $49/month</p>
          </div>
          <div class="col-4">
            <button>Enterprise Rally</button>
            <p>$499/month & up</p>
          </div>
        </section>
      </div>
      <div class="border-top col-12 pt-3 pb-4 px-2">
        <router-link to="/start/step2"><button class="btn-orange col-2">Back</button></router-link>
        <router-link to=""><button class="btn-main col-right">Submit for Review</button></router-link>
      </div>
    </form>
    <div class="center">
      <p>We recommend you <a href="">Preview Your Rally</a></p>
      <img src="../assets/svgs/finger-pointing-up.svg"/>
      <p>Your raly won't be public until the start date, and until it's been approved</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FormStep3',
  data() {
    return {
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
