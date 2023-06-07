<style scoped>
.main {
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<template>

  <div class="main">
      <div>
        <MyNavbar/>
      </div>
      <div class="content">
        <MyHeader/>
        <MyComponent/>
        <MyFooter/>
      </div>
  </div>

</template>

<script>

import MyComponent from './MyComponent'
import MyFooter from './MyFooter.vue';
import MyHeader from './MyHeader'
import MyNavbar from './MyNavbar.vue';

export default {
    name: "App",
    components: { MyComponent, MyHeader, MyNavbar, MyFooter }
}
</script>


<style>
</style>
