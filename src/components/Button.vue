<template>
  <div class="button" v-bind:style="$data.styles">
    <span v-if="text">{{ text }}</span>
    <font-awesome-icon v-if="!text && icon" :icon="icon" :color="textColor" size="lg" />
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      icon: [String, Array],
      'gradient-degree': {
        type: Number,
        default: 90
      },
      gradient: String,
      shadow: String,
      'text-color': {
        type: String,
        default: '#282B31',
      },
      'border-radius': {
        type: Number,
        default: 5
      },
      clickable: {
        type: Boolean,
        default: true
      },
      width: Number,
      height: Number
    },
    data() {
      let styleObject = {
        borderRadius: this.borderRadius + 'px',
        boxShadow: this.shadow,
        color: this.textColor,
        cursor: this.clickable ? 'pointer' : 'arrow',
      }
      if (this.gradient) {
        styleObject.backgroundImage = 'linear-gradient(' + this.gradientDegree + 'deg, ' + this.gradient + ')'
      }
      if (this.width) {
        styleObject.minWidth = this.width + 'px'
        styleObject.padding = 0
      }
      if (this.height) {
        styleObject.height = this.height + 'px'
        styleObject.padding = 0
      }
      return {
        styles: styleObject,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    background: white;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 10px 30px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>