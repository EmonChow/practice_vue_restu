<template>
  
  <section>
    <HeaderPage/>
   
    <h1 class="add">Add Resturant</h1>
   
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
        <button type="submit" v-on:click="onSubmit" class="btn btn-primary">
          Submit 
        </button>
      </form>
   
  </section>
</template>

<script>
 import axios from 'axios'
 import HeaderPage from './HeaderPage.vue'
export default {
  name: "AddRes",
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
   async onSubmit(){
      const formValue = JSON.parse(JSON.stringify(this.restuarant))
      const response = await axios.post("http://localhost:3000/resturant", formValue);
             if (response.status == 201) {
                    this.$router.push({ name:'HomePage'});
                }
    }
  },

  mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "RegisterPage" });
    }
  },
};
</script>
<style>
.add {
  color: blueviolet;
  width: 1500px;
}
</style>
