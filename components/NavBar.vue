<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto py-4 px-12 flex justify-between">
      <NuxtLink to="/" class="font-bold">Kick &#10084;&#65039; Okta</NuxtLink>
      <div class="flex gap-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/protected">Protected Route</NuxtLink>
        <NuxtLink to="/products">Products</NuxtLink>
      </div>
      <div class="flex gap-4">
        <template v-if="!isAuthenticated">
          <NuxtLink @click="loginWithRedirect" class="btn">Login</NuxtLink>
          <NuxtLink @click="signUp" class="btn">Sign Up</NuxtLink>
        </template>
        <template v-else>
          <NuxtLink @click="logout" class="btn">Logout</NuxtLink>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
const signUp = () => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } });
</script>

<!-- 
<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const auth0 = process.client ? useAuth0() : undefined;

const isAuthenticated = computed(() => {
  return auth0?.isAuthenticated.value;
});

const login = () => {
  auth0?.checkSession();
  if (!auth0?.isAuthenticated.value) {
    auth0?.loginWithRedirect({
      appState: {
        target: useRoute().path,
      },
    });
  }
};

const logOut = () => {
  navigateTo('/');
  auth0?.logout({ logoutParams: { returnTo: window.location.origin } });
};
</script> 
-->

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
