<template>
    <h3> Inventory:</h3>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Cost</th>
            <th scope="col">Stock</th>
            <th scope="col">Brand</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" v-bind:key="product.id"> 
            <th scope="row">{{product.id}}</th>
            <td>{{product.title}}</td>
            <td>{{product.description}}</td>
            <td>{{product.price}}</td>
            <td>{{product.stock}}</td>
            <td>{{product.brand}}</td>
            <td>{{product.category}}</td>
            <td>{{product.thumbnail}}</td>
          </tr>
        </tbody>
      </table>
      <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      class="elevation-1"
      item-value="name"
      @update:options="loadItems"
    ></v-data-table-server>
  </template>
    
  <script>
    import axios from 'axios';
  
    export default {
      name: 'InventoryView',
      data() {
        return {
          products: null,
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
    h3 {
      margin-bottom: 5%;
    }
  </style>