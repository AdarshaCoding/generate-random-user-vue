const app = Vue.createApp({
  template: "<h1> {{message}} </h1>",
  data() {
    return {
      message: "Hello World!",
    };
  },
});

app.mount("#app");
