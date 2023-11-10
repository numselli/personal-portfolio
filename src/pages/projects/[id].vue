<template>
    <div class="container">
        <h3 class="white-text">{{ project.name }}</h3>
        <h3 class="white-text">Status: {{ project.status }}</h3>


        <div class="row">
            <div>
                <!-- <h6 class="white-text"><font-awesome-icon class="white-text" :icon="['fa', 'clock']" /> {{ new
                    Date(project.extededDescription.date).toLocaleDateString() }}</h6> -->
            </div>
            <div>
                <!-- <h6 class="white-text"><font-awesome-icon class="white-text" :icon="['fas', 'tags']" /> {{ project.category }}</h6> -->
            </div>
        </div>




        <div>
            <span class="white-text">images</span>
        </div>


        <div class="row">
            <div class="col s3">
                <div>
                    <h6 class="white-text">Tools & Technologies</h6>
                </div>

                <div>
                    <h6 class="white-text">Links</h6>
                </div>
                <!-- Grey navigation panel -->
            </div>

            <div class="col s9">
                <div>
                    <h6 class="white-text">About</h6>
                </div>
                <!-- <p>{{ project.description }}</p> -->
                <!-- Teal page content  -->
            </div>
        </div>
        
        <p class="white-text">{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'projects',
    data() {
        return {
            project: {}
            // project: projectList[projectList.findIndex(p => p.id === this.$route.params.id)]
        }
    },
    async mounted(){
        const rawProjects = await fetch(`/api/projects/${this.$route.params.id}`)
        this.project = await rawProjects.json()
    }
}
</script>