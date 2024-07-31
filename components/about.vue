<template>
  <div class="about">
    <h2>Об отеле</h2>
    <div class="content">
      <p class="fade-in">Добро пожаловать в наш отель, расположенный на живописном побережье, где каждый момент пребывания превращается в незабываемое впечатление. Мы предлагаем идеальные условия для отдыха и релаксации в окружении живописной природы. В нашем отеле вы найдете высококлассный сервис, уютные номера и широкий спектр удобств, включая спа, рестораны, бассейны и пляжи.</p>
      <div class="divider"></div>
      <p class="fade-in">Наши номера оформлены в современном стиле, каждый из них оборудован всем необходимым для комфортного отдыха. Вы можете выбрать из различных типов номеров, от стандартных до роскошных люксов, каждый из которых отличается высоким уровнем комфорта и элегантности. Мы также предлагаем специальные пакеты и услуги, чтобы удовлетворить любые ваши потребности и предпочтения.</p>
      <div class="divider"></div>
      <p class="fade-in">Наши рестораны предлагают разнообразные блюда от местной кухни до международных деликатесов, а также изысканные коктейли и напитки. В спа-салоне вы сможете насладиться процедурами по уходу за телом и лицом, расслабляющими массажами и другими услугами для полного расслабления. Для активных отдыхающих у нас есть отличные возможности для водных видов спорта и экскурсий по окрестностям.</p>
    </div>
    <div class="about-images fade-in">
      <img src="/image/gallery/hotel.webp" alt="Hotel Interior" />
      <img src="/image/gallery/hotel2.jpg" alt="Hotel Exterior" />
      <img src="/image/gallery/hotel3.jpg" alt="Hotel Pool" />
    </div>
    <div class="icons fade-in">
      <div class="icon">
        <img src="/image/about/spa.jpg" alt="Spa" />
        <p>Спа</p>
      </div>
      <div class="icon">
        <img src="/image/about/restaurant.jpg" alt="Restaurant" />
        <p>Ресторан</p>
      </div>
      <div class="icon">
        <img src="/image/about/pool.jpg" alt="Pool" />
        <p>Бассейн</p>
      </div>
      <div class="icon">
        <img src="/image/about/beach.jpg" alt="Beach" />
        <p>Пляж</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
  max-width: 2500px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 30px;
  font-size: 2.8em;
  color: #2c3e50;
  font-weight: bold;
}

.content {
  font-size: 19px;
  margin-bottom: 50px;
  font-family: 'TildaSans';
}

.divider {
  width: 100%;
  height: 2px;
  background: #ddd;
  margin: 40px 0;
}

.about-images {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.about-images img {
  width: 32%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.icons {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.icon {
  text-align: center;
  margin: 20px;
  width: 20%;
}

.icon img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.icon p {
  font-size: 1.2em;
  color: #2c3e50;
  margin: 0;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
