<template>
<body>
  <h1>Full Stack Project</h1>
  <label for="Weekdays"><i>Choose a day</i></label>
  <br>
  <select id="Weekdays">
    <option value="monday">Monday</option>
    <option value="tuesday">Tuesday</option>
    <option value="wednesday">Wednesday</option>
    <option value="thursday">Thursday</option>
    <option value="friday">Friday</option>
  </select>

  <br>
  <br>
  <br>
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
    name: 'Plan',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>