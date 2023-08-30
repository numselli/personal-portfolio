<template>
  <background></background>
  <headerBar></headerBar>

  <div class="container grey darken-3" id="main">
    <form>
      <div>
        <label for="name" class="white-text">Full Name</label>
        <input type="text" name="name" id="">
      </div>

      <div>
        <label for="email" class="white-text">Email</label>
        <input type="text" name="email" id="">
      </div>

      <div>
        <label for="subject" class="white-text">Subject</label>
        <input type="text" name="subject">
      </div>

      <div>
        <label for="body" class="white-text">Message</label>
        <input type="text" name="body" id="">
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
  }
}
</script>

<style>
#main {
  min-height: calc(100vh - 255px);
}
</style>