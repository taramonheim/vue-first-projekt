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
      <Mahlzeit v-for= "categorys in MensaOptions" :key="categorys"></Mahlzeit>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  border: 1px;
}
div.food {
  margin-bottom: 20px;
  background-color: blue;
}
</style>