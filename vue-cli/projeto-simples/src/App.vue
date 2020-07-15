<template>
  <div id="app">{{ titulo }}</div>
</template>
<script>
  export default {
    data: function () {
      return {
        titulo: 'Usando VueJS'
      }
    }
  }
  
</script>

<style>
  #app {
    background-color: greenyellow;
  }
</style>