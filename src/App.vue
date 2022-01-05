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
body{
  margin: 0;
}
*, *:before, *:after {
  box-sizing: inherit;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: 'Poppins';
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}


/* @font-face {
  font-family: 'RNSSanz';
  src: url("RNSSanz-Black.ttf"),
       url("RNSSanz-Black.woff");
  font-weight: normal;
  font-style: normal;
} */

@font-face {
  font-family: 'VisbyCF-Thin';
  src: url("VisbyCF-Thin.otf");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-ThinOblique';
  src: url("VisbyCF-ThinOblique.otf");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-Regular';
  src: url("VisbyCF-Regular.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-RegularOblique';
  src: url("VisbyCF-RegularOblique.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-DemiBoldOblique';
  src: url("VisbyCF-DemiBoldOblique.otf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-DemiBoldOblique';
  src: url("VisbyCF-DemiBoldOblique.otf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-DemiBold';
  src: url("VisbyCF-DemiBold.otf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-Bold';
  src: url("VisbyCF-Bold.otf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-ExtraBold';
  src: url("VisbyCF-ExtraBold.otf");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'VisbyCF-ExtraBoldOblique';
  src: url("VisbyCF-ExtraBoldOblique.otf");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'RNSSanz-Light';
  src: url("RNSSanz-Light.ttf"),
       url("RNSSanz-Light.woff");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'RNSSanz-Normal';
  src: url("RNSSanz-Normal.ttf"),
        url("RNSSanz-Normal.woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'RNSSanz-Medium';
  src: url("RNSSanz-Medium.ttf"),
       url("RNSSanz-Medium.woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'RNSSanz-SemiBold';
  src: url("RNSSanz-SemiBold.ttf"),
       url("RNSSanz-SemiBold.woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'RNSSanz-Bold';
  src: url("RNSSanz-Bold.ttf"),
       url("RNSSanz-Bold.woff");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'RNSSanz-ExtraBold';
  src: url("RNSSanz-ExtraBold.ttf"),
       url("RNSSanz-ExtraBold.woff");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Neon';
  src: url("NEON.ttf");
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
