<template>
  <div>
    <h2>Protected</h2>
    <p>You are currently logged in? {{ this.$auth0.isAuthenticated.value }}</p>
    <p>api response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>

<script setup>
  definePageMeta({
    middleware: 'auth',
  });

  const { data } = await useFetch('/api/currency/GBP');
</script>
