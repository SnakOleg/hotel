<template>
  <div :id="id" class="gallery">
    <h2 class="text-3xl md:text-6xl">Наши номера</h2>
    <div class="gallery-grid">
      <div
          v-for="(room, index) in rooms"
          :key="index"
          :class="['gallery-item', `div${index + 1}`, { visible: visibleIndexes.includes(index) }]"
      >
        <NuxtImg :src="room.image" :alt="room.name" class="rounded-md mb-2" />
      </div>
      <div
          v-for="(room, index) in rooms"
          :key="index"
          :class="['gallery-description', `div${index + 1}-text`, { visible: visibleIndexes.includes(index) }]"
      >
        <h3 class="text-4xl p-4">{{ room.name }}</h3>
        <p>{{ room.description }}</p>
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
      rooms: [
        {
          name: 'Пентхаус',
          image: '/image/gallery/lux.png',
          description: 'Эксклюзивный номер на верхнем этаже с панорамным видом. Пентхаус предлагает непревзойденный комфорт и роскошь, включая просторную гостиную, полностью оборудованную кухню и собственную террасу с видом на город. Гости могут воспользоваться услугами личного консьержа и круглосуточного обслуживания номеров. Это идеальное место для тех, кто ценит высочайший уровень сервиса и приватности.',
        },
      ],
      visibleIndexes: [],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkVisibility);
    this.checkVisibility();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkVisibility);
  },
  methods: {
    checkVisibility() {
      const galleryItems = document.querySelectorAll('.gallery-item, .gallery-description');
      galleryItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (!this.visibleIndexes.includes(index)) {
            this.visibleIndexes.push(index);
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.gallery {
  padding: 20px;
  text-align: center;
}

.gallery h2 {
  margin-bottom: 30px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 20px;
}

.gallery-item,
.gallery-description {
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.gallery-item.visible,
.gallery-description.visible {
  opacity: 1;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}

.div1-text {
  grid-area: 1 / 2 / 2 / 3;
}

.div2 {
  grid-area: 3 / 1 / 4 / 2;
}

.div2-text {
  grid-area: 2 / 1 / 3 / 2;
}

.div3 {
  grid-area: 2 / 2 / 3 / 3;
}

.div3-text {
  grid-area: 3 / 2 / 4 / 3;
}

.gallery-item img {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.gallery-description {
  font-size: 20px;
  padding: 10px;
  margin-bottom: 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gallery-description h3 {
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .gallery-grid {
    display: block;
  }
  .gallery-item {
    margin-bottom: 20px;
  }
}
</style>
