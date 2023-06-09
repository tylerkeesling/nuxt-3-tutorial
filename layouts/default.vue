<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink v-if="!isAuthenticated" @click="loginWithRedirect">Login</NuxtLink></li>
          <li><NuxtLink v-if="isAuthenticated" @click="logOut">Logout</NuxtLink></li>
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

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const auth0 = useAuth0()
const { isAuthenticated, loginWithRedirect, logout } = auth0

const login = () => loginWithRedirect()
const logOut = () => logout({ logoutParams: { returnTo: window.location.origin } })
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
