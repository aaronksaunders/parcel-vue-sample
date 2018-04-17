# Parcel with Vue.js
Blazing fast, zero configuration web application bundler

- https://parceljs.org/


## Getting Started

create new project directory and run the following commands in the new directory
```
npm install --save vue
npm install --save-dev parcel-bundler
```
Add the following lines in the newly create `package.json` file
```
"scripts": {
  "start": "parcel index.html"
}
```
Create an `index.html` file with the following code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Parcel Vue.js Example</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./src/app.js"></script>
  </body>
</html>
```
Create a `src` directory and add the file `app.js` and add the basic information for a `vue.js` application
```javascript
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
])
```
finally create a vue file `App.vue`
```javascript
<template>
  <div id="app" class="a">
    <h1>Hello {{ title }} 🚀</h1>
    <p>📦 Parcel Vue.js using v1.7 </p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Vue.js with Parcel"
    };
  }
};
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333333;
  margin-top: 60px;
}
</style>
```
now in the terminal type the following
```console
yarn run start
```

## Referenced Content
- vuejs.org
- https://github.com/parcel-bundler/parcel/issues/732

- http://blog.rangle.io/finding-your-gateway-to-learning-vue/
