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
  methods: {
    getRandomUser() {
      this.firstName = "Deepashree";
      this.lastName = "PK";
      this.emailId = "deepa@gmail.com";
      this.gender = "female";
      this.picture =
        "data:image/jpeg;base64,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";
    },
  },
});

//mounting the application into root element id="app"
app.mount("#app");
