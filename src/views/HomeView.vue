<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <div class="wrapper">

    <!----------- 主視覺 --------------------------------->

    <header id="top">
      <h1>HELLO, I'm SANDRA</h1>
      <!-- <h3 class="text-center">I GRADUATED FORM INDUSTRAL DESIGN</h3> -->
    </header>

    <!-----------主選單--------------------------------->

    <div class="sel">
      <div class="container">
        <ul class="row g-2">
          <li class="btn1 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('about')" style="text-shadow: 1px 1px 0.5px rgba(96, 73, 0, 0.2);">
              ABOUT
            </button>
          </li>
          <li class="btn2 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('collection')" style="text-shadow: 1px 1px 0.5px rgba(96, 73, 0, 0.2);">
              COLLECTION
            </button>
          </li>
          <li class="btn3 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('experience')" style="text-shadow: 1px 1px 0.5px rgba(96, 73, 0, 0.2);">
              EXPERIENCE
            </button>
          </li>
          <li class="btn4 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('skill')" style="text-shadow: 1px 1px 0.5px rgba(96, 73, 0, 0.2);">
              SKILL
            </button>
          </li>
          <li class="btn5 col-12 col-md-4 col-lg-2 text-center" style="margin-top: 0;">
            <button @click="scrollToSection('social')" style="text-shadow: 1px 1px 0.5px rgba(96, 73, 0, 0.2);">
              CONTACT ME
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-----------關於ABOUT------------------------------>

    <div class="about mb-5" id="about">
      <div class="main container">
        <h2>ABOUT</h2>
        <div class="row g-5 mb-5">
          <img class="col-10 col-md-5 col-lg-4 m-auto h-100" src="@/assets/images/S_2539626.jpg" alt="selfie photo">
          <div class="col-11 col-md-7 col-lg-8 m-auto p-5">
            <p style="font-weight: 700;">&ensp;# 關於我</p>
            <p>我是張庭姍，擁有設計背景，熟悉各類設計軟體，並能將設計思維融入前端開發。同時，我對程式開發充滿熱情，擅長將設計與技術結合，熟悉 HTML、CSS、Bootstrap透過程式解決問題。在工作中，我具備清晰的邏輯思維與強大的學習能力，能夠有效與使用者溝通，理解需求並開發相應的解決方案。此外，我持續自主學習前端開發與網頁爬蟲技術，並積極關注最新的技術趨勢，提升自身能力。</p>
            <br><br>
            <p style="font-weight: 700;">&ensp;# 未來規劃</p>
            <p>回顧過去的工作經驗，我累積了使用者需求確認及跨部門溝通的能力，也了解專案開發流程。未來，我期許自己持續精進 Vue.js 前端開發技能，並深化應用，同時提升策略思考與商業分析能力。此外，我也將持續學習後端資料處理技術，以提升團隊合作的效率，幫助公司解決問題並創造價值。</p>
          </div>
        </div>
      </div>
    </div>

    <!-------------作品們COLLECTION---------------------->
    <div class="collection pb-5" id="collection">
      <div class="main container">
        <h2>COLLECTION</h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5 mb-5">
          <div class="col">
            <button @click="changeToPattern" class="card w-100 d-block">
              <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
              <i class="fa-solid fa-chess-board text-center m-4 align-item-center"
                style="font-size:65px; color: #ff7300;"></i>
              <h3 class="mb-3">PATTERN</h3>
            </button>
          </div>
          <div class="col">
            <button @click="changeToUiux" class="card w-100 d-block">
              <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
              <i class="fa-solid fa-mobile-screen text-center m-4 align-item-center"
                style="font-size:65px; color: #ff7300;"></i>
              <h3 class="mb-3">UIUX</h3>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-----------經歷EXPERINCE------------------------->
    <div class="experience mb-5" id="experience">
      <div class="main container">
        <h2>EXPERIENCE</h2>
        <div class="exbottom mx-auto mb-4">
        <!-- 這邊移除text-center -->
          <Experience />
          <!-- <ExperienceTimeLine /> -->
          <!-- <div>
            <h4>工程師 // 裕融企業股份有限公司 // 台北市大安區 // 2022. 04 - 2024. 07</h4>
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
          </div> -->

          <!-- <div class="mt-5">
            <h4>約聘人員 // 新北市文化局文設科-板橋435藝文特區 // 新北市板橋區 // 2021. 01 - 2021. 12</h4>
            <p class="remark">
              #adobe illustrator #adobe photoshop #word #google excel #excel
            </p>
            <p>
              > 藝文特區展覽的網頁做圖宣傳，使網站順利上架。<br>
              > 與每個檔期的展覽者溝通官網圖片的調整，並將圖片及展覽資訊製成網站上架的規格。<br>
              > 疫情期間滾動調整展覽開放聯繫事宜，協助不同展覽者將時段延後討論，使展覽者順利展出。
            </p>
          </div> -->

          <!-- <div class="my-5">
            <h4>設計實習生 // 台塑總管理處創意設計中心 // 台北市松山區 // 2018. 09 - 2019. 09</h4>
            <p class="remark">
              #adobe illustrator #adobe photoshop #adobe indesign
            </p>
            <p>
              > 依照年度流行色彩設計不同四方連續花紋，印於膠皮上協助製作樣冊，可供廠商客戶們觀賞並下單。<br>
              > 布料、塑膠皮料協助切割及列印，使樣冊能與廠商約定日期前順利進行。
            </p>
          </div> -->
        </div>
      </div>
    </div>

    <!------------我會的技能SKILL------------------------>
    <div class="skill pb-5" id="skill">
      <div class="main container">
        <h2>SKILL</h2>
        <div class="sk-list">
          <ul class="row g-3 justify-content-around">
            <li class="col-12 col-md-4 col-lg-4" v-for="(skill, index) in skills" :key="index">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <!-- 背景圓環 -->
                <circle cx="50" cy="50" r="40" stroke="#fdefc0" stroke-width="18" fill="none"></circle>
                <!-- 進度圓環 -->
                <circle cx="50" cy="50" r="40" stroke="#ff7300" stroke-width="18.2" fill="none" stroke-dasharray="251.2" :stroke-dashoffset="251.2 - (251.2 * skill.percent / 100)" stroke-linecap="round" transform="rotate(-90 50 50)" ></circle>
              </svg>
              <!-- 技能名稱 -->
              <h3 class="skill-name mt-4" style="color: #ff8520;">{{ skill.name }}&ensp;||&ensp;{{ skill.percent }}% </h3>
              <!-- {{ skill.name }} -->
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!--------------社交軟體SOCIAL---------------------->

    <div class="social mb-5" id="social">
      <div class="main container">
        <h2>CONTACT ME</h2>
        <ul class="so-bottom g-5 mb-5 row justify-content-evenly">
          <li class="col-12 col-md-4 text-center my-5 d-flex justify-content-center align-items-center" style="background-color: #fdefc0;height: 150px;width: 150px;text-align: center;padding: auto 0;border-radius: 50%;justify-content: center;">
            <a href="https://github.com/Sandra333333333" target="_blank">
              <i class="fa-brands fa-github" style="color: #ff7300;"></i>
            </a>
          </li>
          <li class="col-12 col-md-4 text-center my-5 d-flex justify-content-center align-items-center" style="background-color: #fdefc0;height: 150px;width: 150px;text-align: center;padding: auto 0;border-radius: 50%;justify-content: center;">
            <a href="https://line.me/ti/p/nODVJt2U-u" target="_blank">
              <i class="fa-brands fa-line" style="color: #ff7300;"></i>
            </a>
          </li>
          <li class="col-12 col-md-4 text-center my-5 d-flex justify-content-center align-items-center" style="background-color: #fdefc0;height: 150px;width: 150px;text-align: center;padding: auto 0;border-radius: 50%;">
            <a href="mailto:sandra05213@gmail.com">
              <i class="fa-regular fa-envelope" style="color: #ff7300;"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!--------------TOP------------------------------->

    <div class="mb-5 text-center">
      <div class="container">
        <button class="toTop" @click="scrollToSection('top')">TOP</button>
      </div>

    </div>

    <!--------------COPYRIGHT--------------------------->
    <footer>
      <p>COPYRIGHT © SANDRA CHANG 2025</p>
    </footer>
  </div>
</template>

<script>
import Experience from '@/components/Experience.vue'

export default {
  data () {
    return {
      skills: [
        { name: 'ILLUSTRATOR', percent: 90 },
        { name: 'PHOTOSHOP', percent: 85 },
        { name: 'ADOBE XD', percent: 90 },
        { name: 'VUE', percent: 73 },
        { name: 'BOOTSTRAP5', percent: 88 },
        { name: 'JAVASCRIPT', percent: 70 }
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
    },
    changeToFixing () {
      this.$router.push('/fixing') // 導航到 fixing 頁面
    }
  },
  components: {
    Experience
  }
}
// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
