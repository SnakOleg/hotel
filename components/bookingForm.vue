<template>
  <div class="booking-section">
    <div class="booking-form-container">
      <div class="logo">
        <NuxtImg src="image/logo.png" alt="Logo" />
      </div>
      <h2>Забронировать номер</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="checkin-date">Дата заезда</label>
          <input type="date" id="checkin-date" v-model="checkinDate" required />
        </div>
        <div class="form-group">
          <label for="checkout-date">Дата выезда</label>
          <input type="date" id="checkout-date" v-model="checkoutDate" required />
        </div>
        <div class="form-group">
          <label for="guests">Количество гостей</label>
          <input type="number" id="guests" v-model="guests" min="1" required />
        </div>
        <button type="submit">Забронировать</button>
      </form>
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
      checkinDate: '',
      checkoutDate: '',
      guests: 1,
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
    submitForm() {
      alert(`Бронирование: Заезд - ${this.checkinDate}, Выезд - ${this.checkoutDate}, Гости - ${this.guests}`);
    },
  },
  mounted() {
    this.startSlider()
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

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  color: white;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #b4975b;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #555;
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
