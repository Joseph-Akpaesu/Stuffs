<template>
<div>
    <div class='nav-bar' style="position: absolute; z-index: 1; margin: 20px 0px 0px 40px;">
    <ul>
        <li>
            <a href="#"><img src="~/assets/img/Group 10.png" alt="" width="50px"></a>
        </li>
    </ul>
    </div>
    <section>
    <a-row>
    <a-col :sm="{ span: 6, offset: 10}" :lg="{ span: 10, offset: 0 }">
    <div>
       <img src="~/assets/img/Group 113.png" alt="" width="520px" height="688px">
    </div>
    </a-col>
    <a-col :sm="{ span: 11, offset: 10}" :lg="{ span: 8, offset: 5}">
    <div class="sign-up-text">
      <h3>Sign-up</h3>
      <p>Already hava an account? <a href="#">login</a></p>
    <a-button type="" id="google-signup-btn">
      <a href="#">Sign up with google</a>
      <i class="fab fa-google google" style="color: black;"></i>
    </a-button>
    </div>
    <a-form
    id="components-form-demo-normal-login"
    :form="form"
    @submit="handleSubmit">
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
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      class="login-form-agreement" >
           I agree to the terms of service and privacy policy
      </a-checkbox><br>
      <!--<a href="#" class="login-form-forgot">
        Forgot password
      </a>-->
      <a-button type="" html-type="submit" class="login-form-button">
        <a href="#">Register</a>
      </a-button>
    </a-form-item>
  </a-form>
    </a-col>
    </a-row>
    </section>
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
};
</script>

<style >
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
    margin: 75px 70px 0 -150px;

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
}

.sign-up-text{
   text-align: center;
   margin: 80px 0 0 -200px;
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
    margin: 20px 0 0 0;
}

#google-signup-btn a {
  color: rgba(0,0,0,.50);
}

.google{
    padding: 0 10px 0 20px;
}

/*.login-form-forgot {
    color: #bf0505;
    float: right;
    text-decoration: none;
}

.login-form-forgot:hover {
    text-decoration: none;
    color: #bf0505;
}*/

.login-form-agreement {
  color: #bf0505;
}

</style>
