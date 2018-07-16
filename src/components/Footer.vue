<template>
    <div class="footer">
      <div class="wrap">
      <a href="/"> <img src="../assets/svgs/logos/green-no-text.svg" style="
    float: left;
    width: 125px;
    max-width: 100%;
    height: auto;
    "></a>
    <div class="left_column_footer">
        <h3 class='footer_title'>Overview</h3>
        <ul class='list_left_footer'>
          <li class='mb-2'>
            <a href='/how-it-works' text='How it Works (for individuals)' class='hover-underline'>
            </a>
          </li>
          <li class='mb-2'>
            <a href='/how-it-works?org=true' text='How it Works (for organizations)'>
            </a>
          </li>
        </ul>
        <ul>
            <li v-for='overview_link in overview_links' v-bind:key="overview_link">
                <p>{{overview_link.title}}</p>
            </li>
        </ul>
    </div>
    <div class="right_column_footer">
        <h3 class='footer_title'>Help</h3>
        <ul>
            <li v-for='help_link in help_links' v-bind:key="help_link">
                <p>{{help_link.title}}</p>
            </li>
        </ul>
    </div>
    </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'PageFooter',
  data() {
    return {
      overview_links: [
        {title: 'About us'}, 
        {title: 'Pricing'},
        {title: 'Rally Guidelines'}
      ], 
      help_links: [
        {title: 'FAQs'},
        {title: 'Contact'},
        {title: 'Resources'},
        {title: 'Policies'},
        {title: 'Logout'}
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.img {*/
/*    display: block;*/
    /* height: 50px; */
/*    width: 125px;*/
/*    max-width: 100%;*/
/*    height: auto;*/
/*}*/
.footer {
    position: relative;
    /*overflow: hidden;*/
    text-align: left;
}
.wrap {
    position: relative;
    margin: 0 auto;
    padding: 20px;
    overflow: hidden;
    /*background: #3E3E3E;*/
  	/* color: #fff; */
    font:900 14px/26px 'Open Sans', sans-serif;
  text-transform: uppercase;
}
.footer_title {
    /*font-size: 2.92rem;*/
    line-height: 110%;
    margin: 1.46rem 0 1.168rem 0;
}
.left_column_footer {
    float: left;
    width: 25%;
}
.right_column_footer {
    float: right;
    width: 25%;
}
</style>