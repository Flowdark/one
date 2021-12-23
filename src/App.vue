<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Pricing</router-link> |
      <router-link to="/slice">Slice</router-link> |
      <router-link to="/one">One</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
img{
  max-width: 100%;
}
.d-none{
  display: none;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: 'RNSSanz', 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@font-face {
  font-family: 'RNSSanz';
  src: url("/src/assets/fonts/RNSSanz-Normal.ttf") format('trutype');
  src: url("/src/assets/fonts/RNSSanz-Normal.woff") format('woff');
  font-weight: normal;
  font-style: normal;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
