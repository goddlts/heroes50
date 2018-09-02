<template>
  <div>
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="txtgender">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    // 根据id，获取英雄的详细信息
    loadData() {
      axios
        .get(`http://127.0.0.1:3001/heroes/${this.id}`)
        .then((response) => {
          this.formData = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 修改英雄
    handleEdit() {
      axios
        .put(`http://127.0.0.1:3001/heroes/${this.id}`, this.formData)
        .then((response) => {
          if (response.status === 200) {
            // 修改成功，跳转到列表页面
            this.$router.push('/heroes');
          } else {
            alert('修改失败');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>
