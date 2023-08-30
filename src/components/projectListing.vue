<template>
    <div class="card">
        <div class="card-image">
            <img :src="'https://raw.githubusercontent.com/numselli/personal-portfolio/master/siteSrc/src/assets/images/projects/'+project.id+'/icon.png'">
            <span class="card-title">{{ project.title }}</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="#">This is a link</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projectListing',
    props: {
        project: Object,
    },
};
</script>