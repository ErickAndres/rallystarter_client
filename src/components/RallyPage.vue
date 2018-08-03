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
input.formInput{
  border-radius: 5px;
  border: 1.5px solid #f0f0f0;
  padding: 0.5rem 1rem;
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
</style>
