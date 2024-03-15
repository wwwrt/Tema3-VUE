<script setup>
defineProps({
  person: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div
    class="flex flex-col items-center justify-between w-64 h-72 p-1 mx-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-yellow-100"
  >
    <header class="flex mt-4">
      <div class="ms-12 me-8">
        <a href="#">
          <img
            class="rounded-full object-cover w-36 h-36"
            :src="person.image"
            alt=""
          />
        </a>
      </div>
      <div><i class="bi bi-three-dots"></i></div>
    </header>
    <main class="flex flex-col items-center">
      <div class="font-bold text-xl">{{ person.name }}</div>
      <div class="font-semibold text-sm text-gray-600">{{ person.role }}</div>
    </main>
    <footer class="flex mt-2 mb-4 text-xl">
      <i
        class="bi bi-facebook text-blue-600 bg-gray-200 rounded-full px-2 py-1"
      ></i>
      <i
        class="bi bi-twitter text-blue-400 bg-gray-200 rounded-full px-2 py-1 ms-2"
      ></i>
      <i
        class="bi bi-instagram text-rose-400 bg-gray-200 rounded-full px-2 py-1 ms-2"
      ></i>
    </footer>
  </div>
</template>
