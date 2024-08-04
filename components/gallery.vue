<template>
  <div :id="id" class="gallery">
    <h2 class="text-3xl md:text-6xl">О нас</h2>
    <div class="gallery-grid">
      <div
          v-for="(room, index) in rooms"
          :key="index"
          :class="['gallery-description', `div${index + 1}-text`, { visible: visibleIndexes.includes(index) }]"
      >
        <p>{{ room.description }}</p>
    </div>
    </div>
  </div>
</template>

<script>
//grid-template-rows: repeat(3, 1fr);
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
          name: 'Кратко об базе отдыха:',
          description: ' Это идеальное место для тех, кто ценит высочайший уровень сервиса и приватности.',
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
  display: flex;
  justify-content: center;
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
