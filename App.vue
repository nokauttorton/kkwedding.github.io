<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                timeout: false,
                delta: 200,
                rtime: 0
            }
        },
        methods: {
            // onResize() {
            //     this.rtime = new Date();
            //     if (!this.timeout) {
            //         this.$set(this, 'timeout', true);
            //         setTimeout(this.resizeEnd, 200);
            //     }
            // },
            // resizeEnd() {
            //     if (new Date() - this.rtime < this.delta) {
            //         setTimeout(this.resizeEnd, this.delta);
            //     } else {
            //         this.$set(this, 'timeout', false);
            //         this.updateDeviceType();
            //         console.log("updateDeviceType", this.isTablet);
            //     }
            // }
        },
        mounted() {
            // if (document && document.body.style.zoom !== 0.9) {
            // TODO: не пользуем такой скейл пока не определимся с необходимой шириной. В классе app-container есть адаптивность
            //     document.body.style.zoom = 0.9
            // }
            // window.addEventListener('resize',  this.getResize);
            // if (this.$store.getters.isRouteOnCreate) {
            //     this.$nextTick(() => {
            //         let data = this.$store.getters.getRouteOnCreate;
            //         this[data.method](data.name, data.options);
            //         this.$store.dispatch('clearRoute');
            //     });
            // }
            // this.updateDeviceType();
            // this.$nextTick(() => {
            //     window.addEventListener('resize', this.onResize)
            // })
        },
        beforeDestroy() {
            // window.removeEventListener('resize', this.onResize);
        }
    }
</script>

<style scoped>
    #app {
        /*min-height: 100vh;*/
    }
</style>
