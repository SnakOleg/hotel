<template>
  <div class="burger-menu">
    <NuxtLink to="/">Главная</NuxtLink>
    <NuxtLink to="/about">Об отеле</NuxtLink>
    <NuxtLink to="/rooms">Номера</NuxtLink>
    <NuxtLink to="/contacts">Контакты</NuxtLink>
    <NuxtLink to="/booking">Бронирование</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
}
</script>

<style scoped>
.burger-menu {
  display: flex;
  gap: 20px;
}

.burger-menu a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
}

.burger-menu a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

@media (max-width: 768px) {
  .burger-menu {
    flex-direction: column;
    align-items: center;
  }

  .burger-menu a {
    padding: 15px;
    width: 100%;
    text-align: center;
  }
}
</style>
