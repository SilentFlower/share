<template>
  <div class="home">
  </div>
</template>

<script>
  
import {getProduct} from "../api";

export default {
  name: 'Home',
  data(){
    return{
      type: 0,
      id: 1
    }
  },
  created() {
    this.id = this.$route.query.id
    this.type = this.$route.query.type
    this.init()
  },
  methods:{
    init(){
      console.log(this.type)
      if (this.type == 1) {
        console.log("??")
        this.$router.push({
          name: 'share1',
          query:{
            id: this.id
          }
        })
      }
    }
  }
}
</script>
