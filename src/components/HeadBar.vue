<template>
  <div class="header">
    <div class="logo withName">
      <img src="../assets/logo.png" />
      <div class="name">Pallet</div>
    </div>
    <ul class="menu">
      <li><a href="#" v-scroll-to="'#features'">Features</a></li>
      <li><a href="#" v-scroll-to="'#members'">Members</a></li>
      <li><a href="#" v-scroll-to="'#faq'">FAQ</a></li>
      <li class="other"><p-button text="join ICO" @click="click" /></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      click: function(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 18px 9%;
    z-index: 999;
    margin-bottom: 50px;
    li {
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.withName {
      img {
        width: 42px;
        height: 42px;
      }
    }
  }
  .name {
    color: white;
    font-weight: 600;
    margin-left: 5px;
    font-size: 20px;
  }
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
  .other {
    margin-left: 15px;
    margin-right: 0;
  }
</style>