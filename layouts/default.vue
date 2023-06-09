<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink v-if="!isAuthenticated" @click="login">Log In</NuxtLink></li>
          <li><NuxtLink v-if="isAuthenticated" @click="logout">Logout {{ user }}</NuxtLink></li>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { status, data, lastRefreshedAt, getCsrfToken, getProviders, getSession, signIn, signOut } =
  useAuth()

const login = () => signIn('auth0')
const logout = () => signOut()

const isAuthenticated = computed(() => {
  return status.value === 'authenticated'
})

const user = computed(() => {
  return data.value?.user?.name
})
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
