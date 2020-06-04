
<template>
<div>
  <div>
    <h3>Full Stack Project</h3>
    </div>
    <h1>Der Mensa Plan</h1>
    <label for="Weekdays"><i>Wähle einen Tag</i></label>
    <br>
    <div>
     <b-dropdown id="dropdown-1" text="Wochentage" class="m-md-2">
    <b-dropdown-item><option v-for="day in days" :key="day">{{day}}</option></b-dropdown-item>
     </b-dropdown>
   <!--<select name="Wochentag" id="selectBox">
   <option v-for="day in days" :key="day">{{day}}</option>
   </select>-->  
    </div>
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

