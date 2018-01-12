<template lang="pug">
  #app
    .container
      background(flat-color="transparent", bg-image="./src/assets/bg.svg").home
        headbar
        .logo
          img(src="./assets/logo.png")
        h1 {{ msg }}
        h1 Bridge of Blockchains
        .buttons
          p-button(text="Whitepaper", gradient="#FF8E64 0%,#FFE641 100%", text-color="white", shadow="0 6px 12px 0 rgba(40,43,49,0.16)")
          p-button(text="join ICO", shadow="0 6px 12px 0 rgba(40,43,49,0.16)")
      //  h1.what What is Pallet?
      //background(flat-color="white", height="245")
      //.laptop
      //  .group
      //    img(src="./assets/laptop.svg")
      //    img.play(src="./assets/play-button.svg")
      background(flat-color="#F8F9FA").section.features
        h1 Features<br />with<br />Pallet
        .items
          feature-item(v-for="item in features", :key="item.id", :title="item.name", :desc="item.description", :gradient="item.gradient", :icon="item.icon")
      background(flat-color="transparent", bg-image="./src/assets/bg.svg").section.history
        h1 Development History
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
      background(flat-color="#F8F9FA").section.ico
        h1 Token Distribution
        .row
          .card
            img(src="./assets/token-card-bg.svg")
            .title Pali 代幣分配
            .content
              li 50%公開售賣
              li 40%團隊持有
              li 10%私募
          .card
            img(src="./assets/token-card-bg.svg")
            .title ICO 資金用途
            .content
              li 40%產品開發
              li 20%平台運營
              li 20%市場推廣
              li 10%審計與安全監管
              li 10%法務
        .toolbar
          p-button(text="join ICO", gradient="#FF8E64 0%,#FFE641 100%", text-color="white", :width="230", :height="50", shadow="0 6px 12px 0 rgba(40,43,49,0.16)")
      background(flat-color="#FFFFFF").section.members
        h1 Members
        .group
          avatar(v-for="leader in leaders", :key="leader.id", :title="leader.title", :name="leader.name", :photo="leader.photo", :descript="leader.descript", :with-card="leader.isLeader")
        .group
          avatar(v-for="member in members", :key="member.id", :title="member.title", :name="member.name", :photo="member.photo", :with-card="member.isLeader")
      background(flat-color="#F8F9FA").section.faq
        h1 Questions and Answers
        accordion(v-for="question in questions", :key="question.id", :title="question.title", :content="question.content")
        .comment
          span Find
          a(href="javascript:") Here
          span if you still have any questions
      background(flat-color="#F8F9FA").section.media
        h1 Media
        grid(:data="medias")
      background(flat-color="#FFF").section.blank
        .brick(v-for="b in bricks", :key="b")
      background(flat-color="#F8F9FA").section.community
        h1 Community
        .content
          .item(v-for="community in communities", :key="community.icon[1]") 
            p-button(shadow="0 1px 3px 0 rgba(32,33,39,0.12)" :width="50" :height="48" :border-radius="10" :icon="community.icon", text-color="#B9BDC3")
      background(flat-color="transparent", bg-image="./src/assets/bg.svg").section.subscribe
        h1 Subscribe for Update
        .toolbar
          input(placeholder="Your E-Mail")
          p-button(text="Subscribe", gradient="#FF8E64 0%,#FFE641 100%", text-color="white", shadow="0 6px 12px 0 rgba(40,43,49,0.16)")
        .comment
          span By clicking “Subscribe” button you agree to our
          a(href="javascript:") Terms of Use
      background(flat-color="white").footer
        h3 Pallet
        .copyright Created with by <b>Cepave</b><br />©Copyright 2017 AppStarter - All Rights Reserved
        .links
          .btn-group
            p-button(v-for="link in links", :width="40" :height="38" :icon="link.icon", text-color="#B9BDC3")
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Pallet',
      features: [
        { id: 1, name: 'Token-Coin seperation', description: '証是通証，也就是token，幣則是coin。有別於傳統區塊鏈比特幣及以太坊，其屬於簡單簡單粗暴全網算力，像是近期養貓風潮導致了以太坊網絡塞車', gradient: '#7956EC 0%,#2FB9F8 100%', icon: 'adjust' },
        { id: 2, name: 'Multi-chain interaction', description: 'PALLET 是一個水平整合的平台，提供區塊鏈與區塊鏈之間的跨鏈通信開發套件', gradient: '#009FC5 0%,#3CECB0 100%', icon: 'tty' },
        { id: 3, name: 'Security', description: '開發者可選擇熟悉的語言撰寫智能合約；合約內容可限定僅有參與方知曉', gradient: '#FF8E64 0%,#FFE641 100%', icon: 'lock' },
        { id: 4, name: 'Smart contract', description: 'PALLET 是一個次世代的操作系統，提供更好效能、更多功能、更加安全的智能合約使用體驗', gradient: '#F23673 0%,#FFC066 100%', icon: 'copyright' },
        { id: 5, name: 'Multi-cryptocurrency exchange', description: 'PALLET 在多鏈串接的基礎上實現多種區塊鏈証幣之間交易', gradient: '#AD2AB9 0%,#FF618C 100%', icon: 'exchange-alt' },
        //{ id: 6, name: 'Feature 6', description: 'Description6 description6 description6 description6 description6', gradient: '#5134B2 0%,#B175EB 100%', icon: 'sliders-h' },
      ],
      leaders: [
        { id: 1, title: 'CEO', name: 'Josh Sheng Chen', photo: './src/assets/members/CEO.png', isLeader: true, descript: 'Mr. Josh Sheng Chen is the Co-founder and Executive Chairman of 21Vianet Group, Inc.(VNET). In 2016, Mr. Chen established WiFire Group providing an innovative and proprietary network solution using the blockchain protocol to provide a unique digital ID system to ultra-connected smart cities. Combining data centers with block chain will usher in a new generation of strategically relevant and innovation-driven data centers.' },
        { id: 2, title: 'CTO', name: 'Steve Shih-Wei Liao', photo: './src/assets/members/CTO.png', isLeader: true, descript: "22 years in Silicon Valley, Stanford, Google and Intel. Participated in Intel's super-thread technology research and development and parallel computing and compiler optimization development. Once used machine learning technology to help Google improve data center utilization, but also the original author of Android Compiler, Virtual Machine, RenderScript Engine, but also because of the contribution to Android and Google's highest founder of the award. Return to Stanford Research Blockchain and FinTech in 2013, Blockchain and FinTech at Taiwan University in 2015 to nurture Taiwanese blockchain talent." },
        { id: 3, title: 'Lead Engineer', name: 'Mark Su', photo: './src/assets/members/TechLead.png', isLeader: true, descript: 'Brief:consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacu' },
      ],
      members: [
        { id: 1, title: 'Developer', name: 'Anderson Chen', photo: './src/assets/anonymous.jpg' },
        { id: 2, title: 'Developer', name: 'Hank Yang', photo: './src/assets/anonymous.jpg' },
        { id: 3, title: 'Developer', name: 'Jack Lee', photo: './src/assets/anonymous.jpg' },
        { id: 4, title: 'Developer', name: 'James Hsiao', photo: './src/assets/anonymous.jpg' },
        { id: 5, title: 'Developer', name: 'Jiyi Wu', photo: './src/assets/anonymous.jpg' },
        { id: 6, title: 'Developer', name: 'Josh Chu', photo: './src/assets/anonymous.jpg' },
        { id: 7, title: 'Developer', name: 'Masato Wang', photo: './src/assets/anonymous.jpg' },
        { id: 8, title: 'Developer', name: 'Steven Yang', photo: './src/assets/anonymous.jpg' },
        { id: 9, title: 'Developer', name: 'Totoro Chen', photo: './src/assets/members/PM.jpg' },
        { id: 10, title: 'DevOps', name: 'BM Wu', photo: './src/assets/anonymous.jpg' },
      ],
      questions: [
        { id: 1, title: 'What is Pallet?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 2, title: 'Who is building Palliums?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 3, title: 'Is Palliums open source?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 4, title: 'What features do Palliums have?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 5, title: 'How does the Palliums Token distribution work?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 6, title: 'How can I participate in the Palliums Token distribution?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 7, title: 'What is token sale time schedule?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 8, title: 'What BTC compatible wallets are recommended?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 9, title: 'What are advantages of Palliums?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 10, title: 'Are Palli transferable? Where are Palli traded?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
        { id: 11, title: 'What is roadmap?', content: 'Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains. Pallet is bridge of blockchains.' },
      ],
      medias: [
        { id: 1, type: 'img', title: 'Title', content: './src/assets/bg-blue.svg' },
        { id: 2, title: 'Title', content: 'Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is' },
        { id: 3, type: 'img', title: 'Title', content: './src/assets/bg-orange.svg' },
        { id: 4, title: 'Title', content: 'Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is' },
        { id: 5, title: 'Title', content: 'Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is' },
        { id: 6, type: 'img', title: 'Title', content: './src/assets/bg-green.svg' },
        { id: 7, title: 'Title', content: 'Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is bridge of blockchains.Palliums is' },
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
  mounted() {
    
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
      text-align: left;
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
</style>
