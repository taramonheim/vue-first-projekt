
<template>
  <div>
<dropdown :days= "dropDownData"></dropdown>
<liste :MensaOptions= "loadedData"></liste>
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
      dropDownData: undefined,
    }
  },
  mounted(){ //document onload- einmal ausgeführt wenn componente bereit
  axios.get("http://127.0.0.1:3000/api/getFromDatabase")
  .then(response => {
    this.loadedData = response.data; 
    this.dropDownData = this.loadedData.map((essen) => essen.day); //holt alle Tage aus der loadedData
    this.dropDownData = this.dropDownData.filter((a,b) => this.dropDownData.indexOf(a) === b); // filtern alle doppelten Einträge aus dropDwondata 
  })
  .catch(err => {
    console.log(err);
  })
  }
}
</script>

