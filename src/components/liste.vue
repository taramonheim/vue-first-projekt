<template>
<!--{{mensaOptions}}-->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1000"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55">-->
    <Mahlzeit class="meal" v-for="meal in MensaOptions" :key="meal" :food="meal"></Mahlzeit>
    </b-carousel-slide>
    </b-carousel>
  <!--<div>
  <div class="card" style="width: 18rem;">
   <div class="card-body">
  <p class="card-text"><Mahlzeit class="mealfromTable" ve-for="mealfromTable in MensaOptions" :key="mealfromTable" :food="mealfromTable"></Mahlzeit></p>
</div>
</div>
</div>-->
</template>

<script>
  import Mahlzeit from "../components/Mahlzeit.vue"
  export default {
    name: 'liste',
    props: {
    MensaOptions: String 
    //mensaOptions: Array  
    },
    components: {
      Mahlzeit
    }
  }
  /* <table>
      <tr>
        <th>Category</th>
        <th>Information</th>
        <th>Costs</th> 
        <th>Day</th>
        <th>Downvotes</th>
        <th>Id</th>
        <th>Labels</th>
        <th>Name</th>
        <th>Upvotes</th>
        </tr>
      <Mahlzeit v-for= "mealfromTable in MensaOptions" :key="mealfromTable" :food="mealfromTable"></Mahlzeit> 
    </table>*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th,td { border: 1px solid orange; 
border-collapse: separate;
background-color: blanchedalmond; }

</style>