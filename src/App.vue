<template>
  <div id="app">
    <mainImage></mainImage>
    <mainContent></mainContent>
  </div>
</template>

<script>
import mainImage from './components/mainImage.vue'
import mainContent from './components/mainContent.vue'
export default {
  components:{
    'mainImage' : mainImage,
    'mainContent' : mainContent
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Spoqa Han Sans', Helvetica, Arial, sans-serif;
  color:black;
}

</style>
