<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><font-awesome-icon :icon="['fas', 'bars']" /></a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><router-link to="/" >Home</router-link></li>
                <li><router-link to="/about" >About</router-link></li>
                <li><router-link to="/contact" >Contact</router-link></li>
                <li><router-link to="/projects" >Projects</router-link></li>
            </ul>
        </div>
    </nav>

    <ul class="sidenav grey darken-4" ref="sidenav" id="mobile-demo">
        <li><router-link to="/" class="white-text">Home</router-link></li>
        <li><router-link to="/about" class="white-text">About</router-link></li>
        <li><router-link to="/contact" class="white-text">Contact</router-link></li>
        <li><router-link to="/projects" class="white-text">Projects</router-link></li>
    </ul>
</template>

<script>
export default {
    name: 'headerBar',
    mounted() {
        // var elems = document.querySelectorAll('.sidenav');
        var instances = this.$M.Sidenav.init(this.$refs.sidenav);
    }
};
</script>