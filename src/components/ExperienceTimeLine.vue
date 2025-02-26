<template>
  <div>
    <div class="timeline">
      <div class="dialog_wrapper" v-for="(experience, index) in experiences" :key="index">
        <div class="dialog">
          <h3 class="year">{{ experience.year }}
            <div class="decor_bar"></div>
          </h3>
          <ul class="content">
            <li v-for="(content, cIndex) in experience.content" :key="cIndex">
              {{ content.tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        {
          year: 2014,
          content: [
            {
              tag: '開始接網頁專案'
            },
            {
              tag: '開始接網頁專案2'
            }
          ]
        },
        {
          year: 2015,
          content: [
            {
              tag: '成立墨雨設計工作室'
            }
          ]
        },
        {
          year: 2016,
          content: [
            {
              tag: '開設動態互動網頁程式入門'
            }
          ]
        },
        {
          year: 2017,
          content: [
            {
              tag: '開設動態互動網頁特效入門'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline {
  height: 90vh;
  width: 3px;
  background-color: var(--wordColor);
  padding-top: 50px;
  margin-left: 20px;
  border-radius: 3px;
}

.dialog_wrapper {
  height: 160px;
  position: relative;
  transform: translateY(0px);
}

.dialog_wrapper:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: solid 5px white;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-40%);
}

.dialog {
  background-color: #fff;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 15px 15px #757065;
  width: 75vw;
  transition: 0.5s;
  position: absolute;
  left: 50px;
  top: -10px;
}

/* .dialog:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  position: absolute;
  left: -10px;
  background-color: white;
  transform: rotate(45deg);
} */

/* .dialog:hover {
  transform: translate(-10px, -10px);
  box-shadow: 20px 20px #757065;
} */

/* .year {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 2px;
} */

/* @-webkit-keyframes rain_in {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
} */

/* @keyframes rain_in {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
} */

/* button.initial {
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: #757065;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
} */

/* .fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
  transform: translateY(0px);
} */

/* .fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(50px) rotate(10deg);
} */
</style>
