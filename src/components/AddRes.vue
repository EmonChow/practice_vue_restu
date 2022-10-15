<template>
    <h1>Hello , Welcome to home page</h1>
</template>

<script>

export default{
    name: 'AddRes',
    
    mounted(){
    let user = localStorage.getItem('user-info')
   
    if(!user){
        this.$router.push({ name: "RegisterPage" });
    }
  }
}


</script>