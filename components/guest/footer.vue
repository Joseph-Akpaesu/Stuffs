<template>
    <div class="footer">
    <footer />
  <a-row>
  <div class="footer-text">
  <h4>Foodie</h4>
  <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto. ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatibus minima obcaecati perferendis veritatis maxime inventore maiores, nulla magni ipsam!</p>
  </div>
  <div class="col1">
     <a-col :sm="{ span: 8, offset: 5 }" :lg="{ span: 5, offset: 4 }">
      <h4 class="footer-h">contact</h4>
      <div class="quick-link2">
        <p class="info"><a href="#">info@africinnovate.com</a></p>
        <p>+2348158868727</p>
        <p>16,Uqua Road, Eket</p>
        <p>Akwa Ibom State</p>
      </div>

      
    </a-col>
  </div>
 <div class="col2">
    <a-col :sm="{ span: 11, offset: 5 }" :lg="{ span: 5, offset: 2 }">
      <h4 class="footer-h">quick link</h4>
      <div class="quick-link">
        <p>Pricing</p>
        <p>Restaurant Directory</p>
        <p>Contact</p>
        <p>Business Opportunity</p>
        <p>Partner Login</p>
      </div>
    </a-col>
</div>
<div class="col3">
    <a-col :sm="{ span: 8, offset: 5 }" :lg="{ span: 5, offset: 2 }">
      <h4 class="footer-h">col3</h4>
      <div class="qucik-link1">
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
      </div>
    </a-col>
</div>
</a-row>
<div class="icons-list">
  <a href="#"><i class="fab fa-facebook icon"></i></a>
  <a href="#"><i class="fab fa-instagram icon"></i></a>
  <a href="#"><i class="fab fa-whatsapp icon"></i></a>
</div>

    </div>
    
</template>

<script>

    export default {
  
    }
</script>

<style scoped>
.footer{
background: #bf0505;
padding-top: 50px;
padding-bottom: 50px;
}
.col1, .col2, .col3{
 color: white;
}
h4{
color: white;
}
.icons-list{
  font-size: 25px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 50px 0 20px 0;
}
.icon{
margin-left: 35px;
}
.icons-list a{
 color: white;
}
.footer-text{
 color: white;
 text-align: center;
 max-width: 500px;
 margin: auto;
 padding-bottom: 70px;
}

.info a{
 color: rgb(137, 225, 235);
 text-decoration: none;
}
.quick-link, .qucik-link1, .quick-link2{
line-height: 10px;
padding: 15px 0 0 0;
}
.footer-h{
text-transform: uppercase;
font-size: 20px;
font-weight: 200;
}

@media only screen and (max-width: 600px) {
  .footer-h, .quick-link, .qucik-link1, .quick-link2{
    text-align: center;
    padding: 20px 0 0 0;
  }
}
</style>