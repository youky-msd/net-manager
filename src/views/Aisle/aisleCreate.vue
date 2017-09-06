<template>
  <article>
    <ul class="header">
      <li class="title">
        <h5>创建通道</h5>
      </li>
      <li class="btn-container">
        <el-button>查看已建立的通道</el-button>
      </li>
    </ul>
    <div class="middle">
      <div class="title">
        <h5>创建步骤</h5>
      </div>
      <div class="middle-left">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="选择区块链网络" prop="netname">
            <el-select v-model.trim="form.netname">
              <el-option v-for="(item,index) in baasnets" :value="item.value" :lable="item.label" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择联盟" prop="alliance">
            <el-select v-model="form.alliance">
              <el-option v-for="(item,index) in alliances" :value="item.value" :lable="item.label" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="应用组织" prop="applicationdell">
            <multi-select v-model="captchValue" data-value="form.applicationdell" :candidates="candidateArray" style="height: 10rem;"></multi-select>
          </el-form-item>
          <el-form-item label="Kafka集群" prop="kafkagroup">
            <el-select v-model="form.kafkagroup">
              <el-option v-for="(item,index) in kafkagroups" :value="item.value" :lable="item.label" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Kafka集群" prop="kafkagroup">
            <el-select v-model="form.kafkagroup">
              <el-option v-for="(item,index) in kafkagroups" :value="item.value" :lable="item.label" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="排序服务节点" prop="ordernode">
            <el-select v-model="form.ordernode">
              <el-option v-for="(item,index) in ordernodes" :value="item.value" :lable="item.label" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="排序组织" prop="orderorganize">
            <el-select v-model="form.orderorganize">
              <el-option v-for="(item,index) in orderorganizes" :value="item.value" :lable="item.label" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click.stop.prevent="createAisle">创建通道</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </article>
</template>
<script>
// 测试接口使用的mockdata 
import data from '../../utils/mocks/baasnets';
import data2 from '../../utils/mocks/alliances';
import data3 from '../../utils/mocks/ordernode';
import data4 from '../../utils/mocks/orderorg';
import data5 from '../../utils/mocks/kafkagroup';
import data6 from '../../utils/mocks/organizegroup';

export default {
  name: 'home-page',
  data () {
    return {
      form: {
        netname: '',
        alliance: '',
        applicationdell: '',
        kafkagroup: '',
        ordernode: '',
        orderorganize: ''
      },
      rules: {
        netname: [
          { required: false, message: '请选择业务', trigger: 'change' }
        ],
        alliance: [
          { required: false, message: '请选择节点类型', trigger: 'change' }
        ],
        applicationdell: [
          { required: false, message: '请填写申请说明', trigger: 'blur' }
        ],
        kafkagroup: [
          { required: false, message: '请选择kafka集群', trigger: 'blur' }
        ],
        ordernode: [
          { required: false, message: '请填写业务名称', trigger: 'blur' }
        ],
        orderorganize: [
          { required: false, message: '请填写业务描述', trigger: 'blur' }
        ]
      },
      baasnets: [],
      alliances: [],
      applicationdells: [],
      kafkagroups: [],
      ordernodes: [],
      orderorganizes: [],
      candidateArray: [],
      captchValue: []
    }
  },
  watch: {
    'form.netname' (newdata) {
      this.getalliance().then(res => {
        this.form.alliance = res[0].value;
        this.alliances = res;
      }).catch(err => {
        console.log('getalliance',err);
      })
    },
    'form.alliance' (newdata) {
      this.getordernode().then(res => {
        this.form.ordernode = res[0].value;
        this.ordernodes = res;
      }).catch(err=>{
        console.log('getordernode', err);
      });
      this.getorganizenode().then(res => {
        this.form.orderorganize = res[0].value;
        this.orderorganizes = res;
      }).catch(err=>{
        console.log('getorderorganize', err);
      });
    },
    'form.applicationdell' (newdata) {
      console.log(newdata);
    },
    'form.ordernode' (newdata) {
      console.log(newdata)
    },
    'form.orderorganize' (newdata) {
      console.log(newdata)
    }
  },
  mounted () {
    this.getnet();
    this.getkafkagroup().then(res => {
      this.form.kafkagroup = res[0].value;
      this.kafkagroups = res;
    }).catch(err =>{
      console.log('getkafkagroup：', err);
    });
    this.getorganizegroups().then(res => {
      this.candidateArray = res;
    }).catch(err => {
      console.log('getorganizegroups: ', err);
    });
  },
  methods: {
    getnet () {
      this.$http.post('http://baasnets').then(res => {
        let netlist = res.data.list
        this.form.netname = netlist[0].value
        this.baasnets = netlist
      }).catch(err => {
        console.log('getbaasnet', err);
      })
    },
    getalliance () {
      return new Promise((resolve,reject)=>{
        this.$http.post('http://alliance').then(res=>{
          let allianceArr = res.data.list;
          resolve(allianceArr);
        }).catch(err => {
          reject(err);
        })
      });
    },
    getordernode () {
      return new Promise((resolve, reject) => {
        this.$http.post('http://ordernode').then(res => {
          let ordernodelist = res.data.list;
          resolve(ordernodelist);
        }).catch(err => {
          reject(err)
        })
      })
    },
    getorganizenode () {
      return new Promise((resolve, reject) => {
        this.$http.post('http://orderorg').then(res => {
          let orderorglist = res.data.list;
          resolve(orderorglist);
        }).catch(err => {
          reject(err)
        })
      })
    },
    getkafkagroup () {
      return new Promise((resolve,reject) => {
        this.$http.post('http://kafkagroup').then(res => {
          let kafkagrouplist = res.data.list;
          resolve(kafkagrouplist);
        }).catch(err => {
          reject(err);
        })
      })
    },
    getorganizegroups () {
      return new Promise((resolve,reject) => {
        this.$http.post('http://organizegroups').then(res => {
          let organizegrouplist = res.data.list;
          resolve(organizegrouplist);
        }).catch(err => {
          reject(err);
        });
      });
    },
    createAisle () {
      console.log('get from childe component value: ', this.captchValue);
    }
  },

  components: {
  }
}
</script>

<style lang='scss' scoped>
@import "../../styles/viewbase.scss";
.middle-left {
  width: 50%;
  display: block;
  margin-top: 2rem;
  text-align: left;
}
.el-button {
  border-color: $link;
}
</style>
