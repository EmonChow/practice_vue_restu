<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restuarant">Add Restuarant</router-link>
        <router-link to="/update-restuarant">Update Restuarant</router-link>
        <router-link  @click="logout" to="">Logout</router-link>

    </div>
</template>


<script>
 export default {
    name: 'HeaderPage',

    methods: {
        logout(){
            localStorage.clear();
            this.$router.push({name: 'LoginPage'})
        }
    }
 }
</script>

<style>
.nav{
    background-color: rgb(255, 250, 250);
   
}
  .nav a {
    padding: 15px;
    text-decoration: none;
    border: 1ch;
    color: darkblue;
  }

  .nav a:hover{
    background: fixed;
    color: brown;
  }
</style>