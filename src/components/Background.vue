<template>
  <div class="wrapper" v-bind:style="styleObject">
    <div v-if="!isFlat" class="big-circle"></div>
    <div v-if="!isFlat" class="small-circle"></div>
    <div v-if="!isFlat" class="overlay-circle"></div>
    <div v-if="!isFlat" class="medium-circle"></div>
    <slot></slot>
    <img v-if="bgImage" class="bg" :src="bgImage" />
  </div>
</template>

<script>
export default {
  props: {
    'flat-color': String,
    'height': {
      type: String,
      default: 'auto'
    },
    'bg-image': String,
  },
  data() {
    let isFlat = false
    let styleObject = {}
    if (this.flatColor) {
      isFlat = true
      styleObject.backgroundImage = 'none'
      styleObject.background = this.flatColor
    }
    if (this.height) {
      styleObject.height = this.height !== 'auto' ? this.height + 'px' : this.height
    }
    return {
      isFlat: isFlat,
      styleObject: styleObject
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    background-image: linear-gradient(-45deg, #2FB9F8 0%, #7956EC 100%);
    overflow: hidden;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  .overlay-circle {
    position: absolute;
    border-radius: 100%;
    width: 1500px;
    height: 1500px;
    right: -10%;
    top: 135px;
    transform: rotate(90deg);
    opacity: 0.1;
    background-image: linear-gradient(-135deg, #2FB9F8 0%, #7956EC 69%);
  }
  .big-circle {
    position: absolute;
    border-radius: 100%;
    width: 1170px;
    height: 1170px;
    left: -28%;
    top: -15%;
    transform: rotate(90deg);
    opacity: 0.3;
    background-image: linear-gradient(-238deg, #2FB9F8 0%, #7956EC 69%);
    box-shadow: 0 0 40px 0 rgba(40,43,49,0.10);
  }
  .small-circle {
    position: absolute;
    border-radius: 100%;
    right: -10%;
    top: -15%;
    width: 580px;
    height: 580px;
    transform: rotate(-90deg);
    opacity: 0.3;
    background-image: linear-gradient(-145deg, #2FB9F8 0%, #7956EC 100%);
    box-shadow: 0 0 30px 0 rgba(40,43,49,0.10);
  }
  .medium-circle {
    position: absolute;
    border-radius: 100%;
    right: 135px;
    top: 30%;
    width: 750px;
    height: 750px;
    transform: rotate(45deg);
    opacity: 0.3;
    background-image: linear-gradient(-145deg, #2FB9F8 0%, #7956EC 100%);
    box-shadow: 0 0 30px 0 rgba(40,43,49,0.10);
  }
</style>