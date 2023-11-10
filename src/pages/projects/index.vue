<template>
    <div class="container">

        <div class="row">
            <div>
                <label for="search"></label>
                <input type="text" name="search">
            </div>
            <div>
                <label for="cars">Choose a car:</label>

                <select class="browser-default" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>


        <div class="row" style="gap:5px;">
            <router-link :to="'/projects/'+project.id" v-for="project in projects" class="col s12 m4">
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