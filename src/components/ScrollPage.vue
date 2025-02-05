<template>
  <div>
    <!-- 導航按鈕 -->
    <nav class="nav-buttons">
      <button
        v-for="(section, index) in sections"
        :key="index"
        :class="{ active: currentSection === index }"
        @click="scrollToSection(index)"
      >
        {{ section.name }}
      </button>
    </nav>

    <!-- 區域內容 -->
    <div class="sections">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :ref="'section' + index"
        class="section"
      >
        <h2>{{ section.name }}</h2>
        <p>{{ section.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       sections: [
//         { name: 'Home', content: 'Welcome to the Home section!' },
//         { name: 'About', content: 'This is the About section.' },
//         { name: 'Services', content: 'Learn more about our Services here.' },
//         { name: 'Contact', content: 'Get in touch with us in the Contact section.' }
//       ],
//       currentSection: 0 // 當前滾動到的區域索引
//     }
//   },
//   methods: {
//     scrollToSection (index) {
//       const target = this.$refs['section' + index][0]
//       if (target) {
//         target.scrollIntoView({ behavior: 'smooth' })
//       }
//     },
//     updateCurrentSection () {
//       this.sections.forEach((_, index) => {
//         const section = this.$refs['section' + index][0]
//         const rect = section.getBoundingClientRect()
//         if (
//           rect.top <= window.innerHeight / 2 &&
//           rect.bottom >= window.innerHeight / 2
//         ) {
//           this.currentSection = index
//         }
//       })
//     }
//   },
//   mounted () {
//     window.addEventListener('scroll', this.updateCurrentSection)
//   },
//   beforeUnmount () {
//     window.removeEventListener('scroll', this.updateCurrentSection)
//   }
// }
</script>

<!-- <style>
/* 簡單的樣式 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.nav-buttons {
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
}

.nav-buttons button {
  margin: 5px 0;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
}

.nav-buttons button.active {
  background-color: #007bff;
  color: white;
}

.sections {
  margin-top: 50px;
}

.section {
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center
  border-bottom: 1px solid #ddd
}

.section:nth-child(odd) {
  background-color: #f4f4f4
}
</style> -->
