<template>
  <div v-bind:style="styleObject"></div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '10'
      },
      height: {
        type: String,
        default: '1'
      },
      color: {
        type: String,
        default: 'white'
      },
      pos: {
        type: String,
        default: '50% 0'
      }
    },
    data() {
      let pos = this.pos.split(',')
      pos = pos.map(coord => coord.charAt(coord.length - 1) === '%' || coord.charAt(coord.length - 1) === ')' ? coord : coord + 'px')
      let styleObject = {
        width: this.width.charAt(this.width.length - 1) === '%' ? this.width : this.width + 'px',
        height: this.height.charAt(this.height.length - 1) === '%' ? this.height : this.height + 'px',
        backgroundColor: this.color,
        top: pos[1],
        left: pos[0],
        margin: 'auto 0'
      }
      return {
        styleObject: styleObject
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vertical {
    position: absolute;
    transform: translateX(-50%);
  }
</style>