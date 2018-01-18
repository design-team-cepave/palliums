<template lang="pug">
  #app
    .container
      background(flat-color="transparent", bg-image="./assets/bg.svg").home
        headbar(@click="showModal = true")
        .logo
          img(src="./assets/logo.png")
        h1(v-t="'pallet'")
        h1(v-t="'slogan'")
        .buttons
          p-button(:text="$t('whitepaper')", gradient="#FF8E64 0%,#FFE641 100%", text-color="white", shadow="0 6px 12px 0 rgba(40,43,49,0.16)")
          p-button(:text="$t('joinICO')", shadow="0 6px 12px 0 rgba(40,43,49,0.16)", @click="showModal = true")
      //  h1.what What is Pallet?
      //background(flat-color="white", height="245")
      //.laptop
      //  .group
      //    img(src="./assets/laptop.svg")
      //    img.play(src="./assets/play-button.svg")
      background(flat-color="#F8F9FA", id="features").section.features
        h1(v-html="$t('features.header')")
        .items
          feature-item(v-for="item in features", :key="item.id", :title="$t(item.name)", :desc="$t(item.description)", :gradient="item.gradient", :icon="item.icon")
      background(flat-color="transparent", bg-image="./assets/bg.svg").section.history
        h1(v-t="'developHistory'")
        .diagram
          .row
            hexagon(gradient="#AD2AB9 0%, #FF618C 100%", :z-index="3", ref="h1") Bitcoin
            hexagon.sticky(gradient="#F23673 0%, #FFC066 100%", :width="370" :z-index="2") Ethereum
            hexagon.sticky(gradient="#FF8E64 0%, #FFE641 100%", :width="370", ref="h2") Pallet
          .row
            hexagon(text-color="#647391", :height="56") Gcoin
            p-line(width="20")
            hexagon(text-color="#647391", :height="56") Vchain
            p-line(width="20")
            hexagon(text-color="#647391", :height="56") Pallet
            p-line.vertical(width="1", height="120", pos="calc(50% - 300px), 56", ref="v1")
            p-line.vertical(width="1", height="270", pos="50%, 56")
            p-line.vertical(width="1", height="270", pos="calc(50% + 300px), 56", ref="v2")
          .row
            hexagon(text-color="#647391", :width="880", :height="56") Governance
          .row
            hexagon(text-color="#647391", :width="580", :height="56") Colocoin
            p-line(width="20")
            hexagon(text-color="#647391", :height="56") ERC20 Token
          .row.align-end
            hexagon(text-color="#647391", :height="56") Oracle
            p-line(width="20")
            hexagon(text-color="#647391", :height="56") Inter Chain
          .row.align-end
            hexagon(text-color="#647391", :height="56") EVM
            p-line(width="20")
            hexagon(text-color="#647391", :height="56") ART
      background(flat-color="#F8F9FA").section.faq
        h1(v-t="'icoNews.label'")
        accordion(v-for="news in newsList", :key="news.id", :title="$t(news.date)", :content="$t(news.content)")
      background(flat-color="#F8F9FA").section.ico
        h1(v-t="'tokenDistribution'")
        .row
          .card
            img(src="./assets/token-card-bg.svg")
            .title(v-t="'icoUsage.pali.label'")
            .content
              li(v-t="'icoUsage.pali.use1'")
              li(v-t="'icoUsage.pali.use2'")
              li(v-t="'icoUsage.pali.use3'")
          .card
            img(src="./assets/token-card-bg.svg")
            .title(v-t="'icoUsage.cash.label'")
            .content
              li(v-t="'icoUsage.cash.use1'")
              li(v-t="'icoUsage.cash.use2'")
              li(v-t="'icoUsage.cash.use3'")
              li(v-t="'icoUsage.cash.use4'")
              li(v-t="'icoUsage.cash.use5'")
        .toolbar
          p-button(:text="$t('joinICO')", gradient="#FF8E64 0%,#FFE641 100%", text-color="white", :width="230", :height="50", shadow="0 6px 12px 0 rgba(40,43,49,0.16)", @click="showModal = true")
      background(flat-color="#FFFFFF", id="members").section.members
        h1(v-t="'members.label'")
        .group
          avatar(v-for="leader in leaders", :key="leader.id", :title="$t(leader.title)", :name="$t(leader.name)", :photo="leader.photo", :descript="$t(leader.descript)", :with-card="leader.isLeader")
        .group
          avatar(v-for="member in members", :key="member.id", :title="$t(member.title)", :name="$t(member.name)", :photo="member.photo", :with-card="member.isLeader")
      background(flat-color="#F8F9FA", id="faq").section.faq
        h1(v-t="'faq.longLabel'")
        accordion(v-for="question in questions", :key="question.id", :title="$t(question.title)", :content="$t(question.content)")
        .comment
          span Find
          a(href="javascript:") Here
          span if you still have any questions
      background(flat-color="#F8F9FA").section.media
        h1(v-t="'media.label'")
        grid(:data="medias")
      background(flat-color="#FFF").section.blank
        .brick(v-for="b in bricks", :key="b")
      background(flat-color="#F8F9FA").section.community
        h1(v-t="'community'")
        .content
          .item(v-for="community in communities", :key="community.icon[1]") 
            p-button(shadow="0 1px 3px 0 rgba(32,33,39,0.12)" :width="50" :height="48" :border-radius="10" :icon="community.icon", text-color="#B9BDC3")
      background(flat-color="transparent", bg-image="./assets/bg.svg").section.subscribe
        h1(v-t="'subscribe.label'")
        .toolbar
          input(placeholder="Your E-Mail")
          p-button(:text="$t('subscribe.send')", gradient="#FF8E64 0%,#FFE641 100%", text-color="white", shadow="0 6px 12px 0 rgba(40,43,49,0.16)")
        //- .comment
        //-   span By clicking “Subscribe” button you agree to our
        //-   a(href="javascript:") Terms of Use
      background(flat-color="white").footer
        h3(v-t="'pallet'")
        .copyright(v-html="$t('copyright')")
        .links
          .btn-group
            p-button(v-for="link in links", :key="link.id" :width="40" :height="38" :icon="link.icon", text-color="#B9BDC3")
      modal(v-if="showModal", @close="close")
        h3(slot="header", v-t="'icoModal.header'")
        background(flat-color="transparent", bg-image="./assets/bg.svg", slot="body")
          img.logo(src="./assets/logo.png")
          h4(v-t="'icoModal.desc'") 
          p-line(width="90%", height="1", color="white", margin="auto")
          h5
            a(v-t="'icoModal.links[0].label'")
          h5
            a(v-t="'icoModal.links[1].label'")
          h5
            a(v-t="'icoModal.links[2].label'")
        .toolbar(slot="footer")
          label
            input(type="checkbox")
            .confirm(v-t="'icoModal.confirm'")
          p-button(:text="$t('icoModal.continue')", shadow="0 6px 12px 0 rgba(40,43,49,0.16)", border="1px solid #ddd", @click="close")
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Pallet',
      showModal: false,
      features: [
        { id: 1, name: 'features.tokenCoin', description: 'features.tokenCoinDesc', gradient: '#7956EC 0%,#2FB9F8 100%', icon: 'adjust' },
        { id: 2, name: 'features.multiChain', description: 'features.multiChainDesc', gradient: '#009FC5 0%,#3CECB0 100%', icon: 'tty' },
        { id: 3, name: 'features.security', description: 'features.securityDesc', gradient: '#FF8E64 0%,#FFE641 100%', icon: 'lock' },
        { id: 4, name: 'features.smartContract', description: 'features.smartContractDesc', gradient: '#F23673 0%,#FFC066 100%', icon: 'copyright' },
        { id: 5, name: 'features.multiCrypto', description: 'features.multiCryptoDesc', gradient: '#AD2AB9 0%,#FF618C 100%', icon: 'exchange-alt' },
        //{ id: 6, name: 'Feature 6', description: 'Description6 description6 description6 description6 description6', gradient: '#5134B2 0%,#B175EB 100%', icon: 'sliders-h' },
      ],
      newsList: [
        { id: 1, date: 'icoNews.news[0].date', content: 'icoNews.news[0].content' },
        { id: 2, date: 'icoNews.news[1].date', content: 'icoNews.news[1].content' },
        { id: 3, date: 'icoNews.news[2].date', content: 'icoNews.news[2].content' },
        { id: 4, date: 'icoNews.news[3].date', content: 'icoNews.news[3].content' },
        { id: 5, date: 'icoNews.news[4].date', content: 'icoNews.news[4].content' },
        { id: 6, date: 'icoNews.news[5].date', content: 'icoNews.news[5].content' },
        { id: 7, date: 'icoNews.news[6].date', content: 'icoNews.news[6].content' },
        { id: 8, date: 'icoNews.news[7].date', content: 'icoNews.news[7].content' },
        { id: 9, date: 'icoNews.news[8].date', content: 'icoNews.news[8].content' },
        { id: 10, date: 'icoNews.news[9].date', content: 'icoNews.news[9].content' },
        { id: 11, date: 'icoNews.news[10].date', content: 'icoNews.news[10].content' },
        { id: 12, date: 'icoNews.news[11].date', content: 'icoNews.news[11].content' },
        { id: 13, date: 'icoNews.news[12].date', content: 'icoNews.news[12].content' },
        { id: 14, date: 'icoNews.news[13].date', content: 'icoNews.news[13].content' },
      ],
      leaders: [
        { id: 1, title: 'members.ceo.title', name: 'members.ceo.name', photo: './src/assets/members/CEO.png', isLeader: true, descript: 'members.ceo.desc' },
        { id: 2, title: 'members.cto.title', name: 'members.cto.name', photo: './src/assets/members/CTO.png', isLeader: true, descript: "members.cto.desc" },
        { id: 3, title: 'members.lead.title', name: 'members.lead.name', photo: './src/assets/members/TechLead.png', isLeader: true, descript: 'members.lead.desc' },
      ],
      members: [
        { id: 1, title: 'members.developer', name: 'members.developers[0]', photo: './src/assets/anonymous.jpg' },
        { id: 2, title: 'members.developer', name: 'members.developers[1]', photo: './src/assets/anonymous.jpg' },
        { id: 3, title: 'members.developer', name: 'members.developers[2]', photo: './src/assets/anonymous.jpg' },
        { id: 4, title: 'members.developer', name: 'members.developers[3]', photo: './src/assets/anonymous.jpg' },
        { id: 5, title: 'members.developer', name: 'members.developers[4]', photo: './src/assets/anonymous.jpg' },
        { id: 6, title: 'members.developer', name: 'members.developers[5]', photo: './src/assets/anonymous.jpg' },
        { id: 7, title: 'members.developer', name: 'members.developers[6]', photo: './src/assets/anonymous.jpg' },
        { id: 8, title: 'members.developer', name: 'members.developers[7]', photo: './src/assets/anonymous.jpg' },
        { id: 9, title: 'members.developer', name: 'members.developers[8]', photo: './src/assets/members/PM.jpg' },
        { id: 10, title: 'members.devOps', name: 'members.developers[9]', photo: './src/assets/anonymous.jpg' },
      ],
      questions: [
        { id: 1, title: 'faq.questions[0].q', content: 'faq.questions[0].ans' },
        { id: 2, title: 'faq.questions[1].q', content: 'faq.questions[1].ans' },
        { id: 3, title: 'faq.questions[2].q', content: 'faq.questions[2].ans' },
        { id: 4, title: 'faq.questions[3].q', content: 'faq.questions[3].ans' },
        { id: 5, title: 'faq.questions[4].q', content: 'faq.questions[4].ans' },
        { id: 6, title: 'faq.questions[5].q', content: 'faq.questions[5].ans' },
        { id: 7, title: 'faq.questions[6].q', content: 'faq.questions[6].ans' },
        { id: 8, title: 'faq.questions[7].q', content: 'faq.questions[7].ans' },
        { id: 9, title: 'faq.questions[8].q', content: 'faq.questions[8].ans' },
        { id: 10, title: 'faq.questions[9].q', content: 'faq.questions[9].ans' },
        { id: 11, title: 'faq.questions[10].q', content: 'faq.questions[10].ans' },
      ],
      medias: [
        { id: 1, type: 'img', title: 'Title', content: './src/assets/bg-blue.svg' },
        { id: 2, title: 'Title', content: 'Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is' },
        { id: 3, type: 'img', title: 'Title', content: './src/assets/bg-orange.svg' },
        { id: 4, title: 'Title', content: 'Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is' },
        { id: 5, title: 'Title', content: 'Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is' },
        { id: 6, type: 'img', title: 'Title', content: './src/assets/bg-green.svg' },
        { id: 7, title: 'Title', content: 'Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is bridge of blockchains.Pallet is' },
        { id: 8, type: 'img', title: 'Title', content: './src/assets/bg-magenta.svg' },
      ],
      bricks: [1, 2, 3, 4, 5, 6],
      communities: [
        { icon: ['fab', 'facebook-f'], url: '' },
        { icon: ['fab', 'twitter'], url: '' },
        { icon: ['fab', 'google-plus-g'], url: '' },
        { icon: ['fab', 'youtube'], url: '' },
        { icon: ['fab', 'medium-m'], url: '' },
        { icon: ['fab', 'github'], url: '' },
      ],
      links: [
        { icon: ['fab', 'facebook-f'], url: '' },
        { icon: ['fab', 'twitter'], url: '' },
        { icon: ['fab', 'instagram'], url: '' },
      ]
    }
  },
  methods: {
    close: function(e) {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.container {
  position: relative;
}

.logo img {
  position: relative;
  z-index: 999;
  width: 90px;
  height: 90px;
}

img.hidden {
  display: none;
}

h1 {
  position: relative;
  z-index: 999;
  font-weight: 600;
  color: white;
  &.what {
    font-weight: normal;
    margin-top: 400px;
  }
}
.logo + h1 {
  margin-bottom: 0;
}
h1 + h1 {
  margin-top: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}

// To hide clear button on v-select
.v-select {
  &.single {
    .selected-tag {
      position: absolute;
      opacity: 0 !important;
    }
    input {
      cursor: pointer;
    }
  }

  .dropdown-toggle {
    background-color: white;
    border: none;
    padding: 1px 0;

    .clear {
      display: none;
    }
  }
  .dropdown-menu {
    border: none;

    li {
      &.active {
        a {
          background: transparent;
        }
      }
      &.highlight {
        a {
          background-color: #2FB9F8;
        }
      }
    }
  }
}

.modal-body {
  .wrapper {
    text-align: center;
  }

  .logo {
    position: relative;
    width: 10%;
    z-index: 9;
    margin: 25px auto 0;
  }
  h3, h4, h5, div {
    position: relative;
    z-index: 9;
  }
  h3, h4, h5 {
    padding: 5px 15px 5px;
    color: white;    
  }
  h5 {
    & + h5 {
      padding-top: 0;
    }
  }
  .bg {
    z-index: 0 !important;
  }
}

.modal-footer {
  .footer {
    flex-direction: column;
  }
  label {
    text-align: left;
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
  }
  input {
    margin-right: 10px;
  }
  .confirm {
    font-size: 13px;
  }
  .button {
    margin: 10px auto !important;
  }
}

.buttons {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 999;
}

.laptop {
  position: absolute;
  top: 1000px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  .group {
    position: relative;
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      cursor: pointer;
    }
  }
}

.home {
  padding-bottom: 120px;
}
.section {
  padding: 120px 10%;
  h1 {
    color: white;
    letter-spacing: 1px;
    line-height: 50px;
    margin: 0 auto 75px;
  }
}

.features {
  display: flex;
  flex-direction: row;
  padding: 120px 10%;
  h1 {
    font-size: 35px;
    color: #282B31;
    letter-spacing: 1px;
    line-height: 50px;
    width: 14%;
    text-align: left;
  }
}

.items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10%;
}

.history {
  padding: 120px 10%;
  h1 {
    margin: 0 auto 54px;
  }
  .diagram {
    display: inline-block;
    margin: 20px auto;
  }
}
.row {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  &.align-end {
    margin-left: 300px;
  }
}

.ico, .members, .faq, .media, .blank, .community {
  h1 {
    color: #282B31;
  }
}
.ico {
  padding: 120px 40px;
  .row {
    flex-wrap: wrap;
    align-items: baseline;
  }
  .card {
    position: relative;
    text-align: left;
    color: white;
    width: 50%;
    max-width: 520px;
    // height: 150px;
    // background-image: url('./assets/token-card-bg.svg');
    // background-position: -10px 0;
    padding: 6% 1% 6% 5%;
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .title {
      font-size: 20px;
      letter-spacing: 0;
      line-height: 25px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    li {
      margin: 0;
      display: block;
      font-size: 14px;
      color: rgba(255,255,255,0.80);
      letter-spacing: 0;
      line-height: 25px;
    }
    .title, .content {
      position: relative;
      z-index: 8;
    }
  }
  .toolbar {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  }
}

.members {
  margin: auto;
  .group {
    display: block;
    max-width: 1350px;
    margin: 0 auto 50px;
    text-align: center;
    .avatar {
      display: inline-block;   
      vertical-align: top;   
      text-align: center;
    }
    & + .group {
      text-align: center;
    }
  }
}

.faq {
  .comment {
    font-size: 14px;
    color: #999EA8;
    letter-spacing: 0;
    line-height: 20px;
    margin: 50px auto 0;

    span {
      margin: 0 5px;
    }
    a {
      color: #469AF4;
    }
  }
}

.blank {
  display: inline-block;
  text-align: center;

  .brick {
    display: inline-block;
    width: 120px;
    height: 40px;
    background: #D8D8D8;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.community {
  .content {
    text-align: center;
    .item {
      display: inline-block;
    }
  }
}

.subscribe {
  .toolbar {
    display: flex;
    flex-direction: row;
    justify-content: center;

    input {
      width: 30%;
      max-width: 500px;
      background: #FFFFFF;
      border-radius: 6px;
      font-size: 17px;
      color: #B9BDC3;
      letter-spacing: 0;
      border: 1px solid #E7E8EA;
      padding: 7px 15px;
    }
  }
  .comment {
    font-size: 14px;
    color: rgba(255,255,255,0.80);
    letter-spacing: 0;
    margin-top: 30px;
    
    a {
      font-size: 11px;
      color: #FFFFFF;
      letter-spacing: 0;
      margin-left: 10px;
    }
  }
}

.footer {
  padding: 20px 10% 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .copyright {
    font-size: 14px;
    color: #999EA8;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: 20px;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

    .button {
      background: #FFFFFF;
      border: 1px solid #E7E8EA;
      margin: 0;
      border-radius: 0 !important;
      margin-left: -1px;
      
      &:first-child {
        border-radius: 6px 0 0 6px !important;
      }
      &:last-child {
        border-radius: 0 6px 6px 0 !important;
      }
    }
  }
}

/* Placeholder color */
::-webkit-input-placeholder {
  color: #B9BDC3;
}
:-moz-placeholder {
  color: #B9BDC3;
}
::-moz-placeholder {
  color: #B9BDC3;
}
:-ms-input-placeholder {
  color: #B9BDC3;
}

/* media queries */
@media screen and (max-width: 1000px) {
  .history {
    padding: 120px 5%;
    .diagram {
      transform: scale(0.9)
    }
  }
}
@media screen and (max-width: 900px) {
  .history {
    padding: 120px 2%;
    .diagram {
      margin: auto -5%;
      transform: scale(0.8)
    }
  }
}
@media screen and (max-width: 800px) {
  .history {
    padding: 120px 0;
    .diagram {
      margin: auto -8%;
      transform: scale(0.6)
    }
  }
}
@media screen and (max-width: 600px) {
  .history {
    padding: 120px 0;
    .diagram {
      margin: auto -10%;
      transform: scale(0.5)
    }
  }
}

</style>
