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
  transition: all;
  transition-duration: 150ms;
  transition-delay: 150ms;
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px rgb(79, 78, 80);
}
.card:hover {
  box-shadow: 5px 5px 0px 0px rgb(194, 145, 240);
}

img {
  width: 100%;
  height: 150px;
}
</style>
