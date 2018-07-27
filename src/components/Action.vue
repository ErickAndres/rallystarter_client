<template>
  <div>
    <section>
      <div>
        <button>+ Add Action</button>
        <button class="valign-wrapper">Target Type<img src="../assets/svgs/ui/dropdown.svg"/></button>
      </div>
      <label for="sendInfo">Send to:</label>
      <!-- On enter the Form Expands -->
      <input type="text" class="formInput" placeholder="Search for individuals and groups or create your own targets" id="sendInfo" v-on:keypress.enter="actionForm = !actionForm"/>
    </section>
    <div v-show="actionForm">
      <ActionDetails></ActionDetails>
    </div>
  </div>
</template>

<script>
import ActionDetails from '@/components/ActionDetail';

export default {
    name: 'Action',
    components: { ActionDetails },
    data() {
      return {
        actionForm: false,
      };
    },
}
</script>

<style scoped>
section{
  border: 2px solid #f0f0f0;
  border-radius: 5px;
}
section div{
  display: flex;
  justify-content: space-between;
  background: #F9F9F9;
  height: 5rem;
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 2.5rem;
}
section label{
  margin: 2%;
  font-size: 1rem;
  color: #979797;
}
input.formInput{
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
#sendInfo{
  width: 91%;
  margin: 3% 2%;
}

</style>
