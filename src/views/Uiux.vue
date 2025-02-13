
<template class="uiux">
  <div class="wrapper fixed-bottom fixed-top" style="background-color: #333;">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-5 w-75 m-auto">
          <div class="col">
              <button @click="changeToCLPad" class="card w-100 d-block">
                  <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
                  <!-- <i class="fa-solid fa-chess-board text-center m-4 align-item-center"
                      style="font-size:65px; color:#fff;"></i> -->
                  <p># 業務用平板</p>
                  <h3>車貸線上申辦系統</h3>
              </button>
          </div>
          <div class="col">
              <button @click="changeToCLPhone" class="card w-100 d-block">
                  <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
                  <!-- <i class="fa-solid fa-mobile-screen text-center m-4 align-item-center"
                      style="font-size:65px; color:#fff;"></i> -->
                  <p># 客戶用手機版</p>
                  <h3>車貸線上申辦系統</h3>
              </button>
          </div>
          <div class="col">
              <button @click="changeToMDE" class="card w-100 d-block">
                  <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
                  <!-- <i class="fa-solid fa-mobile-screen text-center m-4 align-item-center"
                      style="font-size:65px; color:#fff;"></i> -->
                  <p># 網頁擴充</p>
                  <h3>醫療器材申貸介紹</h3>
              </button>
          </div>
          <div class="col">
              <button @click="changeToMCI" class="card w-100 d-block">
                  <!-- <img class="m-3" src="img/pattern1.jpg" alt=""> -->
                  <!-- <i class="fa-solid fa-mobile-screen text-center m-4 align-item-center"
                      style="font-size:65px; color:#fff;"></i> -->
                  <p># 手機介面</p>
                  <h3>行動打卡上下班</h3>
              </button>
          </div>
      </div>
      <div class="my-4 text-center">
          <button @click="changeToHome" class="btn-back d-block p-2">
              <h3> - Back - </h3>
          </button>
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeToHome () {
      this.$router.push('/') // 導航回 Home 頁面
    },
    changeToFixing () {
      this.$router.push('/fixing') // 導航到 Fixing 頁面
    },
    changeToCLPad () {
      this.$router.push('/uiux/carloan_pad') // 導航到 Carloan_pad 頁面
    },
    changeToCLPhone () {
      this.$router.push('/uiux/carloan_phone') // 導航到 Carloan_phone 頁面
    },
    changeToMCI () {
      this.$router.push('/uiux/mobile_clock_in') // 導航到 mobile_clock_in 頁面
    },
    changeToMDE () {
      this.$router.push('/uiux/medical_equipment') // 導航到 mobile_clock_in 頁面
    }
  }
}
</script>

<style scoped>
p {
  color: white;
}
.card {
background-color:rgba(255, 255, 255, .2);
border-radius:18px;
height:200px;
transition: all 0.5s;
border-radius:18px;
opacity: 75%;
color: white;
}
.card:hover {
opacity: 100%;
text-shadow:  3px 3px 3px rgba(0, 0, 0, .5);
}
</style>
