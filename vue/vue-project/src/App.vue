<template>
  <h1 class="title">You did it!
    <Person />
  </h1>
  
</template>

<script lang="ts">

  import Person from './components/person.vue'
  export default {
    name: 'App', // 组件名称
    components: {
      Person,
    },
  }
</script>

<style>
.title {
  color: red;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 50px;
  border: 1px solid red;
  border-radius: 10px;
  background-color: #f0f0f0;
}
</style>
