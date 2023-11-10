<template>
  <div class="container">
    <div class="row">
      <div class="col m3">
        <img src="https://cdn.discordapp.com/avatars/726515812361437285/42506832981bf5d46c4a8576567b80e0.png?size=256" alt="" class="circle">
      </div>
      <div class="col m9">
        <p class="white-text">Hey there! My name is Zac (numselli) I am a {{age}} year old fullstack developer. My primary languages are JS, HTML/CSS, with experience in Java and C#. I'm experienced with technologies such as Node.js and APIs for databases such as PostgreSQL. When I am not at the computer I am out taking phtotos photography, mountain biking, hiking, or rockcliming.</p>
      </div>
    </div>



    <div class="row">
      <div v-for="stat in stats" :class="'col s'+12/stats.length">
        <h4 class="white-text">{{ stat.value }}</h4>
        <h6 class="white-text">{{ stat.name }}</h6>
      </div>
    </div>


    <div>
      <h4 class="white-text">Some of the companies I have worked with</h4>
      <div class="row">
        <div v-for="company in companies" :class="'col s'+12/companies.length">
          <div class="card small">
            <div class="card-image">
              <a :href="company.url" target="_blank" rel="noopener noreferrer">
                <img :src="company.logo">
                <span class="card-title">{{ company.name }}</span>
              </a>
              <!-- <a class="btn-floating halfway-fab waves-effect waves-light"><i class="material-icons">add</i></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'about',
    data(){
      return {
        age: new Date().getFullYear() - 2004,
        stats: [],
        companies: []
      }
    },
    async mounted(){
      const rawStatsFetch = await fetch('/api/about/stats')
      this.stats = await rawStatsFetch.json()

      const rawCompaniesfetch = await fetch('/api/about/companys')
      this.companies = await rawCompaniesfetch.json()
    }
  }
</script>