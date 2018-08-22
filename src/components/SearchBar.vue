<template>
  <!-- eslint-disable -->
  <section class="container px-2">
    <h3 class="bump normal">Find Your Rally</h3>
    <div>
      <form class="flex flex-wrap">
        <div class="pr-2 col-8 md-col-7 sm-col-12 sm-pr-0">
          <input class="input-search" placeholder='Search for Rally by Title or summary'/>
        </div>
        <div class="col-4 md-col-5 sm-col-12 sm-mt-2">
          <select class="col-12" name="categories[]">
            <option value="all">All categories</option>
            <option value="Animal Rights">Animal Rights</option>
          </select>
        </div>
      </form>
      <!--<input placeholder='Search for Rally by Title or summary'/>-->
      <!--<button>All Categories<img src='../assets/svgs/ui/dropdown.svg' class='valign-wrapper'/></button>-->
    </div>
    <div class="py-3">
      <div class="m-neg-1 py-1">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="col-4 md-col-6 sm-col-12 mb-2 p-1" v-bind:class="classText(rally.categories[0])" v-for='(rally, index) in rallies.data'>
              <a class="bg-white sh-1 hover-shadow block rounded overflow-hidden" href="/" title="example">
                <div class="flex flex-align-center color-white px-2 py-1" v-bind:class="classBackground(rally.categories[0])">
                  <!--<div class="flex flex-align-center padding_inside">-->
                  <div class="flex flex-align-center">
                    <i class="inline-block line-height-1" v-bind:class="classIcon(rally.categories[0])"></i>
                    <!--<i class="inline-block line-height-1 categories-icon-"></i> -->
                    <div class="small uppercase px-1 line-height-1 inline-block pt-05">{{rally.categories[0]}}</div>
                  </div>
                  <!--</div>-->
                  <div class="ml-auto align-right small uppercase">
                    <div class="line-height-2">{{rally.total_actions}}</div>
                    <div class="line-height-2"> Actions</div>
                  </div>
                </div>
                <!--<div class="img_aspect">-->
                <!--  <img class="img-with-text" v-bind:src="rally.image_url"/>-->
                <!--</div>-->
                <!--v-bind:style="{ backgroundImage: 'url(' + image + ')' }"-->
                <!--v-bind:style="{ 'background-image': 'url(' + image + ')' }"-->
                <!--:style="'background-image: url(' + backgroundImage + ')'"-->
                <div class="aspect aspect-3x2">
                  <div class="bg-cover" :style="'background-image: url(' + rally.image_url + ')'"></div>
                </div>
                <!--<div class="aspect aspect-3x2">-->
                <!--  <div class="img-with-text" style="background-image: url('rally.image_url');"></div>-->
                <!--</div>-->
                <p class="m-0 p-2 border-top">{{rally.title}}</p>
              </a>
            </div>
          </div>
        </div>
        <div class="px-1">
          <div class="align-right">
            <div>
              <button class="btn-ui">Show More</button>
              <div class="small color-grey pt-1">Showing 6 of 52</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="rallies.data < 0">
      <img src='../assets/svgs/error-icons/ice-cream-cone.svg' class='icecreamCone'/>
      <p>Sorry, none found. Try updating the categories or search term.</p>
    </div>
    <div class="pb-2">
      <div class="container pt-4 pb-4 px-2 center">
        <h3 class="h4 mt-0 pb-2 color-teal">Don't See What You're Looking For?</h3>
        <a class='btn btn-main btn-large' href='/start/step1'>Start a Rally</a>
      </div> 
    </div>
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
            categories: ['Social Justice','Public Safety','Human Rights','Politics'],
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
            categories: ['Politics'],
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
            categories: ['Politics'],
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
            categories: ['Economy','Health','Politics'],
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
            categories: ['Social Justice','Media & Entertainment','Politics'],
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
            categories: ['Social Justice','Public Safety','Media & Entertainment','Politics'],
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
  methods: {
    classBackground: function(arg){
      var theClass = '';
      if (arg === 'Arts & Culture' || arg === 'Public Safety' || arg === 'LGBTQ Rights' || arg === "Women's Rights") {
        theClass = 'bg-purple';
      } else if (arg === "Children's Issues" || arg === "Economy" || arg === "Veteran's Issues") {
        theClass = 'bg-jade';
      } else if (arg === 'Social Justice' || arg === 'Education' || arg === 'Environment' || arg === 'Media & Entertainment') {
        theClass = 'bg-teal';
      } else {
        theClass = 'bg-orange';
      }
      return theClass;
    },
    classText: function(arg){
      var theClass = '';
      if (arg === 'Arts & Culture' || arg === 'Public Safety' || arg === 'LGBTQ Rights' || arg === "Women's Rights") {
        theClass = 'rally-card-purple';
      } else if (arg === "Children's Issues" || arg === "Economy" || arg === "Veteran's Issues") {
        theClass = 'rally-card-jade';
      } else if (arg === 'Social Justice' || arg === 'Education' || arg === 'Environment' || arg === 'Media & Entertainment') {
        theClass = 'rally-card-teal';
      } else {
        theClass = 'rally-card-orange';
      }
      return theClass;
    },
    classIcon: function(arg) {
      var theClass = 'categories-icon-';
      if (arg === "Animal Rights") {
        theClass += 'paw';
      } else if (arg === "Arts & Culture") {
        theClass += 'arts';
      } else if (arg === "Children's Issues") {
        theClass += 'teddy';
      } else if (arg === "Social Justice") {
        theClass += 'justice';
      } else if (arg === "Disaster Relief") {
        theClass += 'ambulance';
      } else if (arg === "Women's Rights") {
        theClass += 'women';
      } else if (arg === "Food & Agriculture") {
        theClass += 'utensils';
      } else if (arg === "Public Safety") {
        theClass += 'safety';
      } else if (arg === "Education") {
        theClass += 'cap';
      } else if (arg === "Environment") {
        theClass += 'leaf';
      } else if (arg === "Human Rights") {
        theClass += 'human';
      } else if (arg === "International Aid") {
        theClass += 'aid';
      } else if (arg === "Veteran's Issues") {
        theClass += 'veterans';
      } else if (arg === "Health") {
        theClass += 'apple';
      } else if (arg === "Food & Agriculture") {
        theClass += 'utensils';
      } else if (arg === "LGBTQ Rights") {
        theClass += 'lgbtq';
      } else if (arg === "Media & Entertainment") {
        theClass += 'media';
      } else if (arg === "Women's Rights") {
        theClass += 'women';
      } else {
        theClass += arg.toLowerCase().trim();
      }
      return theClass;
    }
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
