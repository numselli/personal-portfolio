<template>
  <background></background>
  <headerBar></headerBar>

  <div class="container grey darken-3" id="main">
    <form @submit.prevent="submitF">
      <div>
        <label for="name" class="white-text">Full Name</label>
        <input type="text" name="name" required ref="name">
      </div>

      <div>
        <label for="email" class="white-text">Email</label>
        <input type="email" name="email" required ref="email">
      </div>

      <div>
        <label for="subject" class="white-text">Subject</label>
        <input type="text" name="subject" required ref="subject">
      </div>

      <div>
        <label for="body" class="white-text">Message</label>
        <input type="text" name="body" required ref="body">
      </div>

      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
        <font-awesome-icon :icon="['fas', 'paper-plane']" />
      </button>
    </form>
  </div>

  <footerBar></footerBar>
</template>

<script>
import headerBar from '../components/header.vue'
import footerBar from '../components/footer.vue'
import background from '../components/background.vue';

export default {
  name: 'contact',
  components: {
    headerBar,
    footerBar,
    background
  },
  "methods": {
    async submitF() {
      const newRefs = {}
      Object.keys(this.$refs).forEach(k => newRefs[k] = this.$refs[k].value)
      await $fetch('/api/contact/webhook', {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: newRefs
      })
      this.$M.toast({text: 'Sent!!'})

      return await navigateTo(this.$route.fullPath.substring(0, this.$route.fullPath.lastIndexOf('/')))
    }
  }
}
</script>

<style>
#main {
  min-height: calc(100vh - 255px);
}
</style>