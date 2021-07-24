<template>

  <div class="body">

    <section class="home">
      <div class="image-container">
        <img src="~/assets/img/unsplash.jpg" alt="">
      </div>

      <div class="login-text" >
        <h3>Register on Food App</h3>

        <form action="">
          <label for="uname"></label>
          <input type="text" id="uname" name="uname" placeholder="Joe,Jimmy"><br>
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="JoeJimmy@gmail |"><br>
          <label for="password"></label>
          <input type="password" id="password" name="Password" placeholder="password"><br>
          <label for="Role"></label>
          <select name="Role" id="Role" >
            <div>
              <option value="Role"></option>
              <option value="Customer">Customer</option>
              <option value="Vendor">Vendor</option>
            </div>

          </select>

          <button>
            <a href="#">Sign up</a>
          </button>
        </form>

        <div class="google-sign-up">
          <img src="~/assets/img/logo.png" alt="">
          <a href="#">Sign up with Google</a>
        </div>
        <div class="Alternative">
          <P>Already have an account?</P>
          <a href="#">Sign in</a>
        </div>

      </div>
      <div class="social-background">
        <p>Follow us</p>
        <ul class="social">
          <li >
            <a href="#"><img src="~/assets/img/logo.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="~/assets/img/logo.png" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="~/assets/img/logo.png" alt=""></a>
          </li>
        </ul>
      </div>

    </section>

  </div>

</template>

<script>

  export default {
    data() {
      return {
        formData: {
          role: "",
          name: "",
          email: "",
          password: "",
        },
        // roleError: "",
        // emailError: "",
        // passwordError: "",
      };
    },
//   methods: {
//     handleSubmit() {

//       //validate password
//       // this.passwordError =
//       //   this.password.length > 5
//       //     ? ""
//       //     : "*Password must be at least 6 chars long";
//       console.log(this.formData);
//       this.$http
//         .post("auth/register", this.formData)
//         .then((res) => {
//           console.log("success");
//         })
//         .catch((err) => {
//           console.log("error");
//         });
//     },
//   },
  };
</script>

<style scoped>



  .logo {
    /* font-size: 30px; */
  }

  .nav-bar {
    background-color: white;
    width: 100%;
    height: 11%;
    top: 0%;
  }

  .nav-bar ul {
    display: flex;
    outline: 1px solid rgb(230, 226, 226);
  }

  .nav-bar li {
    list-style: none;
    margin-left: 35px;
    margin-top: 29px;
    margin-bottom: 29px;
  }

  .nav-bar a {
    text-decoration: none;
    color: rgb(110, 110, 110);
    cursor: pointer;

  }

  .login-text  {
    font-size: 1.4em;
    font-weight: 900;
    margin-left: 190px;
    padding-top: 70px;
    letter-spacing: 1px;
    color: black;
  }

  .social {
    left: 25%;
    align-items: center;
    position: absolute;
    bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
  }

  .social li {
    list-style-type: none;
    /* padding-left: 40px;  */
    float: left;
    padding-top: 20px;
  }

  .social li a {
    left: 10%;
    transform: scale(0.6 );
    transition: 0.5s;
    display: flex;
    display: inline-block;
    /* filter: invert(1); */
    margin-right: 30px;
    transform: scale(0.6 );
    transition: 0.5s;
  }

  .social a:hover {
    transform: scale(0.5) translateY(-15px);
  }

  .social-background {
    background-color: rgb(255, 174, 0);
    margin-left: 650px;
    height: 87px;
    position: absolute;
    top: 99%;
    z-index: -1;
    width: 630px;
  }

  .social-background p {
    margin-left: 45px;
    padding-top: 48px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0px;
    color: black;

  }

  .home .image-container img {

    height: 100%;
    right: 0;
    width: 45%;
    position: absolute;
    bottom: 0%;
    top: 73px;

    height: 90%;
    /* right: 0; */
    width: 45%;
    position: absolute;
    /* z-index: -1; */

  }

  input[type=text] {
    outline: none;
    border: none;
    border-bottom: 2px solid rgb(230, 226, 226);
    border-right: 2px solid rgb(55, 177, 55);
    padding: 6px;
    margin-left: 7px;
    width: 250px;
    margin-top: 60px;
    display: inline;
  }

  input[type=email] {
    /* border: 3px solid red; */
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    padding: 6px;
    margin-left: 7px;
    width: 250px;
    margin-top: 45px;
    display: inline;

  }


  input[type=password] {
    /* border: 3px solid red; */
    border: none;
    border-bottom: 2px solid rgb(230, 226, 226);
    outline: none;
    padding: 6px;
    margin-left: 7px;
    width: 250px;
    margin-top: 35px;
    display: inline;
    background-color: #f6f7ff;
  }

  #Role {
    border: none;
    border-bottom: 2px solid rgb(230, 226, 226);
    outline: none;
    padding: 6px;
    margin-left: 7px;
    width: 250px;
    margin-top: 45px;
    display: block;
    background-color: white;
  }


  ::placeholder {
    color: rgb(179, 179, 179);

  }

  #email::placeholder {
    color: rgb(110, 110, 110);
  }

  /* #email:active{
      border-bottom: red;
  } */

  button {
    background-color: rgb(255, 174, 0);
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 20px;
    width: 150px;
    color: white;
    margin-top: 50px;
    margin-left: 52px;
    cursor: pointer;
    box-shadow: 0px 6px 6px  rgb(255, 180, 18);
  }

  button a {
    text-decoration: none;
    /* transform: scale(1.1);
    transition: 0.5s; */
    color: white;
    font-weight: 800;
    font-size: 1.1em;
  }

  /* button:hover{
      box-shadow:2px 2px 5px r
      transform: scale(1) translateY(-8px);
  } */

  /* input[type=text]:focus {} */

  .google-sign-up img {
    transform: scale(0.6 );
    margin-left: 55px;
    margin-top: 55px;
    /* position: absolute; */

  }

  /* .google-sign-up a:hover {
      transform: scale(1) translateY(-8px);
  } */

  .google-sign-up a {
    margin-top: 65px;
    margin-right: 882px;
    font-size: 12px;
    font-weight: 600;
    float: right;
    cursor: pointer;
    letter-spacing: 0;
    text-decoration: none;
    /* transform: scale(1.1);
    transition: 0.5s; */
    color: rgb(110, 110, 110);
  }

  .Alternative {
    font-size: 10px;
    margin-top: 32px;
  }

  .Alternative a {
    text-decoration: none;
    margin-left: 8px;
    font-size: 11px;
    transform: scale(0.5);
    transition: 0.5s;
    /* color: rgb(110, 110, 110); */
    color: rgb(110, 110, 110);
  }

  .a:hover {
    opacity: 1.5;
    transform: scale(0.5) translateY(-15px);
  }

  .Alternative p {
    float: left;
    margin-left: 50px;
    font-size: 11px;
    color: rgb(179, 179, 179);

  }

  h3 {
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif
  }


</style>

