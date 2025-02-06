<template>
    <div class="wrapper fixed-bottom fixed-top" style="background-color: transparent;">
        <div class="d-block w-75 mx-auto">
            <img src="@/assets/images/fixing_page.svg">
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
    }
  }
}
</script>
<style scoped>
.btn-back {
border: 2px solid var(--mainColor);
color:  var(--mainColor);
}
</style>
