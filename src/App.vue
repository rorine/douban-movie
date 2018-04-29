<template>
  <div id="app">
    <Header></Header>
    <router-view class="view"></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  /*position: relative;
  min-height: 100%;*/
  padding-top: 1.5rem;
}
</style>
