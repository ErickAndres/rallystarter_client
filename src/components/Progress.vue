<template>
  <div class="status">
    <div v-for="step in steps" :key="step.id">
      <router-link to="/start">
        <div class="stepsBar" v-bind:class="{currentStep: step.active}">
            <div class="hex">{{ step.stepNumber }}</div>
            <p>{{ step.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      steps: [
        {
          stepNumber: 1,
          title: 'Price',
          heading: 'If you lead, they\'ll follow',
          info: 'Rally Starter is free but we recommend organizations Pro or Enterprise Rally for additional benefits.',
          active: true,
          link: '/start',
        },
        {
          stepNumber: 2,
          title: 'Overview',
          heading: 'Ready Set... Rally',
          info: 'Get started by describing your Rally\'s goal and purpose.',
          active: '',
          link: '/start/step2',
        },
        {
          stepNumber: 3,
          title: 'Actions',
          heading: 'Build Out Your Rally',
          info: 'To launch your Rally only one action and target is required but we recommend adding as many actions, targets and events as possible.',
          active: '',
          link: '/start/step3',
        },
        {
          stepNumber: 4,
          title: 'Review',
          heading: 'Ready to Rally?',
          info: 'This is the last step. We promise.',
          active: '',
          link: '/start/step4',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status{
  margin: 2% auto;
  width: 50%;
}
.hex{
  background-image: url("../assets/svgs/ui/hex-outline.svg");
  background-repeat:no-repeat;
  height: 80px;
  background-position: center;
  padding: 25px;
  font-size: 1.5em;
  font-weight: 600;
  margin: 0 auto;
}
.stepsBar{
  width: 20%;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.5;
}
.stepsBar p{
  text-align: center;
}
.status{
  display: flex;
  justify-content: space-around;
}
.currentStep{
  opacity: 1;
}
.stepsBar:hover{
  opacity: 1;
}


</style>
