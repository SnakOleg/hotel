<template>
  <div class="contact">
    <h2>Контакты</h2>
    <div class="contact-info">
      <p>Адрес: ул. Приморская, 123, город Морской, Россия</p>
      <p>Телефон: +7 (123) 456-78-90</p>
      <p>Email: info@hotel.ru</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped src="~/assets/css/default.css"></style>

<style scoped>
.contact {
  padding: 50px 20px;
  background-color: #333;
  color: white;
  text-align: center;
}

.contact-info p {
  margin: 10px 0;
}
</style>
