<template>
  <div :id="id" class="apartments py-8">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">Номера</h2>
      </div>

      <div class="space-y-12">
        <div v-for="(room, index) in rooms" :key="index" class="relative flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <div class="lg:w-1/2">
            <div class="carousel">
              <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlides[index] * 100}%)` }">
                <div v-for="(image, imgIndex) in room.images" :key="imgIndex" class="carousel-item">
                  <img :src="image" :alt="room.title" class="w-full h-auto rounded-lg"/>
                </div>
              </div>
              <button class="carousel-control left-0" @click="prevSlide(index)">&lt;</button>
              <button class="carousel-control right-0" @click="nextSlide(index)">&gt;</button>
            </div>
          </div>

          <div class="lg:w-1/2 text-lg relative mt-5">
            <div class="bg-[#ffffff] p-6 rounded-lg shadow-lg transform -rotate-2 -translate-x-4">
              <h3 class="text-2xl font-semibold mb-4">{{ room.title }}</h3>
              <p class="mb-4">{{ room.description }}</p>
              <button class="bg-[#c2a404] text-white px-6 py-2 rounded-md mt-4">Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      currentSlides: [0, 0, 0],
      rooms: [
        {
          title: "Апартаменты",
          description: "Лучшее решение для путешествующих с семьёй или друзьями: двухуровневые апартаменты. На первом уровне находится полностью оборудованная кухня с обеденным столом и стульями, удобный диван, который также раскладывается, и ванная комната с душевой. На втором уровне находится двуспальная кровать и рабочее место. Одна из особенностей номера — собственная терраса, на которой вы сможете наслаждаться самыми красивыми закатами на Чёрное море.",
          images: ["/image/gallery/lux.png", "/image/gallery/standard.jpg"],
        },
        {
          title: "Студия",
          description: "Просторная и светлая студия с видом на город. Площадь номера — 30 м². Двуспальная кровать, полностью оборудованная кухня с обеденным столом, ванная комната с душевой, кабельное ТВ — в номере есть всё необходимое для вашего идеального отдыха.",
          images: ["/image/gallery/standard.jpg", "/image/gallery/penthouse.jpg"],
        },
        {
          title: "Студия с балконом",
          description: "Студия с балконом и видом на оживлённую улицу Широкой Балки. Площадь номера — 32 м². Полностью оборудованная кухня с обеденным столом и стульями, ванная с душевой, двуспальная кровать, раскладной диван. В номере есть балкон, а что может быть лучше, чем устроиться на уютном балконе с хорошей книгой и чашкой кофе рано утром или прохладным шампанским на закате.",
          images: ["/image/gallery/lux.png", "/image/gallery/standard.jpg"],
        },
      ],
    };
  },
  methods: {
    prevSlide(index) {
      this.currentSlides[index] = (this.currentSlides[index] - 1 + this.rooms[index].images.length) % this.rooms[index].images.length;
    },
    nextSlide(index) {
      this.currentSlides[index] = (this.currentSlides[index] + 1) % this.rooms[index].images.length;
    },
  },
};
</script>

<style scoped>
.apartments {
  background-color: #f9f9f9;
}

.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.carousel-control.left-0 {
  left: 0;
}

.carousel-control.right-0 {
  right: 0;
}

button {
  cursor: pointer;
}

.bg-[#ffffff] {
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
}

.bg-[#ffffff]::before {
               content: '';
               position: absolute;
               top: 0;
               right: 0;
               width: 50%;
               height: 100%;
               background-color: #f5f5f5;
               transform: skewX(-10deg);
               transform-origin: top right;
             }

.bg-[#ffffff]::after {
               content: '';
               position: absolute;
               bottom: 0;
               left: 0;
               width: 50%;
               height: 100%;
               background-color: #f5f5f5;
               transform: skewX(10deg);
               transform-origin: bottom left;
             }
</style>
