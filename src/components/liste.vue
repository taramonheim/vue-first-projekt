<template>
<div>
<div>
<!--{{mensaOptions}}-->
  </div>
    <table>
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
    </table>
</div>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th,td { border: 1px solid orange; 
border-collapse: separate;
background-color: blanchedalmond; }

</style>