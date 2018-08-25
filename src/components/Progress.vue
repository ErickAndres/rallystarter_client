<template>
  <div class="mx-auto max-width-3 px-2">
    <div class="flex flex-align-center flex-justify-space-around">
      <router-link v-for="step in steps" :key="step.id" :to="step.link" exact class="tabControl p-1 center color-purple" v-on:click="changeStatus(step)" >
        <div class="hex-outline"><span class="hex-number boldest h4">{{ step.stepNumber }}</span></div>
        <p class="mb-0">{{ step.title }}</p>
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
          /*{
            stepNumber: 1,
            title: 'Price',
            heading: 'If you lead, they\'ll follow',
            info: 'Rally Starter is free but we recommend organizations Pro or Enterprise Rally for additional benefits.',
            active: true,
            link: '/start/step1',
          },*/
          {
            stepNumber: 1,
            title: 'Overview',
            heading: 'Ready Set... Rally',
            info: 'Get started by describing your Rally\'s goal and purpose.',
            active: false,
            link: '/start/step1',
          },
          {
            stepNumber: 2,
            title: 'Actions',
            heading: 'Build Out Your Rally',
            info: 'To launch your Rally only one action and target is required but we recommend adding as many actions, targets and events as possible.',
            active: false,
            link: '/start/step2',
          },
          {
            stepNumber: 3,
            title: 'Review',
            heading: 'Ready to Rally?',
            info: 'This is the last step. We promise.',
            active: false,
            link: '/start/step3',
          },
        ],
        changeStatus: function(step) {
          step.active = !step.active;
        },
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
