<template>
    <div>
    <AppNav />
    <a-row>
    <a-col :sm="{ span: 6, offset: 10}" :lg="{ span: 16, offset: 5 }">
      <h1 class="preposition">
        You don't have to stress to get a nice meal
      </h1>
      <p class="desc-txt">Order your favourite meal from any restaurant around you and get it delivered to you.</p>
    <a-input-search placeholder="Search" size="large" style="width: 400px; margin: 20px 0 0 50px;" @search="onSearch" />
    </a-col>
    <a-col :sm="{ span: 11, offset: 10}" :lg="{ span: 5, offset: 5}">
      <img class="chef" src="~/assets/img/Group 102.png" alt="">
    </a-col>
  </a-row>


 <div class="container-food">
 <div>
     <a-row type="flex" justify="space-around">
      <a-col class="items" :sm="{span: 4}">
        <nuxt-link to="/"><img src="~/assets/img/abedc17a8201d0d4a857f0d118548679-removebg-preview 4.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
        <p><i class="fab fa-location"></i>Restaurant name</p>
      </a-col>
      <a-col class="items" :sm="{span: 4}">
       <nuxt-link to="/"><img src="~/assets/img/queen-of-the-smooth-CAj6UqikAPA-unsplash-removebg-preview 2.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
        <p><i class="fab fa-location"></i>Restaurant name</p>
      </a-col>
      <a-col class="items" :sm="{span: 4}">
       <nuxt-link to="/"><img src="~/assets/img/abedc17a8201d0d4a857f0d118548679-removebg-preview 4.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
        <p><i class="fab fa-location"></i>Restaurant name</p>
      </a-col>
      <a-col class="items" :sm="{span: 4}">
        <nuxt-link to="/"><img src="~/assets/img/queen-of-the-smooth-CAj6UqikAPA-unsplash-removebg-preview 2.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
        <p><i class="fab fa-location"></i>Restaurant name</p>
      </a-col>
    </a-row>
 </div>

    <div class="container-food1">
      <a-row type="flex" justify="space-around">
      <a-col class="items" :sm="{span: 4}">
       <nuxt-link to="/"><img src="~/assets/img/abedc17a8201d0d4a857f0d118548679-removebg-preview 4.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
        <p><i class="fab fa-location"></i>Restaurant name</p>
      </a-col>
      <a-col class="items" :sm="{span:4}">
       <nuxt-link to="/"><img src="~/assets/img/queen-of-the-smooth-CAj6UqikAPA-unsplash-removebg-preview 2.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
        <p><i class="fab fa-location"></i>Restaurant name</p>
      </a-col>
      <a-col class="items" :sm="{span:4}">
        <nuxt-link to="/"><img src="~/assets/img/abedc17a8201d0d4a857f0d118548679-removebg-preview 4.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
        <p><i class="fab fa-location"></i>Restaurant name</p>
      </a-col>
      <a-col class="items" :sm="{span:4}">
       <nuxt-link to="/"><img src="~/assets/img/queen-of-the-smooth-CAj6UqikAPA-unsplash-removebg-preview 2.png" alt=""></nuxt-link>
        <p>Food name</p>
        <p># Price</p>
      </a-col>
      </a-row>
    </div>

    <div class="background"></div>

<a-row>
   <a-col :sm="{span: 12}">
        <img class="chef" src="~/assets/img/Group 49.png" alt="" width="100%" height="auto">
      </a-col>
      <a-col :sm="{span: 12}">
        <p id="para" style="max-width: 200px; color: #bf0505;">Bring your customer closer to you...</p>
      </a-col>
</a-row>

 </div>
   <Footer />
    </div>
</template>

<script>

import Footer from '../components/guest/footer.vue'
import AppNav from '../components/guest/AppNav.vue'

    export default {
    components:{
      name: 'Landing',
      Footer,

    },
    methods: {
      onSearch(value) {
      console.log('receive value', value);
    }
  },
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: 15px;
  font-size: 17px;
}
.preposition{
  max-width: 500px;
  margin: 90px 0 0 50px;
  font-family: sans-serif;
  color: #bf0505;
  font-size: 60px;
  font-weight: 600;
}
.desc-txt{
max-width: 400px;
margin: 10px 0 0 50px;
font-size: 19px;
color:  #aa5353;
}
#btn{
border: 1px solid white;
padding: 10px 150px 10px 20px;
margin: 20px 0 0 50px;
border-radius: 50px;
box-shadow: 0 2px 10px 0;
}
#btn:hover{
border-radius: 50px;

}
.search-icon{
position: absolute;
right: 570px;
top: 410px;
}
.container-food{
 margin: 200px 0 200px 0;
}
.container-food1{
 margin: 80px 0 100px 0;

}
.items{
border: 1px solid white;
text-align: center;
font-weight: 100;
border-radius: 20px;
padding: 10px 0 10px;
box-shadow: 0 2px 5px 0;
}
.background{
background: #bf0505;
padding-bottom: 5px;
max-width: 1170px;
margin: auto;
}
.chef{
  width: 400px;
}
#para{
  position: absolute;
  top: 80px;
  left: -330px;
  font-size: 20px;
  font-weight: 800;
}
@media only screen and (max-width: 600px) {
.chef{
  width: 100%;
  height: auto;
}
}
</style>
