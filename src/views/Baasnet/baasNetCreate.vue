<template>
  <article>
    <ul class="header">
      <li class="title">
        <h5>操作</h5>
      </li>
      <li class="btn-container">
        <el-button>查看已创建</el-button>
      </li>
    </ul>
    <div class="middle">
      <div class="title">
        <h5>创建baas网络</h5>
      </div>
      <div class="middle-left">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="age">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="class">
            <el-input v-model="form.class"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="grade">
            <el-input v-model="form.grade"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>创建网络</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </article>
</template>

<script>
import validate from '@/utils/validation'
export default {
  data () {
    return {
    	form: {
        name: '',
        age: '',
        class: '',
        grade: ''
    	},
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
@import '../../styles/variables.scss';
.middle-left {
  width: 50%;
  display: block;
  margin-top: 2rem;
  text-align: left;
}
</style>
