<template>

  <body>
    <table>
      <tr>
        <th>Information</th>
        <th>Costs</th>
        <th>Day</th>
        <th>Downvotes</th>
        <th>Id</th>
        <th>Labels</th>
        <th>Name</th>
        <th>Upvotes</th>
      </tr>
      <tr>
        <td>*</td>
        <td>*</td>
        <td>*</td>
        <td>*</td>
        <td>*</td>
        <td>*</td>
        <td>*</td>
        <td>*</td>
      </tr>
    </table>
  </body>
</template>

<script>
  export default {
    name: 'liste',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  border: 1px;
}
</style>