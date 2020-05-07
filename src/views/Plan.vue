
<template>
  <div>
{{loadedData.data}}
<dropdown></dropdown>
<liste></liste>
  </div>
</template>

<script>
import dropdown from "../components/dropdown.vue"
import liste from "../components/liste.vue"
import axios from 'axios'

export default {
  name: 'Plan',
  components: {
    dropdown, liste
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
  axios.get("http://localhost:3000/mensa/Di")
  .then(response => {
    this.loadedData = response 
  })
  .catch(err => {
    console.log(err);
  })
  }
}
</script>