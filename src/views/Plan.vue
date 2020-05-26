
<template>
  <div>
<dropdown :days= "loadedData.days"></dropdown>
<liste :MensaOptions= "loadedData.categorys"></liste>
<Mahlzeit :food= "loadedData.food"></Mahlzeit>

  </div>
</template>

<script>
import dropdown from "../components/dropdown.vue"
import liste from "../components/liste.vue"
import Mahlzeit from "../components/Mahlzeit.vue"
import axios from 'axios'


export default {
  name: 'Plan',
  components: {
    dropdown, 
    liste, 
    Mahlzeit
  },
  props: {
    msg: String
  },
  data: function() {
    return {
      loadedData: "no data loaded", 
    }
  },
  mounted(){ //document onload- einmal ausgeführt wenn componente bereit
  axios.get("http://localhost:3000/api/getFromDatabase")
  .then(response => {
    this.loadedData = response.data; 
  })
  .catch(err => {
    console.log(err);
  })
  }
}
</script>