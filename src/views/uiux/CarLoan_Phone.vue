<template>
    <div class="wrapper fixed-bottom fixed-top" style="background-color: #333;">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
            <div class="carousel-inner" style="height: 90%;background-size: contain;">
                <div class="carousel-item my-5 active" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_01.png" class="d-block mx-auto w-75" alt="CarLoanPhone01">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_02.png" class="d-block mx-auto w-75" alt="CarLoanPhone02">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_03.png" class="d-block mx-auto w-75" alt="CarLoanPhone03">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_04.png" class="d-block mx-auto w-75" alt="CarLoanPhone04">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_05.png" class="d-block mx-auto w-75" alt="CarLoanPhone05">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_06.png" class="d-block mx-auto w-75" alt="CarLoanPhone06">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_07.png" class="d-block mx-auto w-75" alt="CarLoanPhone07">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_08.png" class="d-block mx-auto w-75" alt="CarLoanPhone08">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_09.png" class="d-block mx-auto w-75" alt="CarLoanPhone09">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_10.png" class="d-block mx-auto w-75" alt="CarLoanPhone10">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_11.png" class="d-block mx-auto w-75" alt="CarLoanPhone11">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_12.png" class="d-block mx-auto w-75" alt="CarLoanPhone12">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_13.png" class="d-block mx-auto w-75" alt="CarLoanPhone13">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPhone/carloanphone_14.png" class="d-block mx-auto w-75" alt="CarLoanPhone14">
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
            <button @click="changeToUiux" class="btn-back d-block p-2">
                <h3> - Back - </h3>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    changeToUiux () {
      this.$router.push('/uiux') // 導航到 Uiux 頁面
    }
  }
}
</script>
<style scoped>
.carousel-item img {
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  background-color: transparent;
}
</style>
