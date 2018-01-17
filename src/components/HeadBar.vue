<template>
  <div class="header">
    <div class="logo withName">
      <img src="../assets/logo.png" />
      <div class="name" v-t="'pallet'"></div>
    </div>
    <ul class="menu">
      <li><a href="#" v-scroll-to="'#features'" v-t="'features.label'"></a></li>
      <li><a href="#" v-scroll-to="'#members'" v-t="'members'"></a></li>
      <li><a href="#" v-scroll-to="'#faq'" v-t="'faq.label'"></a></li>
      <li class="other"><p-button :text="$t('joinICO')" @click="click" /></li>
      <li>
        <div class="overlay-selected">
          <span class="flag-icon" v-bind:class="locale.country"></span>
          {{ locale.title }}
        </div>
        <v-select v-model="locale" :options="langOptions" label="title">
          <template slot="option" slot-scope="option">
            <span class="flag-icon" v-bind:class="option.country"></span>
            {{ option.title }}
          </template>
        </v-select>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        langOptions: [
          { title: 'ENGLISH', country: 'flag-icon-gb', value: 'en' },
          { title: '简体中文', country: 'flag-icon-cn', value: 'cn' },
        ],
        locale: { title: 'ENGLISH', country: 'flag-icon-gb', value: 'en' },
      }
    },
    methods: {
      click: function(e) {
        this.$emit('click', e)
      },
    },
    watch: {
      locale (valObj) {
        this.$i18n.locale = valObj.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  // v-select styles are modified in global, e.g. in App.vue, don't know why scoped style can't overwrite them.
  .overlay-selected {
    position: absolute;
    top: 0;
    left: 0;
    padding: .4em .5em;
    z-index: 9;
    color: #333;
    font-weight: 600;
    pointer-events: none;
  }
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
      position: relative;
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