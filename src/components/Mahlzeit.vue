
<template>
       <div>
         <h5>{{food.category}}
        <div class="votebutton">
        <button v-on:click="mealLike(food.id)">
        <b-icon-arrow-up-circle variant="success"/> (0)
        </button>
        </div>
         <div class="votebutton">
        <button v-on:click="mealDislike(food.id)">
        <b-icon-arrow-down-circle variant="danger"/> (0)
        </button>
         </div>
         </h5>
         <br/> 
         <h3>{{food.name}}</h3>
       {{food.cost}} Euro <br/>
       <br/>
       <!--<div class="cI" v-for="content in food.contentInformation" :key="content">{{content}}</div>-->
       </div>
</template>

<script>
// import axios from "axios";
  export default {
    name: 'Mahlzeit',
    props: {
     //mensaDays: Object
    food: Object,
    },
  methods: {
    mealLike: function(likedId) {
      //axios.post( "http://3.121.41.235:3000/meals/60", {
        console.log("Sending upvote for " + likedId);
        this.$socket.emit("broadcastLike", likedId);
    },
    mealDislike: function(id) {
      console.log("Sending downvotes for" + id);
    }
  },
  mounted() {
    this.sockets.subscribe("broadcastLike", (likeId) =>{
if (likeId === this.data.id) {
  this.data.upvotes++;
}
    });
  }
  }
      /*}).then((res) => {
console.log("Result:" +res)
      }).catch((error) =>{
        console.log("Could not post:" + error);
      });
      },
      meaDislike: function(id) {
        console.log("Sending downvote for " + id);
      }
    }
    }*/
    


  

//TODO: Upvote Downvote Button gekoppelt mit JAvascript und Endpoint, muss Zahl eingebnout werden 
//TODO: mit den Bootstrap Komponenten spielen
     /*<tr>
          <th>{{food.category}}</th>
          <td>{{food.contentInformation}}</td>
          <td>{{food.cost}}</td>
          <td>{{food.day}}</td>
          <td>{{food.downvotes}}</td>
          <td>{{food.id}}</td>
          <td>{{food.labels}}</td>
          <td>{{food.name}}</td>
          <td>{{food.upvotes}}</td>
      </tr>*/
</script>

<style scoped>

.votebutton {
  float: left;
}
table, th,td { border: 1px solid rgb(255, 90, 90); border-collapse: separate; }
</style>