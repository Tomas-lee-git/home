<template>
  <div class="check-role">
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="IsCheckAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <el-checkbox-group
      v-model="checkedRoles"
      @change="handleCheckedRolesChange"
    >
      <el-checkbox v-for="role in roles" :label="role" :key="role.key">{{
        role.value
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
const roleOptions = [
  { value: "宝宝", key: "lady" },
  { value: "卜卜", key: "lord" },
];

export default {
  name: "CheckRole",
  props: {
    changeRoles: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      IsCheckAll: true,
      checkedRoles: roleOptions,
      roles: roleOptions,
      isIndeterminate: false,
    };
  },
  watch: {
    checkedRoles(val) {
      this.changeRoles(val);
    },
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedRoles = val ? roleOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedRolesChange(value) {
      let checkedCount = value.length;
      this.IsCheckAll = checkedCount === this.roles.length;
      this.isIndeterminate = checkedCount !== 0 && !this.IsCheckAll;
    },
  },
};
</script>

<style scoped>
.check-role {
  /* text-align: left; */
}
.el-checkbox-group {
  display: inline-block;
}
.el-checkbox:last-of-type {
  margin-right: 30px;
}
</style>
