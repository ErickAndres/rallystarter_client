<template>
  <div class='quote_container'>
    <div class="left-col">
      <b><p>" I'M NO LONGER ACCEPTING THE THINGS I CANNOT CHANGE...
      I'M CHANGING THE THINGS I CANNOT ACCEPT. "</p></b>
      <b><p class="speaker">{{ speaker }}</p></b>
    </div>
    <div class="right_col">
      <img class="responsive-img" src="../assets/angela-davis.png" alt="">
    </div>
    <!--<div class="quote_img">-->
    <!--  <img class="responsive-img" src="../assets/angela-davis.png" alt="">-->
    <!--</div>-->
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Quote',
  data() {
    return {
      speaker:'ANGELA DAVIS, POLITICAL ACTIVIST',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote_container {
    background: #F7F7F7;
    margin: 4rem 0;
    display: flex;
    justify-content: center;
}
/*.img {*/
        /*flex:none;*/
/*        background:url('../assets/angela-davis.png');*/
/*        background-position:left center;*/
/*        background-size:cover;*/
/*        height:250px;*/
/*        width:100%;*/
/*        float:left;*/
/*}*/

.left-col {
    width:35%;
    padding-top: 60px;
    font-size: 1.25rem;
    margin: 3%;
    font-weight: 800;
}
.left-col .speaker {
      text-align: right;
}
.right_col img{
  height: 100%;
}
@media screen and (max-width : 720px){
  .quote_container{
    flex-direction: column;
  }
  .left-col {
    width: 90%;
  }
  .right_col img{
    display: block;
    margin: 0 auto;
  }
}
</style>
