<template>
  <!-- eslint-disable -->
  <section>
    <h4>Find Your Rally</h4>
    <div>
      <input placeholder='Search for Rally by Title or summary'/>
      <button>All Categories<img src='../assets/svgs/ui/dropdown.svg' class='valign-wrapper'/></button>
    </div>
    <div class="wrapper">
      <div class="card" v-for='(rally, index) in rallies.data'>
        <div class="rally_text">{{rally.total_actions}} Actions</div>
        <img class="img-with-text" v-bind:src="rally.image_url"/>
        <p class="rally_text">{{rally.title}}</p>
      </div>
    </div>
    <div class="align-right">
      <button class="btn-ui">Show More</button>
      <div class="show_more">Showing 6 of 52</div>
    </div>
    <img src='../assets/svgs/error-icons/ice-cream-cone.svg' class='icecreamCone'/>
    <p>Sorry, none found. Try updating the categories or search term.</p>
    <h5>Don't See What You're Looking For?</h5>
    <router-link to='/start/step1'><button class='startRally'>Start a Rally</button></router-link>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SearchBar',
  data() {
    return {
      rallies: {
        total: 43,
        data: [
          {
            created_at: '2018-02-23T15:51:10.000Z',
            id: 108,
            title: 'Boycott the NRA',
            flagged: null,
            approved: 1,
            summary: 'For decades the NRA has misinterpreted the 2nd Amendment in order to sell more guns therefore playing a major role as enablers in our mass shooting epidemic. The disrespect they\'ve shown to victims, survivors, and families effected by school shootings needs to be the last straw! Until the NRA is able to respect human rights and life more than they respect unregulated gun rights we\'re calling for a boycott of every company they do business with.   ',
            slug: 'boycott-the-nra',
            status: 'paid',
            categories: '[\'Social Justice\',\'Public Safety\',\'Human Rights\',\'Politics\']',
            featured: null,
            deleted: null,
            published: 1,
            image_url: 'https://rally-starter.s3.us-west-1.amazonaws.com/1519421674.png',
            supporters_count: 101,
            total_actions: 1823,
          },
          {
            created_at: '2017-11-03T22:57:01.000Z',
            id: 82,
            title: 'Protect the Investigation into Russia\'s US Election Interference',
            flagged: null,
            approved: 1,
            summary: 'There is new evidence coming out daily that shows collusion between the Trump campaign and Russia as well as ongoing attempts by Team Trump to obstruct justice and discredit the FBI in order to undermine the investigation. \n\nTrump and his supporters are now angling to fire Special Council Robert Mueller and Deputy Attorney General Rod Rosenstein. Americans need to learn the truth! Call on Congress to pass legislation that will protect Mueller and Rosenstein so that the Special Council can do their job and continue these important investigations.',
            slug: 'protect-the-investigation-into-russia-s-us-election-interference',
            status: 'free',
            categories: '[\'Politics\']',
            featured: 1,
            deleted: null,
            published: 1,
            image_url: 'https://rally-starter.s3-us-west-1.amazonaws.com/1509750465.png',
            supporters_count: 52,
            total_actions: 895,
          },
          {
            created_at: '2018-02-02T02:28:44.000Z',
            id: 104,
            title: 'Remove Nunes from the House Intelligence Committee',
            flagged: null,
            approved: 1,
            summary: 'Since pledging to recuse himself from the Trump-Russia investigation in April, Congressman Devin Nunes has continued to abuse his power to cover up for the Trump administration. With the GOP’s support, Nunes is attempting to undermine Mueller’s investigation by publicizing a memo that attacks the Trump-Russia investigation. Call on House Speaker Paul Ryan to use his power to remove Nunes as chair of the House Intelligence Committee. ',
            slug: 'remove-nunes-from-the-house-intelligence-committee',
            status: 'paid',
            categories: '[\'Politics\']',
            featured: null,
            deleted: null,
            published: 1,
            image_url: 'https://rally-starter.s3.us-west-1.amazonaws.com/1517538903.png',
            supporters_count: 16,
            total_actions: 585,
          },
          {
            created_at: '2017-11-09T01:40:56.000Z',
            id: 83,
            title: 'Replace the GOP, Repeal the Tax Bill',
            flagged: null,
            approved: 1,
            summary: 'The GOP tax plan, a bill designed to give the wealthy a large tax cut, passed along party lines without a single Democrat in Congress voting in favor of it. With permanent tax cuts for large corporations and expected budget cuts to Social Security and Medicaid, the GOP has clearly chosen to line their own pockets at the expense of the struggling American middle-class. Tell the GOP you\'ll remember this vote when they\'re up for re-election!',
            slug: 'replace-the-gop-repeal-the-tax-bill',
            status: 'free',
            categories: '[\'Economy\',\'Health\',\'Politics\']',
            featured: 0,
            deleted: null,
            published: 1,
            image_url: 'https://rally-starter.s3-us-west-1.amazonaws.com/1510276053.png',
            supporters_count: 14,
            total_actions: 508,
          },
          {
            created_at: '2017-06-24T04:14:39.000Z',
            id: 29,
            title: 'Protect the 1st Amendment',
            flagged: null,
            approved: 1,
            summary: 'All true Americans need to stand up to Trump and demand that he stops attacking the 1st Amendment by discrediting the press and labeling negative media coverage as \'fake news\'. ',
            slug: 'protect-the-1st-amendment',
            status: 'free',
            categories: '[\'Social Justice\',\'Media & Entertainment\',\'Politics\']',
            featured: 0,
            deleted: null,
            published: 1,
            image_url: 'https://rally-starter.s3-us-west-1.amazonaws.com/1507782470.png',
            supporters_count: 28,
            total_actions: 459,
          },
          {
            created_at: '2018-01-03T17:44:31.000Z',
            id: 97,
            title: 'Call on Twitter to Enforce their Policies and Ban Trump',
            flagged: null,
            approved: 1,
            summary: 'Twitter has a clearly defined policy related to violent threats and the glorification of violence. It states \'You may not make specific threats of violence or wish for the serious physical harm, death, or disease of an individual or group of people.\' Donald Trump has violated this policy on multiple occasions. Twitter needs to treat him the same as all of it\'s users and hold him accountable. ',
            slug: 'call-on-twitter-to-enforce-their-policies-and-ban-trump',
            status: 'free',
            categories: '[\'Social Justice\',\'Public Safety\',\'Media & Entertainment\',\'Politics\']',
            featured: null,
            deleted: null,
            published: 1,
            image_url: 'https://rally-starter.s3-us-west-1.amazonaws.com/1515002929.png',
            supporters_count: 46,
            total_actions: 400,
          },
        ],
      },
    };
  }, 
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
input, button{
  border: 2px solid #F0F0F0;
  border-radius: 5px;
}
input{
  width: 65%;
  background: url('../assets/svgs/ui/search.svg');
  background-repeat: no-repeat;
  background-position: left center;
  text-indent: 5%;
}
button{
  width: 30%;
  padding: 1%;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
}
div{
  display: flex;
  justify-content: space-between;
}
section{
  width: 80%;
  margin: 0 auto;
}
img{
  display: block;
}
.icecreamCone{
    margin: 5% auto;
}
p{
  text-align: center;
  margin: 1% 0;
}
h4{
  font-size: 1.5rem;
}
.startRally{
  background: #f95607;
  color: white;
  border: 2px solid  #E7612C;
  margin: 0 auto;
  justify-content: center;
  font-size: 1.2rem;
}
h5{
  text-align: center;
  margin: 5% 0 2%;
}
.wrapper {
  max-width: 68rem;
  display: flex;
  flex-wrap: wrap;
  padding-top: 12px;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  margin: 12px;
  width: 30%;
  flex-direction: column;
}
.rally_text {
  font-size: 10px;
  padding: 4px;
}
.img-with-text {
    text-align: justify;
    max-width:100%;
    max-height:100%;
}

.img-with-text img {
    display: block;
    margin: 0 auto;
}
.align-right {
    padding-top: 12px;
}
.show_more {
  position: absolute; 
  right: 11%;
  color: grey;
  font-size: .75rem;
  padding-top: 60px;
}
.btn-ui {
    position: absolute; 
    right: 11%;
    color: #686868;
    background: #f7f7f7;
    border-color: #f0f0f0;
    width: 130px;
    margin: 0 auto;
    display: table-cell;
    vertical-align: middle;
}
</style>
