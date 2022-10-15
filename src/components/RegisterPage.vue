<template>
  <section class="vh-20 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-light text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>
                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    v-model="formData.name"
                    class="form-control form-control-lg"
                    placeholder="Name"
                  />
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    v-model="formData.email"
                    class="form-control form-control-lg"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    v-model="formData.password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                  />
                </div>

                <p class="small mb-5 pb-lg-2">
                  <a href="">Forget Password</a>
                </p>

                <button
                  class="btn btn-outline-dark btn-lg px-5"
                  @click="submitRegister"
                  type="submit"
                >
                  Submit
                </button>
                
              </div>
              <div>
                <p>
                   <router-link to="/login">Login</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "RegisterPage",
  data() {
    return {
      formData: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    async submitRegister() {
      const formValue = JSON.parse(JSON.stringify(this.formData));
      const response = await axios.post(
        "http://localhost:3000/user",
        formValue
      );

      if (response.status==201) {
        localStorage.setItem("user-info", JSON.stringify(response.data));
      }
    },
  },
  mounted(){
    let user = localStorage.getItem('user-info')
    if(user){
        this.$router.push({ name: "HomePage" });
    }
  }
};
</script>
