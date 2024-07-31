<template>
  <div class="booking-section">
    <div class="booking-form-container">
      <div class="logo">
        <NuxtImg src="image/logo.png" alt="Logo" />
      </div>
      <div id="_bn_widget_" class="bnovo-widget"></div>
    </div>
    <div class="image-slider">
      <img :src="currentImage" :alt="'Hotel Image ' + currentIndex" />
      <div class="slider-controls">
        <button class="prev-button" @click="prevImage">&#10094;</button>
        <button class="next-button" @click="nextImage">&#10095;</button>
      </div>
      <div class="slider-dots">
        <span v-for="(image, index) in images" :key="index"
              :class="{'dot': true, 'active': currentIndex === index}"
              @click="goToImage(index)">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        '/image/gallery/hotel.webp',
        '/image/gallery/hotel2.jpg',
        '/image/gallery/hotel3.jpg',
      ],
      sliderInterval: null
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
  },
  methods: {
    startSlider() {
      this.sliderInterval = setInterval(this.nextImage, 3000)
    },
    stopSlider() {
      if (this.sliderInterval) {
        clearInterval(this.sliderInterval)
      }
    },
    prevImage() {
      this.stopSlider()
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
      this.startSlider()
    },
    nextImage() {
      this.stopSlider()
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.startSlider()
    },
    goToImage(index) {
      this.stopSlider()
      this.currentIndex = index
      this.startSlider()
    },
  },
  mounted() {
    this.startSlider()

    // Initialize the Bnovo widget
    const script = document.createElement('script')
    script.src = '//widget.reservationsteps.ru/js/bnovo.js'
    script.onload = () => {
      Bnovo_Widget.init(() => {
        Bnovo_Widget.open('_bn_widget_', {
          type: "vertical",
          uid: "dbbb125e-d1ee-4e83-8b20-6cb396142aac",
          lang: "ru",
          width: "300",
          width_mobile: "300",
          background: "#ffffff",
          background_mobile: "#ffffff",
          bg_alpha: "100",
          bg_alpha_mobile: "100",
          border_color_mobile: "#C6CAD3",
          padding: "24",
          padding_mobile: "24",
          border_radius: "8",
          button_font_size: "14",
          button_height: "42",
          font_type: "inter",
          title_color: "#242742",
          title_color_mobile: "#242742",
          title_size: "22",
          title_size_mobile: "22",
          inp_color: "#242742",
          inp_bordhover: "#dedfe3",
          inp_bordcolor: "#BCBCBC",
          inp_alpha: "100",
          btn_background: "#b4975b",
          btn_background_over: "#8A754C",
          btn_textcolor: "#FFFFFF",
          btn_textover: "#FFFFFF",
          btn_bordcolor: "#b4975b",
          btn_bordhover: "#8A754C",
          min_age: "0",
          max_age: "17",
          adults_default: "1",
          cancel_color: "#1875F0",
          url: "https://hotel-aql.pages.dev/booking",
          switch_mobiles_width: "800",
        })
      })
    }
    document.body.appendChild(script)
  },
  beforeDestroy() {
    this.stopSlider()
  }
}
</script>

<style scoped src="~/assets/css/default.css"></style>

<style scoped>
h2 {
  color: white;
}

.booking-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: rgba(9, 9, 9, 0.16);
  border-radius: 0 0 100px 100px;
}

.booking-form-container {
  max-width: 400px;
  background-color: #ffffff21;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 100px;
}

.logo img {
  width: 230px;
  display: block;
  margin: 0 auto 20px auto;
}

.image-slider {
  position: relative;
  width: 800px;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 90px;
  margin-right: 25px;
}

.image-slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
}

.slider-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.slider-controls button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.slider-controls button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.prev-button {
  margin-left: 10px;
}

.next-button {
  margin-right: 10px;
}

.slider-dots {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: #fff;
}

@media (max-width: 768px) {
  .booking-section {
    flex-direction: column;
    padding: 20px;
  }

  .image-slider,
  .booking-form-container {
    width: 100%;
    max-width: none;
    margin-bottom: 20px;
  }

  .booking-form-container {
    margin-right: 0;
  }
}
</style>
