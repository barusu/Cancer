<style>
  .half {
    display: inline-block;
  }
</style>

<template>
  <div class="user-content">
    <div class="hidden">
      <input type="text">
    </div>
    <div class="subhead">
      <h2>基本信息</h2>
    </div>
    <div class="form">
      <form-group v-model="name" :require="true">昵称</form-group>
      <div class="clearfix">
        <dl class="form-group half">
          <dt>性别</dt>
          <dd>
            <el-radio class="radio" v-model="sex" :label="i + ''" v-for="(s,i) in Map.sex">{{s}}</el-radio>
          </dd>
        </dl>
        <dl class="form-group half">
          <dt>属相</dt>
          <dd>
            <el-select v-model="zodiac" placeholder="请选择">
              <el-option v-for="i in Map.zodiac" :label="i.emoji" :value="i.zh">
                <span class="fl">{{i.zh}}</span>
                <span class="fr">{{i.emoji}}</span>
              </el-option>
            </el-select>
          </dd>
        </dl>
      </div>
      <div class="clearfix">
        <dl class="form-group half">
          <dt>星座</dt>
          <dd>
            <el-select v-model="constellation" placeholder="请选择">
              <el-option v-for="i in Map.constellation" :label="i.emoji" :value="i.zh">
                <span class="fl">{{i.zh}}</span>
                <span class="fr">{{i.emoji}}</span>
              </el-option>
            </el-select>
          </dd>
        </dl>
      </div>
      <div class="action-group">
        <button type="button" class="btn info" :disabled="verify" @click="update">更新基本信息</button>
      </div>
    </div>
  </div>
</template>

<script>
  import formGroup from 'components/form/form-group';
  import store from 'libs/store/lawliet';
  import {MAP} from 'libs/const';
  import $ from 'libs/ajax';

  export default {
    data() {
      return {
        Map: MAP,
        name: store.state.name,
        sex: store.state.sex,
        zodiac: store.state.zodiac,
        constellation: '',
        status: '',
        verify: true,
        lock: false,
        errorMsg: ''
      };
    },
    watch: {
      name: 'updateVerify'
    },
    components: {
      'form-group': formGroup
    },
    methods: {
      updateVerify() {
        this.lock = true;
        this.$nextTick(() => {
          this.verify = this.$children.some((i) => {
            return i.verify === false;
          });
          this.lock = false;
        });
      },
      update() {
        var that = this;
        if(!this.lock && !this.verify) {
          this.status = "loading";
          $.post('account', {
            methods: 'chang_password'
          }, (data) => {
            if(data && data.status) {
              that.status = 'success';
              console.log(data);
            }else {
              that.status = 'error';
              that.errorMsg = data.info || '未知错误';
            }
          });
        }
      }
    },
    computed: {
      confirmVerify() {
        if(this.confirmPassword && this.confirmPassword !== this.newPassword) {return false;}
        else {return true;}
      }
    }
  }
</script>
