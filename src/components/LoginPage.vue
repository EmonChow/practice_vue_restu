<template>
<section class="vh-100" style="background-color: #9A616D;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img class="login" src="../assets/login-icon.jpg"
                alt="login form" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" v-model="formData.email"  class="form-control" placeholder="Email" />
                  </div>
                
                  <div class="form-outline mb-4">
                    <input type="text" v-model="formData.password" class="form-control " placeholder="password" />
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg" @click="submitLogin" type="button">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <div>
                      <p>
                        <router-link to="/register">Register</router-link>
                      </p>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
 export default {
    name: 'LoginPage',
    data(){
        return{
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
       async submitLogin(){
        const formValue = JSON.parse(JSON.stringify(this.formData));
        const response = await axios.get("http://localhost:3000/user",  formValue)
        if (response.status==200 && response.data.length>0) {
        localStorage.setItem("user-info", JSON.stringify(response.data[0]));
        this.$router.push({ name: "HomePage" });
      }

        }
    }
 }
</script>

<style>
  .login{
    height: 250px;
    width: 300px;
  }
</style>