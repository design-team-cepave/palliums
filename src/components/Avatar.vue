<template lang="pug">
  .avatar(v-bind:class="{ 'card-detail': withCard }")
    .card
      img(:src="photo")
      .descript {{ descript }}
      p-line(width="100%", height="1", color="#E7E8EA" v-if="withCard")
      .title {{ title }} | {{ name}}
</template>

<script>
  export default {
    props: {
      'with-card': {
        type: Boolean,
        default: false
      },
      title: String,
      name: String,
      photo: String,
      descript: String
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .avatar {
    margin: 0 2%;
    img {
      width: 96px;
      height: 96px;
      border-radius: 100%;
      background: #FFFFFF;
      box-shadow: 0 6px 12px 0 rgba(32,33,39,0.16);
    }
    .title {
      font-size: 12px;
      color: #282B31;
      letter-spacing: 0;
      line-height: 25px;
      margin-top: 5px;
      font-weight: bold;
    }
    &.card-detail {
      position: relative;
      margin: 0 15px;
      width: 30%;
      img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
      .descript {
        font-size: 14px;
        color: #282B31;
        line-height: 25px;
        padding: 5px 10px 20px;
      }
      .card {
        padding: 70px 10% 20px;
        background: #FFFFFF;
        box-shadow: 0 12px 35px 0 rgba(40,43,49,0.16);
        border-radius: 12px;
      }
      .title {
        margin: 15px auto;
        color: #999EA8;
      }
    }
  }
</style>