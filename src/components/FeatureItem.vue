<template>
  <div class="item-container">
    <p-button :gradient-degree="135" :gradient="this.gradient" shadow="0 6px 12px 0 rgba(32,33,39,0.08)" :clickable="false" :width="50" :height="48" :border-radius="10" :icon="icon" text-color="white" />
    <div class="descript">
      <h4>{{ title }}</h4>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'desc', 'gradient', 'icon'],
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .item-container {
    display: flex;
    flex-direction: row;
    width: 50%;
    text-align: left;
    margin-bottom: 30px;

    .descript {
      margin-left: 5%;
    }
    h4 {
      margin: 0;
    }
    p {
      margin-top: 10px;
      margin-right: 15%;
    }
  }
</style>