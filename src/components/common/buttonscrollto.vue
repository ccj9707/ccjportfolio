<template>
  <div>
    <button v-scroll-to = "{el: '#contentId', duration: 1000}">
      Show Main Content
    </button>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  button{
    color:black;
    border-radius:5px;
    margin:1% 0% 0% 0%;
    line-height:50px;
    background-color: white;
    font-size:1.5rem;
    border-color:white;
    font-weight: 300
  }
</style>
