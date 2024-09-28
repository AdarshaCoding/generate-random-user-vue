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
    async getRandomUser() {
      const data = await fetch("https://randomuser.me/api");
      const json = await data.json();
      const { name, picture, gender, email } = json.results[0];

      this.firstName = name.first;
      this.lastName = name.last;
      this.emailId = email;
      this.gender = gender;
      this.picture = picture.large;
    },
  },
});

//mounting the application into root element id="app"
app.mount("#app");
