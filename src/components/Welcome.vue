<template>
  <div class="hello">
    <h3>毛喵喵大王和她忠诚的守护者</h3>
    <p>{{ time }}</p>
    <el-link type="primary" @click="handleClick">To Do List</el-link>
  </div>
</template>

<script>
export default {
  name: "Welcome",
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
    handleClick() {
      this.$router.push("/todo");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  font-size: 1em;
  text-decoration: none;
  color: #337ec3;
}
</style>
