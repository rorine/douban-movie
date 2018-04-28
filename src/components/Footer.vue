<template>
  <div id="footer">
    © {{ year }} Develop
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: ''
    }
  },
  created() {
    this.year = new Date().getFullYear();
  },
}
</script>

<style scoped>
#footer {
  width: 100%;
  height: 1rem;
  margin-top: 1rem;
  font-size: .2rem;
  line-height: 1rem;
  color: #27a;
  text-align: center;
  background: #f0f0f0;
}
</style>
