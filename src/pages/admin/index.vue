<template>
    <div class="container">
        <div class="btn"><router-link to="/admin/manage/projects" class="white-text">Manage projects</router-link></div>
        <div class="btn"><router-link to="/admin/manage/about" class="white-text">Manage about</router-link></div>
        <div class="btn"><router-link to="/admin/manage/about" class="white-text">Manage domains</router-link></div>
    </div>
</template>

<script>
    export default {
        name: 'admin',
        // async mounted(){
        //     const owenerid = '726515812361437285'
        //     const {session} = await useSession()
        //     if (!session.value?.userInfo?.id) navigateTo('/login', {
        //         "external": true  
        //     })
        //     if (session.value.userInfo.id !== owenerid) navigateTo('/', {
        //         "external": true  
        //     })
        // }
    }
</script>