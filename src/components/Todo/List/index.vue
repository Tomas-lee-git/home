<template>
  <div class="list">
    <ul>
      <li
        v-for="item in tasksList"
        :key="item.id"
        :class="{'is-complete':isCompleted}"
      >
        <el-tooltip
          class="item"
          effect="dark"
          content="完成之后，点这里哦"
          placement="top"
        >
          <el-button
            v-if="!isCompleted"
            size="mini"
            icon="el-icon-check"
            @click="handleComplete(item)"
          >
          </el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="想要删除，点这里哦"
          placement="top"
        >
          <el-button
            v-if="isCompleted"
            size="mini"
            icon="el-icon-delete"
            @click="handleDelete(item)"
          >
          </el-button>
        </el-tooltip>

        <span class="content"> {{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    kind: {
      type: String,
      required: true,
      default: "inComplete",
    },
    tasksList: {
      type: Array,
      required: true,
      default: () => [],
    },
    handleDeleteTask: {
      type: Function,
      required: false,
      default: () => {},
    },
    handlCompleteTask: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    isCompleted() {
      return this.kind === "complete";
    },
  },
  methods: {
    handleComplete(val) {
      this.handlCompleteTask(val);
    },
    handleDelete(val) {
      this.handleDeleteTask(val);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  height: 35px;
  line-height: 35px;
  background-color: #ecf5ff;
  margin-bottom: 5px;
}
.list .el-button--mini {
  margin-left: 10px;
  padding: 5px;
}
.content {
  padding-left: 20px;
}
.is-complete{
  text-decoration: line-through;
}
</style>
