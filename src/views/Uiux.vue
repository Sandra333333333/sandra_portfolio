<template>
    <div class="wrapper fixed-bottom fixed-top" style="background-color: #333;">
        <div class="my-5 text-center d-block p-2">
            <h3> - 由於部分因素無法放置於網路，UIUX作品將於面試當日另行提供 - </h3>
        </div>
        <div class="py-5 text-center d-block p-2">
            <img src="@/assets/images/interview.png" class="opacity-50">
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
