//create Vue app using Vue.createApp function, which takes an object
const app = Vue.createApp({
  data() {
    return {
      firstName: "Adarsha",
      lastName: "PC",
      emailId: "adarsha@gmail.com",
      gender: "male",
      picture:
        "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
    };
  },
});

//mounting the application into root element id="app"
app.mount("#app");
