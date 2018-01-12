<template>
  <div class="hexagon" v-bind:style="styleObject"><slot></slot></div>
</template>

<script>
  export default {
    props: {
      gradient: String,
      'gradient-degree': Number,
      width: {
        type: Number,
        default: 280,
      },
      height: {
        type: Number,
        default: 66
      },
      'text-color': {
        type: String,
        default: 'white'
      },
      'z-index': Number,
      'shadow': {
        type: String,
        default: '0 6px 12px 0 rgba(32,33,39,0.08)'
      }
    },
    data() {
      let styleObject = {
        width: this.width + 'px',
        height: this.height + 'px',
        color: this.textColor,
        zIndex: this.zIndex,
        clipPath: 'polygon(0% 50%, 18px 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 18px 100%, 0% 50%)',
        boxShadow: this.shadow
      }
      if (this.gradient) {
        styleObject.backgroundImage = 'linear-gradient(' + (this.gradientDegree || 135) + 'deg, ' + this.gradient + ')'
      }
      return {
        styleObject: styleObject
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hexagon {
    background: white;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0;
    overflow: display;

    &.sticky {
      margin-left: -66px;
    }
  }
</style>