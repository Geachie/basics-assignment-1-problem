const app = Vue.createApp({
  data() {
    return {
      name: "Paul",
      age: 43,
      addFive: 5,
      myLink:
        "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg",
    };
  },
  methods: {
    myNewAge() {
      return (newAge = this.age + this.addFive);
    },
    randomNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
