<template>
  <footer>
    <div class="wrap">
      <a href="/"><img src="../assets/svgs/logos/green-no-text.svg" /></a>
      <div class="column_footer">
          <h3 class='footer_title'>Overview</h3>
            <ul>
                <li v-for='overview_link in overview_links' :key="overview_link.id">
                    <p>{{overview_link.title}}</p>
                </li>
            </ul>
      </div>
      <div class="column_footer">
          <h3 class='footer_title'>Help</h3>
          <ul>
              <li v-for='help_link in help_links' :key="help_link.id">
                  <p>{{help_link.title}}</p>
              </li>
          </ul>
      </div>
      <form class="column_footer">
        <h3 class='footer_title'>For Updates & Inspiration</h3>
        <input type="text" placeholder="Name" class="formInput" />
        <input type="email" placeholder="Email" class="formInput"/>
        <button>Subscribe</button>
      </form>
      <div class="social">
        <a href="https://www.facebook.com/rallystarter" target="_blank"><img src="../assets/svgs/facebookCircle.svg" class="facebook"/></a>
        <a href="https://twitter.com/rallystarters" target="_blank"><img src="../assets/svgs/twitterCircle.svg" class="twitter"/></a>
      </div>
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
input, button, input.formInput{
  border: 2px solid #F0F0F0;
  border-radius: 5px;
}
button{
  color: #50556C;
  border: 2px solid #50556C;
  width: 70%;
  padding: .7rem;
}
input.formInput{
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
.social{
  display: flex;
}
.facebook{
  margin: 1rem;
  width: 50%;
}
.twitter{
  margin: 1rem;
  width: 23%;
}

@media screen and (max-width : 800px){
  .wrap{
    flex-direction: column;
    margin-left: 3%;
  }
  input.formInput{
    width: 50%;
  }
  button{
  width: 30%;
  }
  footer{
    font-size: 1rem;
  }
  img{
    margin: 0;
  }
}
</style>
