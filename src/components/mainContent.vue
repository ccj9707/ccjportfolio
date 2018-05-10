<template>
  <div id="contentId">
    <div id="contentList">
      <div>
        <router-link :to="{name: 'profile'}"><button class="button_design">profile</button></router-link>
      </div>
      <div>
        <router-link :to="{name: 'about'}"><button class="button_design">about</button></router-link>
      </div>
      <div>
        <router-link v-bind:to="{name:'portfolio'}"><button class="button_design">portfolio</button></router-link>
      </div>
      <div>
        <router-link v-bind:to="{name:'introduction'}"><button class="button_design">SELF-INTRODUCTION</button></router-link>
      </div>
    </div>
    <div id="contentMain">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
  #contentId{
    height:100vh;
  }
  #contentList{
    width:15%;
    float:left;
    text-align:right;
    padding:1%;
    background-color:rgb(48,56,66);
    height:100%;
  }
  #contentMain{
    width:85%;
  }
  .button_design {
    background-color: #c47135;
    border: none;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    font-size: 22px;
    line-height: 1em;
    margin: 0% 0% 6% 0%;
    outline: none;
    padding: 12px 40px 10px;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    width:100%;
  }
  .button_design:before,
  .button_design:after {
    border-color: transparent;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    border-style: solid;
    border-width: 0;
    content: "";
    height: 24px;
    position: absolute;
    width: 24px;
  }
  .button_design:before {
    border-color: #c47135;
    border-right-width: 2px;
    border-top-width: 2px;
    right: -5px;
    top: -5px;
  }
  .button_design:after {
    border-bottom-width: 2px;
    border-color: #c47135;
    border-left-width: 2px;
    bottom: -5px;
    left: -5px;
  }
  .button_design:hover,
  .button_design.hover {
    background-color: #c47135;
  }
  .button_design:hover:before,
  .button_design.hover:before,
  .button_design:hover:after,
  .button_design.hover:after {
    height: 100%;
    width: 100%;
  }

</style>
