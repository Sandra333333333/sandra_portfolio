<template>
  <div class="timeline ms-5">
    <div class="timeline-item" v-for="(experience, index) in experiences" :key="index" :class="{ hover: hoveredIndex ==index }" @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
      <div class="timeline-content ps-3 text-left">
        <h4 class="py-2 text-center rounded-pill timeline-date col-8 col-md-4">
          {{ experience.date }}
        </h4>
        <br>
        <h4>{{ experience.title }} // {{ experience.company }} // {{ experience.address }}</h4>
        <p class="remark d-inline" v-for="(skill, sIndex) in experience.skills" :key="sIndex">
          # {{ skill.tag }}&ensp;
        </p>
        <p v-for="(description, dIndex) in experience.descriptions" :key="dIndex">
          >&emsp;{{ description.tag }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hoveredIndex: null,
      experiences: [
        {
          title: '網頁設計師',
          company: '裕融企業股份有限公司',
          date: '04. 2022 - 07. 2024',
          address: '台北市大安區',
          skills: [
            { tag: 'Adobe Illustrator' }, { tag: 'Adobe Photoshop' }, { tag: 'Adobe XD' }, { tag: 'Vue3' }, { tag: 'Bootstrap5' }, { tag: 'CSS' }, { tag: 'HTML' }
          ],
          descriptions: [
            {
              tag: '台灣公司官網維運及優化，調整並新增各年度內容更新。'
            },
            {
              tag: '菲律賓分公司官網維運與優化，在與User討論需求後製作，最新一次上架的是醫療設備貸款的介紹頁面。'
            },
            {
              tag: '使用Adobe XD繪製prototype並與User討論畫面，確認需求後執行有效減少後續修改時間。'
            },
            {
              tag: '公司內部簽核系統續約用印與乙方廠商溝通報價等事宜。'
            },
            {
              tag: '使用Illustrator繪製網頁所需的icon，增加介面的表達及豐富度。'
            }
          ]
        },
        {
          title: '行政人員',
          company: '新北市文化局文設科-板橋435藝文特區',
          date: '01. 2021 - 12. 2021',
          address: '新北市板橋區',
          skills: [
            { tag: 'Adobe illustrator' }, { tag: 'Adobe Photoshop' }, { tag: 'Word' }, { tag: 'Excel' }, { tag: 'Google Excel' }
          ],
          descriptions: [
            {
              tag: '藝文特區展覽的網頁做圖宣傳，使網站順利上架。'
            },
            {
              tag: '與每個檔期的展覽者溝通官網圖片的調整，並將圖片及展覽資訊製成網站上架的規格。'
            },
            {
              tag: '疫情期間滾動調整展覽開放聯繫事宜，協助不同展覽者將時段延後討論，使展覽者順利展出。'
            }
          ]
        },
        {
          title: '設計實習生',
          company: '台塑總管理處創意設計中心',
          date: '09. 2018 - 09. 2019 ',
          address: '台北市松山區',
          skills: [
            { tag: 'Adobe illustrator' }, { tag: 'Adobe Photoshop' }, { tag: 'Adobe Indesign' }
          ],
          descriptions: [
            {
              tag: '依照年度流行色彩設計不同四方連續花紋，印於膠皮上協助製作樣冊，可供廠商客戶們觀賞並下單。'
            },
            {
              tag: '布料、塑膠皮料協助切割及列印，使樣冊能與廠商約定日期前順利進行。'
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
  width: 1.5px;
  background-color: var(--wordColor);
  padding-top: 50px;
  margin-left: 20px;
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  transform: translateY(0px);
  width: auto;
}

.timeline-item:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background-color: rgb(194 195 182);
  border-radius: 3px;
  left: 50%;
  transform: translateX(-48%);
  transform-origin: center center;
  transition: all 1.2s;
}

.timeline-item.hover:before {
  background: var(--mainColor);
  transform: translateX(-48%) scale(1.2);
}

.timeline-content {
  padding: 15px 20px;
  border-radius: 5px;
  width: 75vw;
  max-width: 900px;
  box-sizing: border-box;
  position: absolute;
  left: 50px;
  top: -45px;
  position: relative;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.timeline-date {
  background-color: rgb(194, 195, 182);
  color: white;
  transition: all 0.8s;
}

.timeline-item.hover .timeline-date {
  background-color: var(--mainColor);
}

.timeline-content:before {
  content: "";
  border-radius: 3px;
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  left: -39px;
  top: 33px;
  border: 1px dashed rgb(194, 195, 182);
  transition: all 2s;
}

.timeline-item.hover .timeline-content:before {
  border: 1px solid var(--mainColor);
}
</style>
