<template>
  <HeaderPage />
  <h1>Hello {{ name }}, Welcome to home page</h1>
  <table border="10px" class="table">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="res in resturant" :key="res.id">
      <td>{{ res.id }}</td>
      <td>{{ res.name }}</td>
      <td>{{ res.address }}</td>
      <td>{{ res.contact }}</td>
      <td>
        <router-link :to="'/update-restuarant/' + res.id">Update</router-link>
        <button v-on:click="deleteSubmit(res.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      resturant: [],
    };
  },
  name: "HomePage",
  components: {
    HeaderPage,
  },
  methods: {
    async deleteSubmit(id) {
      let response = await axios.delete("http://localhost:3000/resturant/"+id);
      if (response.status == 200) {
        this.loadData();
      }else{
        this.$route.push({name: 'HomePage'})
      }
    console.log(response);
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "RegisterPage" });
      }
      let response = await axios.get("http://localhost:3000/resturant");
      this.resturant = response.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style>
.table {
  margin-left: auto;
  margin-right: auto;
  width: 1300px;
}
</style>
