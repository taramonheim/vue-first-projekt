<template>
       <tr>
          <th>{{food.category}}</th>
          <td>{{food.contentInformation}}</td>
          <td>{{food.cost}}</td>
          <td>{{food.day}}</td>
          <td>{{food.downvotes}}</td>
          <td>{{food.id}}</td>
          <td>{{food.labels}}</td>
          <td>{{food.name}}</td>
          <td>{{food.upvotes}}</td>
      </tr>
</template>

<script>
  export default {
    name: 'Mahlzeit',
    props: {
     //mensaDays: Object
    food: Object,
     
    }
  }
</script>

<style scoped>
table, th,td { border: 1px solid rgb(255, 90, 90); border-collapse: separate; }
</style>