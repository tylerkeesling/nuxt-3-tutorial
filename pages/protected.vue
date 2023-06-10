<template>
  <div>
    <h2>Protected Route</h2>
    <p>isAuthenticated? {{ this.$auth0.isAuthenticated.value }}</p>
    <div>
      <div>
        <p>this.$auth0.user</p>
        <pre>{{ this.$auth0.user }}</pre>
      </div>
      <div>
        <p>User Roles</p>
        <pre>{{ user['https://kick.com/roles'] }}</pre>
      </div>
      <div>
        <p>Access Token</p>
        <pre>{{ accessToken }}</pre>
      </div>
    </div>
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
  import { useAuth0 } from '@auth0/auth0-vue';
  definePageMeta({
    middleware: 'auth',
  });

  const { user, getAccessTokenSilently } = useAuth0();

  const accessToken = await getAccessTokenSilently();
</script>
