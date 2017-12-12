<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    div
      el-button(@click='startHacking') Start
    h2 Essential Links
    ul
      li: a(href='https://vuejs.org', target='_blank')  Core Docs
      li: a(href='https://forum.vuejs.org', target='_blank')  Forum
      li: a(href='https://chat.vuejs.org', target='_blank')  Community Chat
      li: a(href='https://twitter.com/vuejs', target='_blank')  Twitter
    h2 Ecosystem
    ul
      li: a(href='http://router.vuejs.org/', target='_blank')  vue-router
      li: a(href='http://vuex.vuejs.org/', target='_blank')  vuex
      li: a(href='http://vue-loader.vuejs.org/', target='_blank')  vue-loader
      li: a(href='https://github.com/vuejs/awesome-vue', target='_blank')  awesome-vue
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
