<template>
  <div>
    <div class="container">
      <h4>If you lead, they'll follow</h4>
      <h5>Rally Starter is free but we recommend organizations
      Pro or Enterprise Rally for additional benefits.</h5>
    </div>
    <div class="actionSection">
      <div v-for="option in rallyoptions"
          :key="option.id" class="cardOption"
          v-bind:class="{highlight: option.extraInfo}">
        <div>
          <h2>{{option.membershipType}}</h2>
        </div>
        <div class="eachCardOption">
          <p>{{option.cost}}</p>
            <ul>
              <li v-for="feature in option.features" :key="feature.id" class="listFeatures">
                <img src="../assets/svgs/checkbox-green.svg"/>
                <span>{{feature}}</span>
              </li>
            </ul>
        </div>
        <router-link to="/start/step2">
          <button>{{option.action}}</button>
        </router-link>
        <p>{{option.extraInfo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RallyOptions',
  data() {
    return {
      rallyoptions: [
        {
          membershipType: 'Starter Rally',
          cost: 'Free Forever',
          features: ['Rally page with five actions to create change.', 'Rally page with five actions to create change.', 'Rally page with five actions to create change.', 'Customizable Widgets'],
          action: 'Start a Rally',
          extraInfo: '',
        },
        {
          membershipType: 'Pro Rally',
          cost: '$49/Month',
          features: ['Rally page with five actions to create change.', 'Branded profile section to promote your organization.', 'Access to supporter email addresses', 'Customizable Widgets'],
          action: 'Start a Pro Rally',
          extraInfo: 'Free 30 day trial',
        },
        {
          membershipType: 'Enterprise Rally',
          cost: '$499',
          features: ['Rally page with five actions to create change.', 'Branded profile section to promote your organization.', 'Access to supporter email addresses', 'Customizable Widgets'],
          action: 'Contact',
          extraInfo: '',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardOption{
  width: 400px;
  border: 2px solid #f0f0f0;
  position: relative;
}
.actionSection{
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
}
h2, p{
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
}
h2{
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem 0;
}
.eachCardOption{
  font-size: 1.25em;
  padding: 0 1.5rem 1rem;
}
.eachCardOption p{
  padding-bottom: 1 rem;
}

li{
  display: flex;
  margin: 0.5rem 1rem;
}
img{
  width: 1.5rem;
}
.listFeatures{
  padding-bottom: 1 rem;
}
.highlight button{
  background: #f95607;
  color: white;

}
.highlight{
  box-shadow: 0 0 5px 3px hsla(0,3%,87%,.25);

}
button{
  width: 100%;
  position: absolute;
  color: #51556C;
  bottom: 0;
  font-size: 20px;
  border: none;
  background: #f7f7f7;
  padding: 1.5rem 1rem;
  font-weight: 600;
  text-transform: uppercase;
}
p{
  padding-bottom: 1rem;
}
li span{
  padding-left: 1.5rem;
}
h4{
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem;
}
h5{
  text-align: center;
}
div{
  color: #50556e;
  margin-bottom : 2rem;
}
.container{
  max-width: 68rem;
}

</style>
