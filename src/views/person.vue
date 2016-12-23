<style>
  .table-content {
    margin: 1em;
  }
  td > input {
    background: none;
  }
  table.person th:nth-child(1) {width: 40px; min-width: 40px; max-width: 40px;}
  table.person th:nth-child(2) {width: 3000px; min-width: 50px;}
  table.person th:nth-child(3) {width: 75px; min-width: 75px; max-width: 75px;}
  table.person th:nth-child(4) {width: 150px; min-width: 150px;}
  table.person th:nth-child(5) {width: 200px; min-width: 200px;}
</style>

<template>
  <div class="person-page">
    <div class="person-head"></div>
    <div class="person-body">
      <div class="table-wrapper">
        <div class="table-content">
          <table class="table person">
            <thead>
              <tr>
                <th class="sequence"></th>
                <th>name</th>
                <th>sex</th>
                <th>birth</th>
                <th>idcard</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in person" @dblclick.stop="editThis($index)" :class="{'select': $index == editRow}">
                <td v-html="sequence($index)" class="sequence"></td>
                <td> <input type="text" v-model="r.name" v-if="$index == editRow"> <span v-else v-html="r.name"></span> </td>
                <td> <input type="text" v-model="r.name" v-if="$index == editRow"> <span v-else v-html="Map.sex[r.sex]"></span> </td>
                <td> <input type="text" v-model="r.birth" v-if="$index == editRow"> <span v-else v-html="r.birth"></span> </td>
                <td> <input type="text" v-model="r.idcard" v-if="$index == editRow"> <span v-else v-html="r.idcard"></span> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <input type="text" name="name" placeholder="name" v-model="person.name">
    <input type="text" name="sex" placeholder="sex" v-model="person.sex">
    <input type="text" name="birth" placeholder="birth" v-model="person.birth">
    <input type="text" name="idcard" placeholder="idcard" v-model="person.idcard">
    <button class="btn info" type="button" @click="show">查看</button>
    <button class="btn info" type="button" @click="save">保存</button>
  </div>
</template>

<script>
  import Api from 'libs/api.js';
  import Map from 'libs/map.js';

  export default {
    data () {
      return {
        Map: Map,
        person: {
          name: '',
          sex: '',
          birth: '',
          idcard: ''
        },
        person: [],
        editRow: -1
      };
    },
    methods: {
      editThis(index) {
        this.editRow = index;
      },
      show() {
        var _this = this;
        this.$http.options.emulateJSON = true;
        this.$http.get(Api.getPersonUrl, {emulateJSON: true}).then(({data}) => {
          data = JSON.parse(data);
          console.log(data);
        },(argument) => {
          console.log(argument);
        });
      },
      save() {
        var _this = this;
        this.$http.options.emulateJSON = true;
        this.$http.post(Api.addPersonUrl, this.person, {emulateJSON: true}).then(function (argument) {
          console.log(argument);
        },function (argument) {
          console.log(argument);
        });
      },
      sequence(index) {
        return index + 1;
      }
    },
    components: {},
    created() {
      var _this = this;
      this.$http.get(Api.getPersonUrl, {emulateJSON: true}).then(({data}) => {
        data = JSON.parse(data);
        if (data.length) {
          _this.person = data;
        }
      },(argument) => {
        console.log(argument);
      });
    },
    ready () {},
    beforeDestroy () {},
  }
</script>
