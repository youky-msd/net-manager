<template>
  <article>
    <ul class="header">
      <li class="title">
        <h5>操作</h5>
      </li>
      <li class="btn-container">
        <el-button @click="assign">分配</el-button>
        <el-button @click="run">运行</el-button>
        <el-button @click="add">添加</el-button>
      </li>
    </ul>
    <div class="middle">
      <div class="title">
        <h5>标题</h5>
      </div>
      <el-table :data="tableData"
      border
      highlight-current-row
      ref="singleTable"
      resizable="false"
      @row-click="handleCurrentChange">
      <el-table-column show-overflow-tooltip prop="title" label="名称" width="150"></el-table-column>
      <el-table-column show-overflow-tooltip prop="requesturi" label="请求地址" width="240"></el-table-column>
      <el-table-column show-overflow-tooltip prop="parameters" label="参数" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="method" label="方法" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="status" label="返回状态码" width="140"></el-table-column>
      <el-table-column show-overflow-tooltip prop="createTimeStr" label="创建时间" width="180"></el-table-column>
      <el-table-column show-overflow-tooltip prop="remark" label="错误信息" width="100"></el-table-column>
      <el-table-column show-overflow-tooltip prop="spendTime" label="运行花费时长" width="150"></el-table-column>
      <el-table-column show-overflow-tooltip prop="clientHost" label="客户端Host" width="120"></el-table-column>
      <el-table-column show-overflow-tooltip prop="userAgent" label="客户端" width="80"></el-table-column>
      <el-table-column show-overflow-tooltip prop="createBy" label="使用人" width="80"></el-table-column>
    </el-table>
      <div class="pagination">
        <el-pagination
          @current-change="pageCurrentChange"
          :current-page.sync="page.pageNum"
          :page-size="page.pageSize"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </article>
</template>

<script>
import validate from '@/utils/validation'
var da = [
	{
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}, {
	  title: 'title1',
	  requesturi: '30.30.30.30',
	  parameters: 666,
	  method: 'get',
	  status: '301',
	  createTimeStr: '2017-08-30-19-23',
	  remark: 'error',
	  spendTime: '200ms',
	  clientHost: 'localhost',
	  userAgent: 'mobile',
	  createBy: '李某某'
	}
]
export default {
  data () {
    return {
      tableData: da,
      page: {
        pageNum: 1,
        pageSize: 10
      },
      total: 22
    }
  },
  methods: {
    assign () {
      console.log('assign')
    },
    run () {
      console.log('run')
    },
    add () {
      console.log('add')
    },
    handleCurrentChange (e) {
      console.log('change', e)
    },
    pageCurrentChange (e) {
      console.log('change', e)
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../styles/variables.scss';
</style>
