<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ time }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      time: this.getTime(),
    };
  },
  mounted() {
    setInterval(() => {
      this.refresh();
    }, 100);
  },
  methods: {
    getTime() {
      return new Date().toLocaleString();
    },
    refresh() {
      this.time = this.getTime();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
