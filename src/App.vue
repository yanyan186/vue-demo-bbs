<template>
  <div id="app">
    <leftbar></leftbar>
    <div class="content">
      <publish></publish>
    </div>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import Leftbar from './views/Left'
import Publish from './views/Publish'

export default {
  name: 'app',
  components: {
    Leftbar,
    Publish
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}
#app {
  position: relative;
  margin: 0 auto;
  width: 1000px;
  border: solid 1px #efefef;
  background-color: #f0f8fc;
}
.content {
  margin-left: 220px;
  padding: 10px;
}
</style>
