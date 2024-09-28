# generate-random-user-vue

- Created app.js, index.html, style.css
- Used CDN link to get the Vue.js into my project
- app.js:
  - created an app using Vue.createApp
  - mounted on to root element "#app"
  - data() function used to declare all the state variables which can change later based on user events or API data
  - methods --> used to declare all the functions which are used in the template, which can modify the state variables which are declared in the data() function.
  - v-bind : used to bind the events like on:click, images binding with image tag
  - Handled dynamic css using the v-bind, gender values comes from the API and background changed based on the value
- Used : https://randomuser.me/api
