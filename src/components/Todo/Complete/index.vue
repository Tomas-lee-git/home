<template>
  <div class="complete">
    <h3>已完成事项</h3>
    <div class="wrap">
      <List
        kind="complete"
        :tasksList="completeTAsksList"
        :handleDeleteTask="handleDeleteTask"
      ></List>
    </div>
  </div>
</template>

<script>
import List from "../List";

export default {
  name: "Complete",
  components: {
    List,
  },
  props: {
    tasksList: {
      type: Array,
      required: true,
      default: () => [],
    },
    handleDeleteTask: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    completeTAsksList() {
      return this.tasksList.filter((item) => item.isComplete);
    },
  },
  methods: {},
};
</script>

<style scoped>
.complete {
  padding-left: 2rem;
}
.wrap {
  text-align: left;
  width: 80%;
  margin: 0 auto;
}
</style>
