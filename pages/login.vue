<template>
  <div>
    <div class='nav-bar' style="position: absolute; z-index: 1; padding: 20px 0px 0px 40px;">
    <ul>
        <li>
            <a href="#"><img src="~/assets/img/Group 10.png" alt="" width="50px"></a>
        </li>
    </ul>
    </div>
    <section>
      <a-row>
      <a-col :sm="{ span: 6, offset: 10}" :lg="{ span: 10, offset: 0 }">
      <div class="img-container">
         <img src="~/assets/img/Group 113.png" alt="" width="520px" height="688px">
      </div>
    </a-col>
    <a-col :sm="{ span: 5, offset: 5}" :lg="{ span: 10, offset: 2}">
    <div class="sign-up-text">
      <h3>Login</h3>
      <p>Don't have an account? <a href="#">signup </a></p>
    <a-button type="" id="google-signup-btn">
      <a href="#">Sign in with google</a>
      <i class="fab fa-google google" style="color: black; font-size: 20px;"></i>
    </a-button>
    <a-button type="" id="facebook-signup-btn">
      <a href="#">Sign in with facebook</a>
      <i class="fab fa-facebook-square" style="color: black; font-size: 20px;"></i>
    </a-button>
    <div style="display: flex;" class="alternative-container">
      <hr style="width:40%; background-color: #bf0505; margin: 41px 0px 0px 70px;">
      <p id="alternative">Or</p>
      <hr style="width:40%; background-color: #bf0505; margin-top: 41px; margin-left: 19px;" >
    </div>
    </div>
    </a-col>
    <a-col :sm="{ span: 5, offset: 5}" :lg="{ span: 10, offset: 2}">
    <a-form
    id="components-form-demo-normal-login"
    :form="form"
    @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
        placeholder="Email"
        >
      <a-icon slot="prefix" type="message" style="color: rgba(0,0,0,.25)"/>
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
    <a-form-item >
      <a href="#" class="login-form-forgot">
        Forgot password
      </a><br>
      <a-button type="" html-type="submit" class="login-form-button">
        <a href="#">Login</a>
      </a-button>
    </a-form-item>
  </a-form>
    </a-col>
    </a-row>
    </section>
  </div>
</template>

<script>
  import utils from '@/mixins/utils'
  export default {
    layout: 'plain',
    name: 'login',
    mixins: [utils],

    beforeMount() {

    },

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
  };

</script>

<style scoped>

.nav-bar {
width: 100%;
}

.nav-bar ul {
display: flex;
}

.nav-bar li {
list-style: none;
}

#components-form-demo-normal-login{
    /* margin: 45px 0 0 0; */
}

.login-form-button {
    background: #bf0505;
    color: white;
    padding: 10px 0px 30px 0px;
    max-width: 150px;
    border-radius: 20px;
    border: none;
    font-weight: 800;
    font-size: 1.1em;
    margin-left: 190px;
    margin-top: 29px;
    width: 50%;
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

.sign-up-text{
   text-align: center;
   margin: 82px 0 0 0px;
}
.sign-up-text a {
    color: #bf0505;
    text-decoration: none;
}

.sign-up-text p {
  color: rgba(0,0,0,.50);
}

.sign-up-text h3 {
    font-size: 2.4em;
    font-weight: 900;
}

#google-signup-btn  {
    background-color: white;
    box-shadow: 0 2px 5px 0 black;
    border: 1px solid white;
    border-radius: 10px;
    padding: 12px 10px 31px 20px;
    margin: 20px 35px 0px 0px;
}

#google-signup-btn a {
  color: rgba(0,0,0,.50);
}

#facebook-signup-btn  {
    background-color: skyblue;
    box-shadow: 0 2px 5px 0 black;
    border: 1px solid skyblue;
    border-radius: 10px;
    padding: 12px 10px 31px 20px;
    margin: 20px 35px 0px 0px;
}

#facebook-signup-btn a {
  color: white;
  font-size: ;
  font-weight: 0;
  padding: 0 20px 0 4px;
}

#alternative {
  margin: 27px 0px 0px 13px;
}

.google{
    padding: 0 10px 0 20px;
}

.login-form-forgot {
    color: #bf0505;
    float: right;
    text-decoration: none;
}

.login-form-forgot:hover {
    text-decoration: none;
    color: #bf0505;
}

@media only screen and (max-width: 600px) {
  #components-form-demo-normal-login {
    margin-left: 35px;
    width: 80%;
  }
  .img-container img {
    width: 100%;
    height: 100%;
  }
.sign-up-text {
  margin-left: 40px;
}

.login-form-button {
  margin-left: 52px;
}

.login-form-forgot {
  margin-right: 10px;
}

.alternative-container hr {
  margin-left: 90;

}

}
</style>
