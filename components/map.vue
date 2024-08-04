<template>
  <h2 class="text-4xl">Как доехать</h2>
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
          center: [45.329081, 37.323482],
          zoom: 17,
          controls: ['zoomControl', 'geolocationControl', 'fullscreenControl']
        });

        const placemark = new ymaps.Placemark([45.329081, 37.323482], {
          hintContent: 'Станица Голубицкая, Курортная улица 145'
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
