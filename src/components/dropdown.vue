<template>

  <body>
    <h1>Der Mensa Plan</h1>
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
  </body>
</template>

<script>
  export default {
    name: 'dropdown',
    props: {
     data: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>