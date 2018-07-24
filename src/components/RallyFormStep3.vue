<template>
  <div class="formContainer">
    <h4>Build Out Your Rally</h4>
    <h5>To launch your Rally only one action and target is required but we recommend adding as many actions, targets and events as possible.</h5>
    <form>
      <div>
        <label>Add A Primary Action and Target</label>
        <p>Start with the most important action for supporters to take, along with all the targets associated with it.</p>
        <Action></Action>
      </div>
      <div class="moreAction">
        <div class="sidebyside">
          <div>
            <label for="summary">Add more actions and targets</label>
            <p>Adding more actions and targets improves your Rally's success.</p>
          </div>
          <button v-on:click="addMoreAction">Add More</button>
        </div>
        <Action v-show="visibilityStatus"></Action>
      </div>
      <div>
        <div class="sidebyside">
          <div>
            <label>Add an event</label>
            <p>Organize your supporters, online and in real-life.</p>
          </div>
          <!-- On Click on the button the Detailed Events Form expands -->
          <button v-on:click="eventForm= !eventForm">Add Event</button>
        </div>
        <div v-show="eventForm">
          <Event></Event>
        </div>
      </div>
    </form>
    <div class="actionButtons">
      <router-link to="/start/step2"><button class="backButton">Back</button></router-link>
      <router-link to="/start/step4"><button class="btn-main">Save and Continue</button></router-link>
    </div>
  </div>
</template>

<script>

import Action from '@/components/Action';
import Event from '@/components/Event';

export default {
  name: 'RallyFormStep3',
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
.formContainer{
  width: 50%;
  margin: 0 auto;
}
h4{
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem;
}
h5{
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}
form{
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  padding: 2.5rem 0;
}
h6{
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;
  color: #f0f0f0;
  margin-bottom: 2.5rem;
}

label{
  font-size: 1.8rem;
  color: #4a4a4a;
  font-weight: 600;
}
input{
  border-radius: 5px;
  border: 1.5px solid #f0f0f0;
  padding: 0.5rem 1rem;
}
button{
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  color: #979797;
  padding: 1.15rem 4rem;
}
section button{
  margin: 2.5%;
  padding: 0.5rem 2rem;
}
.btn-main{
  background: #f95607;
  color: white;
}
.backButton{
  color: #E7612C;
  border: 2px solid #E7612C;
}
.actionButtons{
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}
.moreAction{
  margin: 5rem 0;
  border-bottom: 2px solid #f0f0f0;
  border-top: 2px solid #f0f0f0;
  padding: 3rem 0;
}
.sidebyside{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

}
.sidebyside button{
  margin: .5rem 1rem;
}

</style>
