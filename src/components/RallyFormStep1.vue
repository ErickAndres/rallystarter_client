<template>
  <div class="formContainer">
    <h4>Ready, Set... Rally!</h4>
    <h5>Get started by describing your Rally's goal and purpose.</h5>
    <form>
      <div>
        <label for="title">Write Your Rally Title</label>
        <p>Grab people's attention with a title that describes your campaign goal.</p>
        <input type="text" class="formInput" placeholder="Rally Title" id="title"/>
      </div>
      <div>
        <label for="summary">Write Your Rally Summary</label>
        <p>Write 2-3 sentences about why you need to act now.</p>
        <input type="text" class="formInput" placeholder="Rally Summary" id="summary"/>
      </div>
      <div>
        <h6>Rally Details</h6>
        <label>Choose Some Categories</label>
        <p>Help Supporters Find Your Rally. Choose the categories that apply to your Rally. </p>
        <section>
          <div>
            <div><input type="checkbox" value="Animal Rights" class="filled-in .check" id="animalRights"/><label for="animalRights" class="checkboxLabel">Animal Rights</label></div>
            <div><input type="checkbox" value="Social Justice" class="filled-in" id="socialJustice"/><label for="socialJustice" class="checkboxLabel">Social Justice</label></div>
            <div><input type="checkbox" value="Economy" class="filled-in" id="economy"/><label for="economy" class="checkboxLabel">Economy</label></div>
            <div><input type="checkbox" value="Human Rights" class="filled-in" id="humanRights"/><label for="humanRights" class="checkboxLabel">Human Rights</label></div>
            <div><input type="checkbox" value="Health" class="filled-in" id="health"/><label for="health" class="checkboxLabel">Health</label></div>
            <div><input type="checkbox" value= "Media & Entertainment" class="filled-in" id="mediaEntertainment"/><label for="mediaEntertainment" class="checkboxLabel">Media & Entertainment</label></div>
          </div>
          <div>
            <div><input type="checkbox" value="Arts & Culture" class="filled-in" id="artCulture"/><label for="artCulture" class="checkboxLabel">Arts & Culture</label></div>
            <div><input type="checkbox" value="Disaster Relief" class="filled-in" id="disasterRelief"/><label for="disasterRelief" class="checkboxLabel">Disaster Relief</label></div>
            <div><input type="checkbox" value="Education" class="filled-in" id="education"/><label for="education" class="checkboxLabel">Education</label></div>
            <div><input type="checkbox" value="International Aid" class="filled-in" id="internationalAid"/><label for="internationalAid" class="checkboxLabel">International Aid</label></div>
            <div><input type="checkbox" value="Food & Agriculture" class="filled-in" id="foodAgriculture"/><label for="foodAgriculture" class="checkboxLabel">Food & Agriculture</label></div>
            <div><input type="checkbox" value="Politics" class="filled-in" id="politics"/><label for="politics" class="checkboxLabel">Politics</label></div>
          </div>
          <div>
            <div><input type="checkbox" value="Children's Issues" class="filled-in" id="children"/><label for="children" class="checkboxLabel">Children's Issues</label></div>
            <div><input type="checkbox" value="Public Safety" class="filled-in" id="publicSafety"/><label  for="publicSafety" class="checkboxLabel">Public Safety</label></div>
            <div><input type="checkbox" value="Environment" class="filled-in" id="environment"/><label for="environment" class="checkboxLabel">Environment</label></div>
            <div><input type="checkbox" value="Veteran Issues" class="filled-in" id="veteranIssues"/><label for="veteranIssues" class="checkboxLabel">Veteran Issues</label></div>
            <div><input type="checkbox" value="LGBTQ Rights" class="filled-in" id="LGBTQRights"/><label for="LGBTQRights" class="checkboxLabel">LGBTQ Rights</label></div>
            <div><input type="checkbox" value="Women Rights" class="filled-in" id="womenRights"/><label for="womenRights" class="checkboxLabel">Women Rights</label></div>
          </div>
        </section>
      </div>
      <div>
        <label>Upload a Rally Image*</label>
        <p>Add some flair to your Rally. Upload an impactful image.</p>
        <button id="imageUploader">Upload Image</button>
      </div>
      <div>
        <label for="videoLink">Have a Video?</label>
        <p>Add Youtube Video URL. This is optional and will replace your Rally Image.</p>
        <input type="text" class="formInput" placeholder="URL" id="videoLink"/>
      </div>
    </form>
    <div class="actionButtons">
      <!--<router-link to="/start/step1"><button class="backButton">Back</button></router-link>-->
      <router-link to="/start/step2"><button class="btn-main">Save and Continue</button></router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: 'RallyFormStep1',
  data() {
    return {
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  display: flex;
}
div{
  margin-top: 1.5rem;
}
section div{
  display: flex;
  flex-direction: column;
  margin: 2%;
}

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
input.formInput{
  border-radius: 5px;
  border: 1.5px solid #f0f0f0;
  padding: .5rem;
}
button{
  border-color: #E7612C;
  border-radius: 5px;
  padding: 1.15rem 4rem;
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
  justify-content: flex-end;
  margin: 2rem 0;
}
.checkboxLabel{
  font-size: 1rem;
  color: #989898;
  font-weight: 400;
}
section div div{
  height: 3rem;
}
.filled-in .check{
  border: 1.5px solid #989898;
}

[type="checkbox"].check{
  border: 1.5px solid #989898;
  background: #79F1CC !important;
}
#imageUploader{
  margin: 2rem 0;
  width: 65%;
  height: 250px;
  background: #F9F9F9;
  text-align: center;
  color: #979797;
  border: 1.5px solid #f0f0f0;
}
@media screen and (max-width : 800px){
  .formContainer{
    width: 80%;
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
