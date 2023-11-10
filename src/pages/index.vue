<template>
  <div class="container">
    <div class="row">
      <div class="col s6">
        <h1 class="white-text">Hey there! I am numselli</h1>
        <h5 class="white-text">Fullstack developer • Sys admin • Tinkerer</h5>
      </div>
      <div class="col s2">
        <img class="circle"
          src="https://cdn.discordapp.com/avatars/726515812361437285/42506832981bf5d46c4a8576567b80e0.png" alt="">
      </div>
    </div>

    <div class="row" style="gap:5px;">
      <div class="col m3">
        <img src="https://api.statusbadges.me/badge/status/726515812361437285?simple=true" alt="status">
      </div>
      <div class="col m3 s10">
        <img src="https://api.statusbadges.me/badge/playing/726515812361437285" alt="playing">
      </div>
      <div class="col m3 s10">
        <img src="https://api.statusbadges.me/badge/vscode/726515812361437285" alt="vscode">
      </div>
      <div class="col m3 s10">
        <a href="https://api.statusbadges.me/openspotify/726515812361437285" target="_blank" rel="noopener"><img
            src="https://api.statusbadges.me/badge/spotify/726515812361437285" alt="spotify"></a>
      </div>
    </div>

    <div style="padding-top: 2%;"></div>

    <div class="row" style="gap:5px;">
      <div class="col m2">
        <router-link to="/about" class="btn-large">About</router-link>
      </div>
      <div class="col m2">
        <router-link to="/contact" class="btn-large">Contact</router-link>
      </div>
      <div class="col m2">
        <router-link to="/projects" class="btn-large">Projects</router-link>
      </div>
      <div class="col m2">
        <router-link to="/projects" class="btn-large">Blog</router-link>
      </div>
      <div class="col m2">
        <router-link to="/projects" class="btn-large">Domains</router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'home'
  }
</script>