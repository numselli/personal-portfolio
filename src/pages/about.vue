<template>
  <background></background>
  <headerBar></headerBar>
  
  <div id="main">
    <div class="container">
      <div>
        <img src="https://github.com/numselli/personal-portfolio/blob/master/siteSrc/src/assets/images/profile.png?raw=true" width="20%" alt="">
        <p>Hey there! My name is Zac (numselli) I am a 19 year old fullstack developer. My primary languages are JS, HTML/CSS, with experience in Java and C#. I'm experienced with technologies such as Node.js and APIs for databases such as PostgreSQL. When I am not at the computer I am out taking phtotos photography, mountain biking, hiking, or rockcliming.</p>
      </div>
  
  
      <div class="blue">
        <span>stat 1</span>
      </div>
  
      <div>
        <h1>Some of the brands I have worked with</h1>
        <div>
          <span>bench</span>
        </div>
      </div>
    </div>
  </div>
    
  <footerBar></footerBar>
</template>

<script>
  import headerBar from '../components/header.vue'
  import footerBar from '../components/footer.vue'
  import background from '../components/background.vue';
  
  export default {
    name: 'about',
    components: {
      headerBar,
      footerBar,
      background
    }
  }
</script>

<style>
  #main{
    min-height: calc(100vh - 255px);
  }
</style>