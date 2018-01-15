<template>
  <div id="HelloWorld">
    <app-banner :listImg="listImage"></app-banner>
    <p>姓名:{{fullname}} 年龄:{{age}}</p>
    <input v-model="firstname">
    <input v-model="lastname">
    <input v-model="age">
    <button @click="addClick">添加</button>
    <ul>
      <li v-for="(people, index) in peopleArr">{{people.name}}今年{{people.age}}岁<button @click="deleteClick(index)">删除</button></li>
    </ul>
    <router-link :to="{ name: 'firstcomponent'}">firstcomponent Page</router-link>
  </div>
</template>

<script>
  import bannerA from '../assets/bannerA.png'
  import bannerB from '../assets/bannerB.png'
  import Banner from '../components/Banner.vue'
  export default {
  // 定义数据, 初始化数据, 绑定数据源
    data () {
      return {
        age: '',
        lastname: '',
        firstname: '',
        listImage: [
          {url: bannerA},
          {url: bannerB}
        ],
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
      // 添加item
      addClick: function () {
        var object = {name: this.fullname, age: this.age}
        this.peopleArr.push(object)
        console.log(this.peopleArr + this.peopleArr.length)
      },
      // 删除item
      deleteClick: function (index) {
        // this.peopleArr.forEach(function(people) {
        //   if (people.age === age) {
        console.log(index)
        this.peopleArr.splice(index, 1)
        console.log(this.peopleArr)
        //   }
        // });
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
      'app-banner': Banner
    }
}
</script>

<style>

</style>
