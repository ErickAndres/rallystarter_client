<template>
  <div>
    <div class="center container--narrow-larger color-purple">
      <h3 class="sm-h3 boldest">Build Out Your Rally</h3>
      <p class="mb-0 bump max-width-4 mx-auto">To launch your Rally only one action and target is required but we recommend adding as many actions, targets and events as possible.</p>
    </div> 
    <form class="pt-2 container--narrow border-top mt-3">
        <h4 class="boldest color-purple m-0">Add A Primary Action and Target</h4>
        <p>Start with the most important action for supporters to take, along with all the targets associated with it.</p>
        <Action></Action>
        <fieldset class="border-top mb-2 p-2">
          <div class="col-12 pt-3 pb-4 px-2 flex"> <!--trid getting rid of flex but didnt address problem -->
            <div>
              <h4 class="boldest color-purple m-0" for="summary">Add more actions and targets</h4>
              <p class="caption">Adding more actions and targets improves your Rally's success.</p> <!-- convert to caption & get rid of outside divs-->
            </div>
              <button class="btn btn-ui bg-white">Add More</button>
          </div>
        </fieldset>
        <fieldset class="border-top mb-2 p-2">
          <div class="col-12 pt-3 pb-4 px-2 flex"> 
            <div>
              <h4 class="boldest color-purple m-0">Add an event</h4>
              <p>Organize your supporters, online and in real-life.</p>
            </div>
            <div>
              <button class="btn btn-ui bg-white" v-on:click="eventForm= !eventForm">Add Event</button>
            </div>
          </div>
          <div v-show="eventForm">
            <Event></Event>
          </div>
        </fieldset>
      <div class="border-top col-12 pt-3 pb-4 px-2">
        <router-link to="/start/step1"><button class="btn-orange col-2">Back</button></router-link>
        <router-link to="/start/step3"><button class="btn-main col-right">Save and Continue</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>

import Action from '@/components/Action';
import Event from '@/components/Event';

export default {
  name: 'RallyFormStep2',
  components: { Action, Event },
  data() {
    return {
      sendTo: '',
      visibilityStatus: false,
      eventForm: false,
      addMoreAction: function() {
      },
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>