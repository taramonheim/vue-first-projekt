
<template>
<div>
  <div>
    <h3>Full Stack Project</h3>
   <!-- {{mensaDays}}-->
    </div>
    <h1>Der Mensa Plan</h1>
    <label for="Weekdays"><i>Choose a day</i></label>
    <br>
    <select name="Wochentag" id="selectBox">
     <option v-for="day in days" :key="day">{{day}}</option>
    </select>
    <br>
    <br>   
    <br> 
  </div>
</template>

<script>

  export default {
    name: 'dropdown',
    props: {
     //mensaDays: Object
     days: Array,
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>