<template>
    <section>
    <HeaderPage/>
   
    <h1 class="add">Update Resturant</h1>
   
      <form class="add">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="restuarant.name"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="restuarant.address"
            class="form-control"
            placeholder="Address"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            v-model="restuarant.contact"
            class="form-control"
            placeholder="Contact"
          />
        </div>
        <button type="submit" v-on:click="updateSubmit" class="btn btn-primary">
         Update
        </button>
     
      </form>
   
  </section>
</template>

<script>

 import axios from 'axios'
 import HeaderPage from './HeaderPage.vue'
export default{
    name: 'UpdateRes',
    components: {
    HeaderPage
  },
  data(){
    return{
       restuarant: {
          name:'',
          address:'',
          contact:''
       }
    }
  },
 methods: {
   async updateSubmit(){
      const formValue = JSON.parse(JSON.stringify(this.restuarant))
      const response = await axios.put("http://localhost:3000/resturant/"+this.$route.params.id, formValue);
             if (response.status == 200) {
                    this.$router.push({ name:'HomePage'});
          
    }
  }
  }, 
   
   async mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
        this.$router.push({ name: "RegisterPage" });
    }
     let result = await axios.get('http://localhost:3000/resturant/'+this.$route.params.id)
    this.restuarant = result.data
  }
 }


</script>