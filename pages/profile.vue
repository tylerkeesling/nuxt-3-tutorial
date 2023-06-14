<template>
  <div class="container mx-auto sm:px-4">
    <div class="flex flex-wrap items-center profile-header">
      <div class="md:w-1/5 pr-4 pl-4 mb-3">
        <img :src="session.user?.image" alt="User's profile picture" class="rounded-full w-36 h-36" />
      </div>
      <div class="relative md:flex-grow md:flex-1 text-center md:text-left">
        <h2>{{ session.user?.name }}</h2>
        <p class="text-xl font-light text-gray-700">{{ session.user?.email }}</p>
      </div>
    </div>

    <div class="flex flex-wrap">
      <pre class="bg-gray-50 overflow-scroll json">{{ session.user }}</pre>
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
const { status, session } = useAuth();
// definePageMeta({
//   middleware: 'auth',
// });
</script>
