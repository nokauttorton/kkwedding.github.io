<template>
  <div class="x">
    {{ xxx }}
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    xxx() {
      return window.innerWidth
    }
  },
  mounted() {
    console.log('MOUNT HOME')
  }
}
</script>

<style lang="scss">
</style>
