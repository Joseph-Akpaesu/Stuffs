<template>
<div>
<header>
<a-row type="flex" justify="space-between">
    <a-col>
        <img src="~/assets/img/Group 101.png" alt="" width="50px">
    </a-col>
    <a-col>
    <nav>
      <ul>
            <i class="fas fa-shopping-cart cart"></i>
        <a-button-group>
          <a-button>Login</a-button>
          <a-button type="danger" style="background-color: #bf0505;">
           Sign-up
        </a-button>
        </a-button-group>
            
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
      </ul>
    </nav>
  
    </a-col>
</a-row>
</header>
</div>
</template>

<script scoped>
export default {
  data() {
    return {
      top: 10,
      bottom: 10,
    };
  },
}
</script>

<style scoped>

header {
  width: 100%;
  padding: 30px 50px 10px 50px;
  font-family: sans-serif;

}

header ul li {
  float: left;
  list-style-type: none;  
  display: flex;
}

li a {
  color: #bf0505;
  text-decoration: none;
  padding: 10px 20px 10px 10px;
  padding-left: 40px;
}
.cart{
color: #bf0505;
padding: 0 30px 0 20px;
font-size: 17px;
}
</style>
