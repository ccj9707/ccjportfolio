<template>
  <div class="mainImage">
    <div class="vertical-align-content">
      <h1>CCJ Portfolio</h1>
      <h3>SELF-INTRODUCTION & DEVELOPMENT</h3>
      <h2>안녕하세요! 프론트엔드 개발자 최창진입니다.</h2>
      <h2>이 사이트는 Vue.js로 개발되었으며, CSS Library를 사용하지 않았습니다.</h2>
      <buttonScrollTo v-scroll-reveal></buttonScrollTo>
    </div>
  </div>
</template>

<script>
import buttonScrollTo from './common/buttonscrollto.vue'
export default{
  components:{
    buttonScrollTo : buttonScrollTo
  }
}
</script>
<style scoped>
  .mainImage{
    background-color:black;
    height:100vh;
    color:white;
    text-align:center;
  }
  h1, h3{
    margin:0;
  }
  h1{
    font-size:4rem;
  }
  h3{
    letter-spacing: 2px;
    line-height: 2;
  }
  .vertical-align-content{
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
