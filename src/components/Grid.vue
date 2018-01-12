<template lang="pug">
  .grid
    .row(v-for="(row, idx) in rows", :key="idx")
      .col(v-for="col in row", :key="col.id", v-bind:class="{ 'shadow': col.type === 'img'}", v-bind:style="styles")
        img(v-if="col.type === 'img'", :src="col.content")
        .info(v-if="col.type !== 'img'")
          h4 {{ col.title }}
          .content {{ col.content }}
</template>

<script>
  export default {
    props: {
      data: Array,
      cols: {
        type: Number,
        default: 4
      },
    },
    data() {
      let rows = []
      while (this.data.length) {
        rows.push(this.data.splice(0, this.cols))
      }
      return {
        rows: rows,
        styles: undefined
      }
    },
    mounted() {
      console.debug('styles')
      if (this.$el) {
        let width = this.$el.children[0].children[0].clientWidth
        this.styles = {
          height: width + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid {
    display: inline-block;
    width: 100%;
    background-color: white;
    .row {
      margin: 0;
      &:nth-child(even) {
        .info {
          text-align: right;
          padding: 3% 10% 3% 15%;
        }
      }
      .col {
        display: inline-block;
        width: 293px;
        height: 295px;
        overflow: hidden;
        &.shadow {
          box-shadow: 0 6px 12px 0 rgba(32, 33, 39, .08);
        }

        img {
          height: 100%;
          margin-left: -30%;
        }
      }
    }
    .info {
      padding: 3% 15% 3% 10%;
      text-align: left;
      h4 {
        font-size: 20px;
        color: #282B31;
        letter-spacing: 0;
        line-height: 50px;
        margin-bottom: 10px;
      }
      .content {
        font-size: 14px;
        color: #676C75;
        letter-spacing: 0;
        line-height: 20px;
      }
    }
  }
</style>