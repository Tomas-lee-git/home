<template>
  <div class="incomplete">
    <h3>Incomplete</h3>
    <div class="wrap">
      <el-input
        v-model="value"
        placeholder="请输入需要处理的事项呀"
        :autofocus="true"
        clearable
      >
      </el-input>
      <el-tooltip
        class="item"
        effect="dark"
        content="添加事项，点这里哦"
        placement="top"
      >
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-plus"
          @click="handleClick"
        ></el-button>
      </el-tooltip>

      <List
        kind="inComplete"
        :tasksList="inCompleteTAsksList"
        :handlCompleteTask="handlCompleteTask"
      ></List>
    </div>
  </div>
</template>

<script>
import List from "../List";

export default {
  name: "InComplete",
  components: {
    List,
  },
  props: {
    tasksList: {
      type: Array,
      required: true,
      default: () => [],
    },
    handleAddTasks: {
      type: Function,
      required: true,
      default: () => {},
    },
    handlCompleteTask: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    inCompleteTAsksList() {
      return this.tasksList.filter((item) => !item.isComplete);
    },
  },
  methods: {
    handleClick() {
      this.handleAddTasks(this.value);
    },
    handleComplete(val) {
      this.handlCompleteTask(val);
    },
  },
};
</script>

<style scoped>
.incomplete {
  padding-left: 2rem;
}
.wrap {
  text-align: left;
  width: 80%;
  margin: 0 auto;
}
.el-input {
  width: 60%;
  margin-right: 20px;
}
</style>
