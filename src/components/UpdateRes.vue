<template>
    <h1>Hello user, Welcome to home page</h1>
</template>

<script>

export default{
    name: 'UpdateRes',
   
    mounted(){
    let user = localStorage.getItem('user-info')
    if(!user){
        this.$router.push({ name: "RegisterPage" });
    }
  }
}


</script>