<template>
    <div class="container">
        <form @submit.prevent="submitF">
            <div>
                <label for="ProjectID" class="white-text">Project ID</label>
                <input type="text" name="ProjectID" required ref="projectID">
            </div>
            <div>
                <label for="ProjectName" class="white-text">Project Name</label>
                <input type="text" name="ProjectName" required ref="projectName">
            </div>

            <div>
                <label for="description" class="white-text">description</label>
                <input type="text" name="description" required ref="description">
            </div>

            <div>
                <label class="white-text" for="status">Select a status</label>
                <select name="status" class="browser-default" required ref="status">
                    <option value="Completed">Completed</option>
                    <option value="In progress">In progress</option>
                    <option value="On hold">On hold</option>
                    <option value="Not Started">Not Started</option>
                </select>
            </div>

            <div>
                <div @click="addLinkDiv" class="btn waves-effect waves-light">Add link</div>
                <div v-for="(link, index) in links">
                    <span class="white-text">link {{ index+1 }}</span>
                    <div v-for="feild in Object.keys(link)">
                        <label :for="'link'+(index+1)+feild" class="white-text">{{ feild }}</label>
                        <input type="text" :name="'link'+(index+1)+feild" :ref="'link'+(index+1)+feild">
                    </div>
                </div>
            </div>

            <div>
                <div @click="addToolDiv" class="btn waves-effect waves-light">Add tool</div>
                <div v-for="(tool, index) in tools">
                    <span class="white-text">tool {{ index+1 }}</span>
                    <div v-for="feild in Object.keys(tool)">
                        <label :for="'tool'+(index+1)+feild" class="white-text">{{ feild }}</label>
                        <input type="text" :name="'tool'+(index+1)+feild" :ref="'tool'+(index+1)+feild">
                    </div>
                </div>
            </div>

            <div>
                <div @click="addImageDiv" class="btn waves-effect waves-light">Add image</div>
                <div v-for="(image, index) in images">
                    <span class="white-text">image {{ index+1 }}</span>
                    <div>
                        <label :for="'images'+(index+1)+feild" class="white-text">image {{ (index+1) }}</label>
                        <input class="white-text" type="file" :name="'image'+(index+1)" :ref="'image'+(index+1)">
                    </div>
                </div>
            </div>





            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'projectAdd',
        data(){
            return {
                links: [],
                tools:[],
                images:[]
            }
        },
        // async mounted(){
        //     const owenerid = '726515812361437285'
        //     const {session} = await useSession()
        //     if (!session.value?.userInfo?.id) navigateTo('/login', {
        //         "external": true  
        //     })
        //     if (session.value.userInfo.id !== owenerid) navigateTo('/', {
        //         "external": true  
        //     })
        // },
        "methods": {
            addLinkDiv(){
                this.links.push({
                    name: "",
                    icon: "",
                    url: ""
                })
            },
            addToolDiv(){
                this.tools.push({
                    name: "",
                    icon: "",
                })
            },
            addImageDiv(){
                this.images.push({})
            },
            async submitF() {
                const formData = new FormData()

                Object.keys(this.$refs).forEach(k => {
                    if (Array.isArray(this.$refs[k])){
                        if (this.$refs[k][0].files) formData.append(k, this.$refs[k][0].files[0])
                        else formData.append(k, this.$refs[k][0].value)
                    } else {
                        formData.append(k, this.$refs[k].value)
                    }
                })

                const response = await $fetch('/api/projects/add', {
                    method: 'post',
                    body: formData,
                })

                // this.$M.toast({text: 'Sent!!'})

                // return await navigateTo(this.$route.fullPath.substring(0, this.$route.fullPath.lastIndexOf('/')))

                // category: 'Discord Bot',
                // img: require('@/assets/images/projects/redditGIFfix/icon.png'),
                // date: 1649282824000,
            }
        }
    }
</script>