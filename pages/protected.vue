<template>
  <div>
    <h2>Protected Route</h2>
    <p>isAuthenticated? {{ isAuthenticated }}</p>
    <div>
      <div>
        <p>User</p>
        <pre>{{ user }}</pre>
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

  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const accessToken = await getAccessTokenSilently();

  definePageMeta({
    middleware: 'auth',
  });
</script>
