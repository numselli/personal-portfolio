<template>
    <background></background>
    <headerBar></headerBar>

    <div class="container" id="main">
        <span class="white-text">{{ $route.params.id }}</span>

        <p class="white-text">{{ project }}</p>
    </div>

    <footerBar></footerBar>
</template>

<script>
import headerBar from '../../components/header.vue'
import footerBar from '../../components/footer.vue'
import background from '../../components/background.vue';
import projectList from '../../public/projects/all.mjs'


export default {
    name: 'projects',
    components: {
        headerBar,
        footerBar,
        background,
    },

    data() {
        return {
            project: projectList[projectList.findIndex(p=>p.id===this.$route.params.id)]
        }
    }
}
</script>

<style>
  #main{
    min-height: calc(100vh - 255px);
  }
</style>