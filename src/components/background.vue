<template>
    <div style="position: absolute; z-index: -100;" class="grey darken-4">
        <div ref="myDiv"></div>
    </div>
</template>
  
<script>
import Sparticles from "sparticles";

export default {
    name: 'background',
    mounted() {
        window.addEventListener('resize', this.onResize)

        const options = {
            "composition": "source-over",
            "count": 500,
            "speed": 5,
            "parallax": 0,
            "direction": 180,
            "xVariance": 2,
            "yVariance": 2,
            "rotate": true,
            "rotation": 1,
            "alphaSpeed": 10,
            "alphaVariance": 1,
            "minAlpha": 0,
            "maxAlpha": 1,
            "minSize": 5,
            "maxSize": 15,
            "style": "stroke",
            "bounce": false,
            "drift": 0,
            "glow": 0,
            "twinkle": false,
            "color": ["random"],
            "shape": "random",
            "imageUrl": ""
        }

        this.sparticles = new Sparticles(this.$refs.myDiv, options, window.innerWidth, window.innerHeight);
    },
    methods: {
        onResize() {
            this.sparticles.setCanvasSize( window.innerWidth, window.innerHeight)
            this.sparticles.resetSparticles()
        }
    }
}
</script>