<template>
  <h2 class="text-6xl">Мы находимся тут</h2>
  <div :id="id" class="map" style="width: 100%; height: 400px;"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: 'map'
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU`;
    script.onload = () => this.initMap();
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      ymaps.ready(() => {
        const map = new ymaps.Map(this.id, {
          center: [44.653747, 37.701304],
          zoom: 17,
          controls: ['zoomControl', 'geolocationControl', 'fullscreenControl']
        });

        const placemark = new ymaps.Placemark([44.653747, 37.701304], {
          hintContent: 'Курортная набережная, 9'
        }, {
          iconLayout: 'default#image',
          iconImageSize: [30, 42],
          iconImageOffset: [-15, -42]
        });

        map.geoObjects.add(placemark);
      });
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}

h2 {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
