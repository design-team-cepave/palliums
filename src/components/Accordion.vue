<template lang="pug">
  .accordion(v-bind:class="{ 'open': isOpen }")
    .title(@click="toggle()")
      div {{ title }}
      .arrow
        font-awesome-icon(:icon="icon" color="#D3D5D9")
    .content {{ content }}
</template>

<script>
  export default {
    props: {
      title: String,
      content: String,
    },
    data() {
      return {
        isOpen: false,
        icon: 'angle-down'
      }
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
        this.icon = this.isOpen ? 'angle-up' : 'angle-down'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .accordion {
    position: relative;
    background: #FFFFFF;
    box-shadow: 0 1px 3px 0 rgba(32,33,39,0.12);
    border-radius: 12px;
    padding: 20px 30px;
    text-align: left;
    margin: 0 auto 10px;
    width: 55%;

    &.open {
      box-shadow: 0 6px 12px 0 rgba(32,33,39,0.08);
      .content {
        max-height: 500px;
        opacity: 1;
        margin-top: 20px;
        transition: all 0.5s ease-out;
        -webkit-transition: all 0.5s ease-out;
	      -moz-transition: all 0.5s ease-out;
      }
    }

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .content {
      max-height: 0;
      margin-top: 0;
      opacity: 0;
      transition: all 0.2s ease-out;
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
    }
  }
  @media screen and (max-width: 1100px) {
    .accordion {
      width: 85%;
    }
  }
</style>