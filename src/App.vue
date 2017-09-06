<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
import { AppHeader, AppMain } from '@/components/layout/main'
export default {
  name: 'app',

  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style lang='scss'>
@import "./styles/app.scss";
</style>
