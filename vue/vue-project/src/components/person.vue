<template>
    <div class="person">
        <h1>{{ name }}</h1>
      <h2>{{ age }}</h2>
      <h3>{{ sex }}</h3>
      <h4>{{ tel }}</h4>
      <button @click="sayHello">say hello</button>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  data() {
    return {
      name: 'baize',
      age: 30,
      sex: '男',
      tel: '13800000000',
    }
  },
  methods: {
    sayHello() {
      alert('hello vue3')
    }
  }
}
</script>

<style scoped>
.person {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid red;
  border-radius: 10px;
  background-color: #f0f0f0;
}
</style>