<template>
  <section>
    <h4>Find Your Rally</h4>
    <div>
      <input placeholder="Search for Rally by Title or summary"/>
      <button>All Categories<img src="../assets/svgs/ui/dropdown.svg" class="valign-wrapper"/></button>
    </div>
    <img src="../assets/svgs/error-icons/ice-cream-cone.svg" class="icecreamCone"/>
    <p>Sorry, none found. Try updating the categories or search term.</p>
    <h5>Don't See What You're Looking For?</h5>
    <router-link to="/start/step1"><button class="startRally">Start a Rally</button></router-link>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
