<template>
    <div class="wrapper fixed-bottom fixed-top" style="background-color: #333;">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active my-5" data-bs-interval="3000">
                    <img src="@/assets/images/pattern/pattern_photo_01.svg" class="d-block mx-auto w-75" alt="Pattern1">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/pattern/pattern_photo_02.svg" class="d-block mx-auto w-75" alt="Pattern2">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/pattern/pattern_photo_03.svg" class="d-block mx-auto w-75" alt="Pattern3">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/pattern/pattern_photo_04.svg" class="d-block mx-auto w-75" alt="Pattern3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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
      this.$router.push('/') // 導航到 Home 頁面
    }
  }
}
</script>
