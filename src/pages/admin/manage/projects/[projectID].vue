<template>
    <div class="container">

        <div v-for="key in jsonKeys">
            <span>{{ key }}</span>
            <input type="text" :placeholder="project[key]">
        </div>

        <button>save</button>
        
    </div>
</template>

<script>
export default {
    name: 'projects',
    data() {
        return {
            project: {},
            jsonKeys:[]
            // project: projectList[projectList.findIndex(p => p.id === this.$route.params.id)]
        }
    },
    async mounted(){
        const rawProjects = await fetch(`/api/projects/${this.$route.params.projectID}`)
        this.project = await rawProjects.json()
        this.jsonKeys = Object.keys(this.project)
    }
}
</script>