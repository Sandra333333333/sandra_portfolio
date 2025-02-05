<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <div class="wrapper">

    <!----------- 主視覺 --------------------------------->

    <header id="top">
      <h1>HELLO, I'm SANDRA</h1>
      <h3 class="text-center">I GRADUATED FORM INDUSTRAL DESIGN</h3>
    </header>

    <!-----------主選單--------------------------------->

    <div class="sel">
      <div class="container">
        <ul class="row g-2">
          <li class="btn1 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('about')">
              ABOUT
            </button>
          </li>
          <li class="btn2 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('collection')">
              COLLECTION
            </button>
          </li>
          <li class="btn3 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('experience')">
              EXPERIENCE
            </button>
          </li>
          <li class="btn4 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('skill')">
              SKILL
            </button>
          </li>
          <li class="btn5 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('social')">
              SOCIAL
            </button>
          </li>
          <!-- <li class="btn5 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
        <button v-for="(section, index) in sections" :key="index" :class="{ active: currentSection === index }" @click="scrollToSection(index)">
          SOCIAL
        </button>
      </li> -->
        </ul>
      </div>
    </div>
    <!-----------關於ABOUT------------------------------>

    <div class="about mb-5" id="about">
      <div class="main container">
        <!-- 移出class="main" -->
        <h2>ABOUT</h2>
        <div class="row g-5 mb-5">
          <!-- aboutbottom -->
          <img class="col-12 col-sm-4 mx-auto" src="@/assets/images/S_2539626.jpg" alt="selfie photo">

          <p class="col-12 col-sm-8">
            您好！我叫做張庭姍，目前於裕融企業股份有限公司擔任工程師一職，邏輯清晰，擅長與使用者討論並確認需求後開發，由於本身是設計背景出身因此具備使用設計軟體製作所需圖檔的技能。也擅長自主學習於工作中所需使用到語言及技術知識。希望能有機會獲得貴公司一場面試機會，感謝您!
            <br>
            <a href="https://id.mcut.edu.tw/" target="_blank">
              ＃明志科技大學 工業設計系 畢業
            </a>
            <br>
            <a href="http://home.slhs.tp.edu.tw/adv/index.html" target="_blank">
              ＃士林高商 廣告設計科 畢業
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-------------作品們COLLECTION---------------------->
    <div class="collection pb-5" id="collection">
      <div class="main container">
        <h2>COLLECTION</h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5 mb-5">
          <div class="col">
            <button @click="changeToPattern" class="card w-100 d-block"
              style="background-color:rgba(255, 255, 255, .2);border-radius:10px;height:180px;">
              <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
              <i class="fa-solid fa-chess-board text-center m-4 align-item-center"
                style="font-size:65px; color:#fff;"></i>
              <h3 class="mb-3">PATTERN</h3>
            </button>
          </div>
          <div class="col">
            <button @click="changeToUiux" class="card w-100 d-block"
              style="background-color:rgba(255, 255, 255, .2);border-radius:10px;height:180px;">
              <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
              <i class="fa-solid fa-mobile-screen text-center m-4 align-item-center"
                style="font-size:65px; color:#fff;"></i>
              <h3 class="mb-3">UIUX</h3>
            </button>
          </div>
          <!-- <div class="col">
          <a class="card" style="background-color:rgba(255, 255, 255, .2);border-radius:10px;">
            <i class="fa-solid fa-pager text-center m-5 align-item-center" style="font-size:65px; color:#fff;"></i>
            <h3 class="mb-3">FRONT-END</h3>
          </a>
        </div>
        <div class="col">
          <a class="card" style="background-color:rgba(255, 255, 255, .2);border-radius:10px;">
            <i class="text-center m-5 align-item-center fa-regular fa-object-group" style="font-size:65px; color:#fff;"></i>
            <h3 class="mb-3">OTHER</h3>
          </a>
        </div> -->
        </div>

        <!-- <div class="d-grid gap-2 d-md-block"><button
            style="background-color:rgba(255, 255, 255, .2);border-radius:10px;height:180px;"
            class="row-cols-2 row-cols-md-2 row-cols-lg-2 g-5 mb-5 ">
            <i class="fa-solid fa-chess-board text-center m-5 align-item-center" style="font-size:65px;color:#fff;"></i>
            <h3 class="mb-3">PATTERN</h3>
          </button><button class="row-cols-2 row-cols-md-2 row-cols-lg-2 g-5 mb-5 "
            style="background-color:rgba(255, 255, 255, .2);border-radius:10px;height:180px;">
            <i class="fa-solid fa-mobile-screen text-center m-5 align-item-center"
              style="font-size:65px;color:#fff;"></i>
            <h3 class="mb-3">UIUX</h3>
          </button>
        </div> -->

        <!-- <ul>
        <a href="javascript:;">
          <li>
            <img src="img/pattern1.jpg" alt="">
            <h3>PATTERN</h3>
          </li>
        </a>
        <a href="javascript:;">
          <li>
            <img src="img/P1030646.png" alt="">
            <h3>SKETCH</h3>
          </li>
        </a>
        <a href="javascript:;">
          <li>
            <img src="img/P1030665.png" alt="">
            <h3>COLOURED</h3>
          </li>
        </a>
        <a href="javascript:;">
          <li>
            <img src="img/新秀_1.png" alt="">
            <h3>PROJECT</h3>
          </li>
        </a>
      </ul> -->
      </div>
    </div>

    <!-----------經歷EXPERINCE------------------------->
    <div class="experience mb-5" id="experience">
      <div class="main container">
        <!-- 移出class="main" -->
        <h2>EXPERIENCE</h2>
        <div class="exbottom text-center">

          <div>

            <h4>
              工程師 // 裕融企業股份有限公司 // 台北市大安區 // 2022. 04 - 在職中
            </h4>
            <p class="remark">
              #adobe illustrator #adobe photoshop #adobe XD #vue #bootstrap #css #html
            </p>
            <p>
              > 台灣公司官網維運及優化，調整並新增各年度內容更新。<br>
              > 菲律賓分公司官網維運與優化，在與User討論需求後製作，最新一次上架的是醫療設備貸款的介紹頁面。<br>
              > 使用Adobe XD繪製prototype並與User討論畫面，確認需求後執行有效減少後續修改時間。<br>
              > 公司內部簽核系統續約用印與乙方廠商溝通報價等事宜。<br>
              > 使用Illustrator繪製網頁所需的icon，增加介面的表達及豐富度。
            </p>
          </div>

          <div class="mt-5">
            <h4>
              約聘人員 // 新北市文化局文設科-板橋435藝文特區 // 新北市板橋區 // 2021. 01 - 2021. 12
            </h4>
            <p class="remark">
              #adobe illustrator #adobe photoshop #word #google excel #excel
            </p>
            <p>
              > 藝文特區展覽的網頁做圖宣傳，使網站順利上架。<br>
              > 與每個檔期的展覽者溝通官網圖片的調整，並將圖片及展覽資訊製成網站上架的規格。<br>
              > 疫情期間滾動調整展覽開放聯繫事宜，協助不同展覽者將時段延後討論，使展覽者順利展出。
            </p>
          </div>

          <div class="my-5">
            <h4>
              設計實習生 // 台塑總管理處創意設計中心 // 台北市松山區 // 2018. 09 - 2019. 09
            </h4>
            <p class="remark">
              #adobe illustrator #adobe photoshop #adobe indesign
            </p>
            <p>
              > 依照年度流行色彩設計不同四方連續花紋，印於膠皮上協助製作樣冊，可供廠商客戶們觀賞並下單。<br>
              > 布料、塑膠皮料協助切割及列印，使樣冊能與廠商約定日期前順利進行。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!------------我會的技能SKILL------------------------>
    <div class="skill pb-5" id="skill">
      <div class="main container">
        <!-- 移出class="main" -->
        <h2>SKILL</h2>
        <div class="sk-list">
            <ul class="row g-3 justify-content-around">
              <li class="col-12 col-md-4" v-for="(skill, index) in skills" :key="index">
                {{ skill.name }}
              </li>
            </ul>
        </div>

      </div>
    </div>

    <!--------------社交軟體SOCIAL---------------------->

    <div class="social mb-5" id="social">
      <div class="main container">
        <!-- 移出class="main" -->
        <h2>SOCIAL</h2>
        <ul class="so-bottom g-5 mb-5 row justify-content-around">

          <li class="col-12 col-sm-3 text-center">
            <a href="https://www.facebook.com/sandra.purple.73/" target="_blank">
              <i class="fa-brands fa-square-facebook" style="color: #999b85;"></i>
            </a>
          </li>

          <li class="col-12 col-sm-3 text-center">
            <a href="https://www.instagram.com/sandra51333/" target="_blank">
              <i class="fa-brands fa-instagram" style="color: #999b85;"></i>
              <!-- <img src="img/social_2.png" alt=""> -->
            </a>
          </li>

          <li class="col-12 col-sm-3 text-center">
            <a href="mailto:sandra05213@gmail.com">
              <i class="fa-regular fa-envelope" style="color: #999b85;"></i>
              <!-- <img src="img/social_3.png" alt=""> -->
            </a>
          </li>

          <li class="col-12 col-sm-3 text-center">
            <a href="https://line.me/ti/p/nODVJt2U-u" target="_blank">
              <i class="fa-brands fa-line" style="color: #999b85;"></i>
              <!-- <img src="img/social_4.png" alt=""> -->
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!--------------TOP------------------------------->

    <div class="top mb-5">
      <div class="container">
        <!-- 移出class="main" -->
        <button class="toTop" @click="scrollToSection('top')">TOP</button>
      </div>

    </div>
    <!-- <ScrollPage /> -->

    <!--------------COPYRIGHT--------------------------->
    <footer>
      <p>COPYRIGHT © SANDRA CHANG 2025</p>
    </footer>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }

// TEST SCROLL
// import ScrollPage from '@/components/ScrollPage.vue'

// export default {
//   components: {
//     ScrollPage
//   }
// }
// TEST SCROLL(END)
export default {
  data () {
    return {
      skills: [
        { name: 'ILLUSTRATOR' },
        { name: 'PHOTOSHOP' },
        { name: 'ADOBE XD' },
        { name: 'VUE' },
        { name: 'BOOTSTRAP' },
        { name: 'JAVASCRIPT' }
      ]
    }
  },
  methods: {
    scrollToSection (sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    changeToPattern () {
      this.$router.push('/pattern') // 導航到 pattern 頁面
    },
    changeToUiux () {
      this.$router.push('/uiux') // 導航到 uiux 頁面
    }
  }
}
</script>
