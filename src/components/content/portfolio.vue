<template>
  <div id="contentBox">
    <div id="mintvoice">
      <h1>MintVoice</h1>
      <p>
        <a href="https://github.com/ccj9707/mintvoice">github  </a><a href="http://mintmedia.co.kr" target="_blank">website</a>
        <br />성우들의 목소리 샘플을 듣고 자신이 원하는 성우와 접촉할 수 있게 해주는 웹사이트입니다.
        현재 스튜디오와 협의하에 테스팅을 진행하며 목소리 샘플을 등록하고 있으며, 디버깅이 마무리되는 대로 2018년 5월 내로 대중에 상용화할 예정입니다. <br />
        - Web FrontEnd(HTML5, CSS3, EcmaScript6, JQuery, Ajax, BootStrap)<br />
        - Web BackEnd(MySQL, TypeScript, node.JS)<br />
        - Versionning(Git)<br />
        - Web Design<br />
        - AWS(EC2, Route53, RDS)<br /><br />
        목소리 샘플이 많고, 들어가야 하는 조건(언어, 분야, 성별, 나이대 등..)이 많아 데이터베이스에 이를 가장 효율적으로 등록하는 로직을 고민해본 결과,
        폴더안에 mp3 파일들을 넣고 폴더를 등록하면 안에 있는 파일들이 데이터베이스에 등록되도록 하였습니다. 또한, 영문 사이트를 지원하는 과정에서 마크업은 손수
        번역하고, 목소리 샘플들은 Ajax로 10개씩 로딩할 때마다 각 파일의 이름을 자르고, 각 단어를 객체 형식으로 이루어진 단어장에 파싱해 영문으로 바꾼 후 브라우저에 렌더링했습니다.
        현재 babel로 인해 페이지 로딩이 느려 성능 개선방안을 고안 중입니다.
      </p>
    </div>
    <div id="vuetodo">
      <h1>Vue-todo</h1>
      <p>
        <a href="https://github.com/ccj9707/vue-todo">github</a><br />
        - Web FrontEnd(HTML5, CSS3, EcmaScript6, Vue.js)<br />
        - Versionning(Git)<br />
        - Web Design<br /><br />
        Vue.js로 만든 모바일 할일 관리 웹입니다. todo는 대부분의 라이브러리나 프레임워크의 example 주제로 자주 사용되는데, 데이터 조작 방법(삽입, 조회, 변경, 삭제)를 간단한
        코드로 구현하였습니다. 텍스트 데이터는 Local Storage에 저장하였고, Vue의 Instance LifeCycle에 대해 공부하며 제작하였습니다.
      </p>
    </div>
    <div id="seungHealth">
      <h1>SeungHealth</h1>
      <p>
        <a href="https://github.com/ccj9707/seunghealth">github  </a><a href="http://ec2-52-79-223-39.ap-northeast-2.compute.amazonaws.com" target="_blank">website</a><br />
        - Web FrontEnd(HTML5, CSS3, BootStrap)<br />
        - Web Design<br /><br />
        Bootstrap Template과 Webpack, Bower등을 적용해 만든 웹 사이트입니다. 웹 퍼블리싱과 여러 가지 패키지를 경험해 보았으며, AWS EC2와 Route53 DNS를 사용했습니다.
      </p>
    </div>
    <div id="ccjportfolio">
      <h1>Portfolio</h1>
      <p>
        <a href="https://github.com/ccj9707/ccjportfolio">github</a><br />
        - Web FrontEnd(HTML5, CSS3, EcmaScript6, Vue.js)<br />
        - Versionning(Git)<br />
        - Web Design<br /><br />
        현재 보고 계신 사이트입니다. Vue.js로 제작했으며, Components, Module 단위의 프로그래밍에 대해 익혔습니다.
      </p>
    </div>
  </div>
</template>
<script>

  export default{

  }
</script>
<style scoped>
  h1{
    margin:0px;
    font-weight:700;
  }
  h2{
    font-weight:700;
  }
  h4{
    text-transform: uppercase;
    background-color:yellow;
    display:inline-block;
  }
  .fontwhite{
    color:grey;
  }
  #contentBox{
    padding:2%;
  }
  a{
    text-decoration: none;
  }
  p{
    line-height: 30px;
    font-size:18px;
  }
</style>
