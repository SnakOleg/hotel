<template>
  <div class="gallery">
    <h2>Наши номера</h2>
    <div class="gallery-grid">
      <div class="gallery-item" v-for="(room, index) in rooms" :key="index">
        <img :src="room.image" :alt="room.name" />
        <div class="gallery-overlay">
          <h3>{{ room.name }}</h3>
          <p>{{ room.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        {
          name: 'Стандартный номер',
          image: '/image/gallery/hotel.webp',
          description: 'Уютный номер с видом на море, идеален для семейного отдыха.',
        },
        {
          name: 'Люкс',
          image: '/image/gallery/hotel2.jpg',
          description: 'Просторный номер с джакузи и балконом, подходящий для романтического отдыха.',
        },
        {
          name: 'Пентхаус',
          image: '/image/gallery/hotel3.jpg',
          description: 'Эксклюзивный номер на верхнем этаже с панорамным видом.',
        },
      ],
    }
  },
}
</script>

<style scoped src="~/assets/css/default.css"></style>

<style scoped>
h2 {
  color: white;
}

.gallery {
  padding: 50px 20px;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  font-family: 'TildaSans';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay h3 {
  margin-bottom: 10px;
}
</style>
