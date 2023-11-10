<template>
    <div class="container">
        <div class="btn"><router-link to="/admin/manage/projects/add" class="white-text">Add project</router-link></div>

        <div class="row" style="gap:5px;">
            <router-link :to="'/admin/manage/projects/'+project.id" v-for="project in projects" class="col s12 m4">
                <div class="card">
                    <div class="card-image" style="max-height:50%;">
                        <img :src="'/projects/'+project.id+'/images/icon.png'" alt="">
                    </div>
                    <div class="card-content">
                        <span>{{ project.name }}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import projectListing from '../../components/projectListing.vue';

export default {
    name: 'projects',
    components: {
        projectListing
    },

    data() {
        return {
            categories: [

            ],
            search: "",
            projects: []
        }
    },
    async mounted(){
        const rawProjects = await fetch('/api/projects')
        this.projects = await rawProjects.json()
    }
}
</script>