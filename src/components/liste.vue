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
      <tr v-for= "categorys in MensaOptions" :key="categorys">
        <td>{{categorys.category}}</td>
        <td>{{categorys.contentInformation}}</td>
        <td>{{categorys.cost}}</td>
        <td>{{categorys.day}}</td>
        <td>*</td>
        <td>*</td>
        <td>*</td>
        <td>*</td>
      </tr>
    </table>
</div>
</template>
<script>
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
div.mahlzeit {
  margin-bottom: 20px;
  background-color: yellow;
}
</style>