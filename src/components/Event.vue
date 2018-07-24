<template>
  <section>
    <div>
      <h5 class="valign-wrapper">Event Name</h5>
    </div>
    <label for="sendInfo">Fill out the event details</label>
    <input type="text" placeholder="Event Name" class="eventInfo formInput"/>
    <button class="eventInfo">Event Type</button>
    <input type="text" placeholder="Location" class="eventInfo formInput"/>
    <input type="text" placeholder="Event Overview" class="eventInfo overview formInput"/>
    <input type="text" placeholder="Event Link (URL)" class="eventInfo formInput"/>
    <input type="date" placeholder="Start Date MM/DD/YYYY" class="eventInfo formInput"/>
    <input type="date" placeholder="End Date MM/DD/YYYY" class="eventInfo formInput"/>
  </section>
</template>

<script>

  export default {
    name: 'Event',
  };
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

.eventInfo, input.formInput{
  width: 91%;
  margin: 1.25% 2%;
  border-radius: 5px;
  border: 1.5px solid #f0f0f0;
  padding: 0.25rem 1rem;
}
h5{
  margin-left: 2%;
  font-size: 1.5rem;
  font-weight: 600;
}
button.eventInfo{
  width: 96%;
  padding: 1rem;
  text-align: left;
}
.overview{
  height: 9rem;
}
</style>
