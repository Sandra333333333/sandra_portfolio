<template>
    <div class="wrapper fixed-bottom fixed-top" style="background-color: #333;">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
            <div class="carousel-inner" style="height: 90%;background-size: contain;">
                <div class="carousel-item my-5 active" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_01.png" class="d-block mx-auto w-75" alt="CarLoanPad01">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_02.png" class="d-block mx-auto w-75" alt="CarLoanPad02">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_03.png" class="d-block mx-auto w-75" alt="CarLoanPad03">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_04.png" class="d-block mx-auto w-75" alt="CarLoanPad04">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_05.png" class="d-block mx-auto w-75" alt="CarLoanPad05">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_06.png" class="d-block mx-auto w-75" alt="CarLoanPad06">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_07.png" class="d-block mx-auto w-75" alt="CarLoanPad07">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_08.png" class="d-block mx-auto w-75" alt="CarLoanPad08">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_09.png" class="d-block mx-auto w-75" alt="CarLoanPad09">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_10.png" class="d-block mx-auto w-75" alt="CarLoanPad10">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_11.png" class="d-block mx-auto w-75" alt="CarLoanPad11">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_12.png" class="d-block mx-auto w-75" alt="CarLoanPad12">
                </div>
                <div class="carousel-item my-5" data-bs-interval="3000">
                    <img src="@/assets/images/uiux/CarLoanPad/carloanpad_13.png" class="d-block mx-auto w-75" alt="CarLoanPad13">
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
            <button @click="changeToUiuxNew" class="btn-back d-block p-2">
                <h3> - Back - </h3>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    changeToUiuxNew () {
      this.$router.push('/uiuxnew') // 導航到 Uiux 頁面
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
