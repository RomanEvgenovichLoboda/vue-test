<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: 'https://storage.googleapis.com/pod_public/1300/173321.jpg',
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <img :src="imageSrc" />
    <p>{{ description }}</p>
    <h1>{{ price }}</h1>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  height: fit-content;
  margin: 4px;
  padding: 5px;
  border: solid 2px blueviolet;
  border-radius: 15px;
}
img {
  width: 100%;
  max-height: 150px;
}
</style>
