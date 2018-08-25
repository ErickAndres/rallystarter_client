<template>
  <footer class="pt-3 pb-5 globalFooter border-top">
    <div class="container--wide p-2 flex flex-wrap">
      <div class="pr-5 sm-hide">
        <a href="/">
          <img style="width: 64px" title="Rally Starter" src="../assets/svgs/logos/green-no-text.svg" />
        </a>
      </div>
      <div class="pr-5">
          <h3 class="h5 normal mt-0 opacity-075 boldest">Overview</h3>
            <ul class="list-reset sub">
                <li class="mb-2" v-for='overview_link in overview_links' :key="overview_link.id">
                    <a href="/somewhere" class="hover-underline">
                      {{overview_link.title}}
                    </a>
                </li>
            </ul>
      </div>
      <div class="pr-5 md-pr-0">
          <h3 class='h5 normal mt-0 opacity-075 boldest'>Help</h3>
          <ul class="list-reset sub font">
              <li class="mb-2" v-for='help_link in help_links' :key="help_link.id">
                  <a href="/other" class="hover-underline">
                    {{help_link.title}}
                  </a>
                  <!--<p>{{help_link.title}}</p>-->
              </li>
          </ul>
      </div>
      <form class="pr-5 md-pr-0 col-4">
        <h3 class='h5 normal mt-0 opacity-075 boldest'>For Updates & Inspiration</h3>
        <input type="text" placeholder="Name" class="formInput" v-model="name"/>
        <input type="email" placeholder="Email" class="formInput" v-model="email"/>
        <button @click="newsletterSubmit">Subscribe</button>
      </form>
      <div class="pr-5 md-pr-0">
        <a class="bg-facebook social-circle m-05" target="_blank" href="https://www.facebook.com/rallystarter" title="https://www.facebook.com/rallystarter">
          <i class="social-icon-facebook"></i>
        </a>
        <a class="bg-twitter social-circle m-05" target="_blank" href="https://twitter.com/rallystarters" title="https://twitter.com/rallystarters">
          <i class="social-icon-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
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
      ],
      name: '',
      email: '',
    };
  },
  methods: {
    async newsletterSubmit () {
    console.log(this.email)
      const response = await AuthenticationService.newsletter({
        name: this.name,
        email: this.email
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
