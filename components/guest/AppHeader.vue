<template>

    <div class="nav-bar">

        <ul>
            <li class="logo">
                <a href="#">Afric foods</a>
            </li>
            <li class="nav-link">
                <a href="#">Home</a>
            </li>
            <li class="nav-link">
                <a href="#">Food</a>
            </li>
            <li class="nav-link">
                <a href="#">About Us</a>
            </li>
            <li class="nav-signin" style="list-style-type: none; position: absolute; right: 200px; top: 32px">
            <a href="#">Sign in</a>
            </li>
            <li class="dropdown" >
            <a href="#" class="dropbtn"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</a>
            <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <div class="dropdown-clear">
            <div class="dropdown-button">
            <button class="click" >
            <a href="#">button</a>
            </button>
            <button class="click">
            <a href="#">button</a>
            </button>
            <button class="click">
            <a href="#">button</a>
            </button>
            </div>
            <button class="clear">
            <a href="#">Clear Wain</a>
            </button>
            </div>
           </div>
           </li>
           </ul>

    </div>

</template>

<script scoped>
export default {

}
</script>


<style scoped>

.nav-bar {
    background-color: white;
    width: 100%;
    top: 0%;
    position: sticky;
    top: 0;
    z-index: 1;
    border-top: 1px solid white;
}

.nav-bar ul {
    display: flex;
    border-bottom: 1px solid  rgb(230, 226, 226);
    top: 0%;
}

.nav-bar .nav-link {
    list-style: none;
    margin-left: 35px;
    margin-top: 15px;
    margin-bottom: 23px;
}

.nav-bar a {
    text-decoration: none;
    /* color: rgb(110, 110, 110);*/
    color: black;
    cursor: pointer;
}

.logo {
font-family: 'Pacifico', cursive;
font-size: 25px;
list-style: none;
margin-top: 0;
margin-right: 19px;
}

 .nav-bar .nav-signin {

}

.dropdown {
list-style: none;
margin-left: 690px;
margin-top: 15px;
}

.dropdown:hover .dropdown-content {
display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f7ff;
  min-width: 240px;
  /*box-shadow:  0px 1px 3px 0px red;*/
  z-index: 1;
  right: 0.0%;
  top: 51px;
}

.dropdown-content a {
  color: black;
  padding-top: 42px ;
  padding-left: 15px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
/*background-color: ;*/
  color: black;

}

.dropdown-clear {
 display: block;
 margin-left: 30%;
 margin-top: 25%;
 margin-bottom: 8%
}

.dropdown-button {
    margin-left: 50px;
    top: 29px;
    position: absolute;
}

button {
    background-color: rgb(255, 174, 0);
    border: none;
    outline: none;
    border-radius: 6px;

}

.click {
margin-bottom: 27%;
 margin-left: 43%;
}

.click a {
    padding: 6px;
}

.clear a {
padding: 7px;
font-size: 15px;

}


.click a:hover {
background-color: rgb(255, 174, 0);
}

.clear {
background-color: rgb(171, 231, 171);

}

.clear a:hover {
    background-color: rgb(171, 231, 171);

}

</style>
