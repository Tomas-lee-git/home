<template>
  <div class="todo">
    <h1>To Do List</h1>
    <!-- <CheckRole :changeRoles="handleChangeRoles"></CheckRole> -->
    <div class="wrap">
      <el-row :gutter="20">
        <el-col :span="12" :offset="0">
          <InComplete
            :tasksList="tasksList"
            :handleAddTasks="handleAddTasks"
            :handlCompleteTask="handlCompleteTask"
          ></InComplete>
        </el-col>
        <el-col :span="12" :offset="0">
          <Complete
            :tasksList="tasksList"
            :handleDeleteTask="handleDeleteTask"
          ></Complete>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ls from "../../utils/ls";

// import CheckRole from "./CheckRole";
import Complete from "./Complete";
import InComplete from "./InComplete";

const tasksList = ls.get("tasksList") ? ls.get("tasksList") : [];

export default {
  name: "TODO",
  components: {
    // CheckRole,
    InComplete,
    Complete,
  },
  data() {
    return {
      tasksList,
    };
  },
  watch: {
    tasksList(newVal) {
      ls.set("tasksList", newVal);
    },
  },
  methods: {
    handleChangeRoles(roles) {
      this.roles = roles;
      //过滤数据
    },
    handleAddTasks(newContent) {
      if (!newContent.trim()) {
        this.$message({
          message: "请想好要做什么事情哦 😯",
          type: "warning",
          center: true,
          duration: 2000,
        });
        return;
      }
      let isDiff = true;
      this.tasksList.forEach((item) => {
        if (item.value === newContent) {
          isDiff = false;
          this.$message({
            message: "请输入不同的待办事项哦 😯",
            type: "warning",
            center: true,
            duration: 2000,
          });
        }
      });
      if (isDiff) {
        this.tasksList = [
          ...this.tasksList,
          {
            id: this.tasksList.length,
            value: newContent,
            isComplete: false,
            isDelete: false,
          },
        ];
        this.$message({
          message: "待办已添加👍，要努力完成哦",
          type: "success",
          center: true,
          duration: 2000,
        });
      }
    },
    handlCompleteTask(val) {
      this.tasksList = this.tasksList.map((item) => {
        if (item.id === val.id) {
          item.isComplete = true;
        }
        return item;
      });
    },
    handleDeleteTask({ id }) {
      this.tasksList = this.tasksList.filter((item) => item.id !== id);
      this.$message({
        message: "已删除完成事项啦，像秋风般清爽舒服呀😊",
        type: "success",
        center: true,
        duration: 2000,
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1em;
}
</style>
