<template>
  <div>
    <section>
      <h4>{{ title }} </h4>
      <p>{{ message }} </p>
      <header>
        <div class="rallyImage">
          <img :src="image"/>
        </div>
        <form>
          <div class="form-row">
            <input type="text" placeholder="First name" class="formInput"/>
            <input type="text" placeholder="Last name" class="formInput"/>
          </div>
          <div class="form-row">
            <input type="email" placeholder="Email" class="formInput" />
            <input type="number" placeholder="Zip" class="formInput"/>
          </div>
          <p>Read the letter</p>
          <div>
          </div>
          <div>
            <p><span>{{ actionsTaken }}</span> actions taken</p>
          </div>
          <div>
            <a href="">Share</a>
            <a href="">Embed</a>
          </div>
        </form>
      </header>
    </section>
    <div class="sticky-nav">
      <a href="">Actions</a>
      <a href="">Progress</a>
    </div>
    <section>
      <h3>More Actions</h3>
      <form class="moreAction">
        <div>
          <h4>Paul D. Ryan</h4>
        </div>
        <a href="">Email</a>
        <div>
          <label>Subject *</label>
          <input placeholder="Remove Nunes" class="formInput"/>
          <label>Message *</label>
          <textarea class="formInput">Devin Nunes recused himself from the investigation in April after the news came out that he was secretly meeting at the White House after hours to discuss the investigation with the very people he was supposed to be investigating.

  Following Nunes' recusal, you stated your support for his recusal because of his conflict of interest serving on Trump's transition team.

  Nunes' actions have disgraced the House Intelligence Committee and present a danger to national security. Please act to remove Nunes and protect our nation.</textarea>
          <label>Your Email *</label>
          <input type="email" class="formInput"/>
          <label>Your first name *</label>
          <input type="text" class="formInput"/>
          <label>Your last name *</label>
          <input type="text" class="formInput"/>
          <label>Prefix</label>
          <input type="email" class="formInput" placeholder="Ms."/>
          <label>Phone *</label>
          <input type="number" class="formInput"/>
          <p>Topics are required when emailing congress. Please select the topic(s) that most closely aligns with the rally.</p>
        </div>
          <button>Email</button>
          <p>Paul D. Ryan</p>
        <div>
        </div>

      </form>
    </section>
    <section>
      <h3>Contact Influencers to Apply Pressure</h3>
      <form class="moreAction">
        <div>
          <h4>Congressional Legislators</h4>
        </div>
        <a href="">Call</a>
          <h4>Phone Script</h4>
          <p>Hello, my name is [your name] and I'm calling on you to pressure House Speaker Paul Ryan to enforce Devin Nunes' recusal from the Trump Russia investigation.</p>
          <h4>Important talking points</h4>
          <ol>
            <li>Devin Nunes recused himself from the investigation in April after the news came out that he was secretly meeting at the White House after hours to discuss the investigation with the very people he was supposed to be investigating.</li>
            <li>Since April's recusal, Rep Nunes has continued to serve as the Chairman of the House Intelligence Committee and has actively attempted to undermine Mueller's investigation. This conflict of interest can not continue any longer.</li>
            <li>It’s time to demand that House Speaker Paul Ryan remove Nunes as chair of the House Intelligence Committee.</li>
          </ol>
          <p>Don't see your congress members above? <a href="">Click here</a> to find or select them.</p>
        <div>
        </div>
      </form>
    </section>
    <section class="progressSection">
      <h4>Progress</h4>
      <div>
        <p class="valign-wrapper">By tracking actions and sharing progress with the team, we know we are a part of something bigger than ourselves. Keep taking action and recruiting more supporters to join the rally!</p>
        <img src="../assets/placeholder-chart.png" class="placeholder-chart"/>
      </div>
    </section>
    <aside>
      <h2>Action Checklist</h2>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'RallyPage',
    data () {
      return {
        title: "Remove Nunes from the House Intelligence Committee",
        message: "Since pledging to recuse himself from the Trump-Russia investigation in April, Congressman Devin Nunes has continued to abuse his power to cover up for the Trump administration. With the GOP’s support, Nunes is attempting to undermine Mueller’s investigation by publicizing a memo that attacks the Trump-Russia investigation. Call on House Speaker Paul Ryan to use his power to remove Nunes as chair of the House Intelligence Committee.",
        image: "https://rally-starter.s3.us-west-1.amazonaws.com/1517538903.png",
        actionsTaken: 588,
        actionsChecklist: [
          "Email Paul D. Ryan",
          "Tweet to Paul D. Ryan",
          "Call Paul D. Ryan",
          "Email Congressional Legislators",
          "Tweet to Congressional Legislators",
          "Call Congressional Legislators"
        ]
      }
    }
  };
</script>

<style scoped>
.btn-main{
  background: #f95607;
  color: white;
}
section button{
  margin: 2.5%;
  padding: 0.5rem 2rem;
}
button{
  border: 2px solid #f0f0f0;
  border-radius: 5px;
  color: #979797;
  padding: 1.15rem 4rem;
}
input.formInput, textarea.formInput{
  border-radius: 5px;
  border: 1.5px solid #f0f0f0;
  padding: 0.5rem 1rem;
}
textarea.formInput{
  width: 100%;
  height: 15rem;
}
form{
  width: 30%;
  margin: 0 5%;
}
section{
  max-width: 68rem;
  margin: 0 auto;
}
h4{
  font-weight: 600;
  font-size: 2.5rem;
}
p{
  font-size: 1.25rem;
  word-wrap: break-word;
  margin-bottm: 2rem;
}
header{
  display: flex;
}
.rallyImage{
  width: 60%;
}
.rallyImage img{
  width: 100%;
}
.sticky-nav{
  border: 2px solid #f0f0f0;
}
form.moreAction{
  border-top: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  padding: 2.5rem 0;
  width: 60%;
}
.placeholder-chart{
  width: 50%;
  height: 100%;
}
.progressSection div{
  display: flex;
}
h2{
  font-size: 1.25rem;
}
</style>
