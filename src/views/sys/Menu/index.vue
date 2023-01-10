<template>
  <el-table :data="state.data" style="width: 100%; margin-bottom: 20px" row-key="id" border default-expand-all>
    <el-table-column type="selection" width="55" />
    <el-table-column prop="path" label="路径" sortable />
    <el-table-column prop="component" label="component" sortable />
    <el-table-column prop="meta.title" label="name" sortable />
  </el-table>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, reactive } from "vue";
import { getMenulist } from "./api";
const state = reactive({
  data: []
});
const tableData: any[] = reactive([]);
const getlist = async () => {
  const res: any = await getMenulist({});
  console.log(res);

  state.data = res.data.datalist;
  console.log(state.data, "tableData");
};
onMounted(() => {
  nextTick(() => {
    getlist();
  });
});
</script>
<style lang="scss" scoped></style>
