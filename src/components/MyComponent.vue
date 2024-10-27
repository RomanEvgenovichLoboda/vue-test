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
    <label for="sortByName">Sort by name</label>
    <input type="checkbox" name="sortByName" v-model="nameSort" />
    {{ nameSort }}
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
      nameSort: false,
      // products: [
      //   {
      //     name: 'Mazeraty',
      //     imageSrc:
      //       'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=800',
      //     description: 'car',
      //     price: 20000,
      //   },
      //   {
      //     name: 'Porshe',
      //     imageSrc: 'https://storage.googleapis.com/pod_public/1300/168360.jpg',
      //     description: 'car',
      //     price: 15000,
      //   },
      //   {
      //     name: 'Lamborginy',
      //     imageSrc: 'https://storage.googleapis.com/pod_public/1300/173323.jpg',
      //     description: 'car',
      //     price: 30000,
      //   },
      //   {
      //     name: 'Mustang',
      //     imageSrc: 'https://storage.googleapis.com/pod_public/1300/121024.jpg',
      //     description: 'car',
      //     price: 25000,
      //   },
      // ],
    }
  },
  methods: {
    getSearch() {
      let newArr = products.filter(e =>
        e.name.toLowerCase().includes(this.searchText.toLowerCase()),
      )
      if (this.nameSort) return newArr.sort((p, n) => p.name > n.name)
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
