<template>
    <div class="card-panel teal lighten-2">
        <div class="footer-copyright">
            <div class="container">
                <div class="right">
                    <div class="valign-wrapper">
                        <span class="white-text">{{ copyright }}</span>
                    </div>
                </div>
                
                <div class="valign-wrapper">
                    <a class="white-text" href="https://github.com/numselli"><font-awesome-icon :icon="['fab', 'github']" size="2xl"/></a>
                    <a class="white-text" href="https://discord.gg/5kNZFH5"><font-awesome-icon :icon="['fab', 'discord']" size="2xl"/></a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'footerBar',
    data(){
        return {
            copyright: `© ${new Date().getFullYear()} Copyright Text`
        }
    }
};
</script>
