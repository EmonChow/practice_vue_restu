<template>
  
  <!-- Navbar start -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <div class="container ">
    <a class="navbar-brand mx-lg-auto mb-lg-4" href="#">
      <span class="h3 fw-bold d-block d-lg-none"> EMon</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/home">Home</router-link>
        </li>
        <br>

        <li class="nav-item">
          <router-link to="/services">Services</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/work">Work</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reviews">Reviews</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blogs">Blogs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



<!-- Nav bar cloded -->
</template>








<script>

 export default{
    name: 'NavBar'
 }

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap');

:root {
    --color-body: #828788;
    --color-heading: #eef3db;
    --color-base: #033f47;
    --color-base2: #022a30;
    --color-brand: #e0f780;
    --color-brand2: #deff58;
    --sidbar-width: 240px;
    --font-base: "Bai Jamjuree";
}

  body{
    background-color: rgb(127, 138, 143);
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  h1 h2 h3 h4 h5 h6 {
    color: rgb(9, 9, 51);
    font-weight: 700;
  }
  a{
    text-decoration: none;
    color: black;
    transition: all 0.4s ease;
  }
  a:hover{
    color: rgb(66, 25, 34);
  }
  img {
    width: 100%;
  }
  @media(min-width:992px){
     .navbar{
       min-height: 100px;
       width: var(--color-base2);
       background: linear-gradient(rgb(29, 121, 93) rgb(74, 29, 126) );
      background-size: cover;
      background-position: center;
     }
  }

</style>