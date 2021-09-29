
<template>
  <div>
    <section class="nav-bar">
      <ul>
          <li class="img-1">
              <a href="#"><img src="~/assets/img/Group 10.png" alt="" width="50px"></a>
          </li>
          <li class="img-2">
            <a href="#"><img src="~/assets/img/Group 101.png" alt="" width="50px"></a>
          </li>
      </ul>
    </section>

    <a-row>
      <a-col :sm="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 0 }">
        <img id="img" src="~/assets/img/Group 113.png" alt="" width="520px" height="688px">
      </a-col>

      <a-col class="login-text" :sm="{ span: 10, offset: 5}" :lg="{ span: 10, offset: 5}">
        <h3>Login</h3>
        <p>Don't have an account? <a href="#">signup </a></p>

        <a-col :sm="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
          <a-button type="" id="google-signup-btn">
            <a href="#">Sign in with google</a>
            <i class="fab fa-google google" style="color: black; font-size: 20px; padding-left: 10px;"></i>
          </a-button>
        </a-col>

        <a-col :sm="{ span: 10, offset: 5 }" :lg="{ span: 10, offset: 5 }">
          <a-button type="" id="facebook-signup-btn">
            <a href="#" >Sign in with facebook</a>
            <i class="fab fa-facebook-square" style="color: black; font-size: 20px;  padding-left: 10px;"></i>
          </a-button>
        </a-col>
        <a-divider class="Divider">Or</a-divider>
      </a-col>

      <a-col class="login-form" :sm="{ span: 5, offset: 1 }" :lg="{ span: 9, offset: 6 }">
        <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: 'Please input your username!' }] },
            ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a class="login-form-forgot" href="">
            Forgot password
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            <a href="#">Log in</a>
          </a-button>
        </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
      layout: 'plain',
    beforeCreate() {
   this.form = this.$form.createForm(this, { name: 'normal_login' });
 },
 methods: {
   handleSubmit(e) {
     e.preventDefault();
     this.form.validateFields((err, values) => {
       if (!err) {
         console.log('Received values of form: ', values);
       }
     });
   },
 },
  }
</script>

<style scoped>
.nav-bar {
  width: 100%;
  position: absolute;
  padding: 20px 0px 0px 40px;
  z-index: 1
}

.nav-bar ul{
  display: flex;
}

.nav-bar li {
  list-style: none;
}

.nav-bar .img-2 {
  display: none;
}

.login-text {
  text-align: center;
  margin-top: 120px;
}

.login-text h3 {
  font-size: 2.4em;
  font-weight: 900;
}

.login-text a {
  color: #bf0505;
  text-decoration: none;
}

.login-text p {
  color: rgba(0,0,0,.50);
}

#google-signup-btn  {
  background-color: white;
  box-shadow: 0 2px 5px 0 black;
  border: 1px solid white;
  border-radius: 10px;
  padding: 12px 10px 31px 20px;
}

#google-signup-btn a {
  color: rgba(0,0,0,.50);
  text-decoration: none;
}

#facebook-signup-btn  {
  background-color: skyblue;
  box-shadow: 0 2px 5px 0 black;
  border: 1px solid skyblue;
  border-radius: 10px;
  padding: 12px 10px 31px 20px;
}

#facebook-signup-btn a {
  color: white;
  text-decoration: none;
}

.Divider {
  margin-top: 15%;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

.login-form {
  margin-top: 25px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
  color: #bf0505;
}

.login-form-forgot:hover {
  text-decoration: none;
}

#components-form-demo-normal-login .login-form-button {
  width: 36%;
  margin-top: 50px;
  background: #bf0505;
  color: white;
  padding: 10px 0px 30px 0px;
  border-radius: 20px;
  border: none;
  font-weight: 800;
  font-size: 1.1em;
  margin-left: 31%;
}

.login-form-button:hover{
  background: #bf0505;
  color: white;
  border: none;
}

.login-form-button a {
  text-decoration: none;
  letter-spacing: 1px;
}

@media only screen and (max-width: 600px) {
  .nav-bar .img-1 {}

  .nav-bar .img-2 {
    display: none;
  }

  #img{
    width: 100%;
    height: auto;
  }

  #facebook-signup-btn {
  margin-top: 5%;
  }
}
</style>
