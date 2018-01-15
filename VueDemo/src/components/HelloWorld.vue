<template>
  <div id="HelloWorld">
    <p>姓名:{{fullname}} 年龄:{{age}}</p>
    <input v-model="firstname">
    <input v-model="lastname">
    <input v-model="age">
    <button @click="buttonClick">添加</button>
    <ol>
      <li v-for="people in peopleArr">{{people.name}}今年{{people.age}}岁</li>
    </ol>
    <router-link :to="{ name: 'firstcomponent'}">firstcomponent Page</router-link>
  </div>
</template>



<script>
export default {
  // 定义数据
  data () {
    return {
      age: '',
      lastname: '',
      firstname: '',
      peopleArr: [
        {
          name: 'John Fet',
          age: '18'
        },
        {
          name: 'John Sam',
          age: '20'
        },
        {
          name: 'John Arm',
          age: '38'
        }
      ]
    }
  },
  // 定义方法
  methods: {
    buttonClick: function () {
      var object = {name: this.fullname, age: this.age}
      this.peopleArr.push(object)
    }
  },
  // 计算属性
  computed: {
    fullname () {
      return this.firstname + ' ' + this.lastname
    }
  },
  // 添加定义组件
  components: {

  }
}
</script>

<style>

</style>
