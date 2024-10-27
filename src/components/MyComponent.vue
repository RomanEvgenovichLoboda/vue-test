<script setup>
import ItemCard from './ItemCard.vue'
import { RouterLink } from 'vue-router'
import { products } from '@/service/data'
</script>

<template>
  <div>
    <h1>
      {{ text }}<span> {{ name }}</span>
    </h1>
    <input type="text" placeholder="Search car" v-model="searchText" />
    <br />
    <input
      type="radio"
      name="sort"
      id="sortByName"
      value="name"
      v-model="sortType"
    />
    <label for="sortByName">Sort by name</label>
    <br />
    <input
      type="radio"
      name="sort"
      id="sortByPrice"
      value="price"
      v-model="sortType"
    />
    <label for="sortByPrice">Sort by price</label>
    <div class="products">
      <RouterLink
        to="/product"
        v-for="(product, index) in getSearch()"
        :key="index"
      >
        <ItemCard
          :name="product.name"
          :image-src="product.imageSrc"
          :description="product.description"
          :price="product.price"
        ></ItemCard>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      text: 'Hello: ',
      name: 'Romans Component',
      searchText: '',
      sortType: '',
    }
  },
  methods: {
    getSearch() {
      let newArr = products.filter(e =>
        e.name.toLowerCase().includes(this.searchText.toLowerCase()),
      )
      if (this.sortType == 'name') return newArr.sort((p, n) => p.name > n.name)
      else if (this.sortType == 'price')
        return newArr.sort((p, n) => p.price > n.price)
      else return newArr
    },
  },
}
</script>
<style scoped>
span {
  color: #1bb407;
}
.products {
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
}
</style>
