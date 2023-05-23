<template>
  <h2>Inventory</h2>
  <v-div class="inventory-table">
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="products"
    >
    </v-data-table>
  </v-div>
</template>
    
<script>
  import axios from 'axios';
  
  export default {
    name: 'InventoryView',
    data() {
      return {
        itemsPerPage: 10,
        headers: [
          {
            title: 'Product Id',
            align: 'start',
            sortable: false,
            key: 'id',
          },
          { title: 'Title', align: 'end', key: 'title' },
          { title: 'Description', align: 'end', key: 'description' },
          { title: 'Price', align: 'end', key: 'price' },
          { title: 'Units', align: 'end', key: 'stock' },
          { title: 'Brand', align: 'end', key: 'brand' },
          { title: 'Category', align: 'end', key: 'category' },
          { title: 'Product Image', align: 'end', key: 'thumbnail' },
        ],
        products: [],
      };
    },
    created: function() {
      axios
        .get('https://dummyjson.com/products')
        .then(res => {
          this.products = res.data.products;
        })
      }
    }
</script>
    
<style>
  h2 {
    padding-left: 1%;
    margin-bottom: 5px;
  }
  .inventory-table {
    padding-left:1%;
    padding-right:1%;
  }
</style>