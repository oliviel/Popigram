<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>


<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  }
}
</script>


<style>
  html {
    font-size: 10px;
  }

  body {
    background-color: #fafafa;
  }
</style>
