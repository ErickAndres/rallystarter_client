<template>
  <div>
    <!-- current -->
    <div class="center container color-purple">
      <h3 class="sm-h3 boldest">Build Out Your Rally</h3>
      <p class="container--narrow">To launch your Rally only one action and target is required but we recommend adding as many actions, targets and events as possible.</p>
    </div> 
    <!-- need this div?-->
    <!--<div class="container--narrow mt-3 px-2 border-top pt-3">-->
    <form class="pt-2 container--narrow border-top mt-3">
        <label class="color-purple m-0">Add A Primary Action and Target</label>
        <p>Start with the most important action for supporters to take, along with all the targets associated with it.</p>
        <Action></Action>
        <fieldset class="border-top mb-2 p-2">
          <div class="col-12 pt-3 pb-4 px-2 flex">
            <div>
              <label class="color-purple m-0" for="summary">Add more actions and targets</label>
              <p>Adding more actions and targets improves your Rally's success.</p>
            </div>
            <div>
              <button class="btn-ui">Add More</button>
            </div>
          </div>
        </fieldset>
        <fieldset class="border-top mb-2 p-2">
          <div class="col-12 pt-3 pb-4 px-2 flex"> 
            <div>
              <!-- normal one -->
              <label>Add an event</label>
              <p>Organize your supporters, online and in real-life.</p>
            </div>
            <div>
              <button class="btn-ui" v-on:click="eventForm= !eventForm">Add Event</button>
            </div>
          </div>
          <div v-show="eventForm">
            <Event></Event>
          </div>
        </fieldset>
      <div class="col-12 pt-3 pb-4 px-2">
        <router-link to="/start/step1"><button class="btn-orange" style="width:100px;">Back</button></router-link>
        <router-link to="/start/step3"><button class="btn-main" style="float:right;">Save and Continue</button></router-link>
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
@media screen and (max-width : 800px){
  .formContainer{
    width: 80%;
  }
  input{
    width: 50%;
  }
}
@media screen and (max-width : 515px){
  .actionButtons{
    font-size: 0.9rem;
  }
  .btn-main{
    padding: 1.2rem 2rem;
    border: 2px solid #E7612C;
  }
}
</style>