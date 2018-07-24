<template>
  <section>
    <div class="topButtonContainer">
    <button class="socialAction">Social Action</button>
    <button>+ Add Action</button>
    </div>
    <div>
      <label class="headingLabel">Message</label>
      <p>Write the tweet that you would like rally participants to send.</p>
      <input type="text" placeholder="What's the ask?" class="formInput contactInfo message"/>
    </div>
    <hr/>
    <div class="sidebyside">
      <div>
      <label class="headingLabel">Add Targets</label>
      <p>Think about government and corporate decision makers as well as powerful influencers who can apply pressure for change and allies who can amplify your cause.</p>
      </div>
      <button class="valign-wrapper targetButton">Target Type<img src="../assets/svgs/ui/dropdown.svg"/></button>
    </div>
    <label>Send to:</label><button>Barack Obama</button>
    <div class="contactDetails">
      <div class="informationInput">
        <label>Name</label>
        <input type="text" placeholder="Barack Obama" class="contactInfo formInput"/>
      </div>
      <div class="informationInput">
        <label>Company</label>
        <input type="text" placeholder="United States" class="contactInfo formInput"/>
      </div>
      <div class="informationInput">
        <label>Email</label>
        <input type="email" placeholder="obama@whitehouse.gov" class="contactInfo formInput"/>
      </div>
      <div class="informationInput">
        <label>External Contact form URL</label>
        <input type="text" placeholder="" class="contactInfo formInput"/>
      </div>
      <div class="informationInput">
        <label>Phone Number</label>
        <input type="number" placeholder="555 555 5555" class="contactInfo formInput"/>
      </div>
      <div class="informationInput">
        <label>Twitter Handle</label>
        <input type="text" placeholder="@obama" class="contactInfo formInput"/>
      </div>
    </div>
    <input type="text" placeholder="Add More" class="contactInfo formInput"/>
  </section>
</template>

<script>
  export default {
    name: 'ActionDetails'
  };
</script>

<style scoped>
section{
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  margin-top: 2rem;
}
.topButtonContainer{
  background: #F9F9F9;
  height: 5rem;
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 2.5rem;
  display: flex;
}
section label, p{
  margin: 2%;
  font-size: 1.1rem;
  color: #979797;
}

.contactInfo, .message, input.formInput{
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
button.contactInfo{
  width: 96%;
  padding: 1rem;
  text-align: left;
}
.sidebyside{
  display: flex;
  justify-content: flex;
  margin: 2rem 0;
}
.message{
  height: 6rem;
}
.contactDetails{
  margin: 1rem 0 3rem 7.3rem;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #f0f0f0;
  width: 80%;
}
.informationInput{
  width: 40%;
  margin: 2.5%;
}
button{
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  color: #979797;
  padding: 1.15rem 4rem;
}
hr{
  border: 1px solid #f0f0f0;
  margin: 1.5rem 0;
}
section button{
  margin: 2% 0 2% 3%;
  padding: 0.5rem 2rem;
}
.socialAction{
  background: #2F6E87;
  color: white;
}
.headingLabel{
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
}
.targetButton{
  margin: 8% 2% 1%;
  width: 50%;
  height: 3rem;
  font-size: 0.9rem;
}
</style>
