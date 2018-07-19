<template>
  <footer>
    <div class="wrap">
      <a href="/"><img src="../assets/svgs/logos/green-no-text.svg" /></a>
      <div class="column_footer">
          <h3 class='footer_title'>Overview</h3>
            <ul>
                <li v-for='overview_link in overview_links' v-bind:key="overview_link">
                    <p>{{overview_link.title}}</p>
                </li>
            </ul>
      </div>
      <div class="column_footer">
          <h3 class='footer_title'>Help</h3>
          <ul>
              <li v-for='help_link in help_links' v-bind:key="help_link">
                  <p>{{help_link.title}}</p>
              </li>
          </ul>
      </div>
      <form class="column_footer">
        <h3 class='footer_title'>For Updates & Inspiration</h3>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <button>Subscribe</button>
      </form>
      <div>

      </div>
    </div>
  </footer>
</template>

<script>
/* eslint-disable */
export default {
  name: 'PageFooter',
  data() {
    return {
      overview_links: [
        {title: 'How it Works (for individuals)'},
        {title: 'How it Works (for organizations)'},
        {title: 'About us'},
        {title: 'Pricing'},
        {title: 'Rally Guidelines'}
      ],
      help_links: [
        {title: 'FAQs'},
        {title: 'Contact'},
        {title: 'Resources'},
        {title: 'Policies'},
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
    position: relative;
    /*overflow: hidden;*/
    text-align: left;
    border-top: 2px solid #F0F0F0;
    padding: 3rem 0;
}
.column_footer{
  display: flex;
  flex-direction: column;
  margin: 0 2%;
}
img{
  height: 5rem;
  margin: 0 5rem;
}
input, button{
  border: 2px solid #F0F0F0;
  border-radius: 5px;
}
button{
  color: #50556C;
  border: 2px solid #50556C;
  width: 70%;
  padding: .7rem;
}
input{
  padding: 0 5%;
  color: black;
}
.wrap{
  display: flex;
}
h3{
  font-size: 1.1rem;
  font-weight: 900;
}
form h3{
  margin-bottom: 3rem;
}
</style>
