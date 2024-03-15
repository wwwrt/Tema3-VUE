<template>
  <div class="flex">
    <h1 class="text-2xl font-bold ms-5 mt-3 text-yellow-950">TEAM</h1>

    <form class="w-96 mx-8 my-2">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Search by Name"
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-red-800 font-medium rounded-3xl text-l px-5 py-1"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>
    </form>
  </div>
</template>
