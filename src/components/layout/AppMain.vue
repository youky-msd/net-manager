<template>
  <section class="app-main">
    <div id="app-loading" v-show="_user.loading">
      <div class="loading-mask">
        <div class="loading-body">
          <i class="ui-loading loading-icon"></i>
          <p class="loading-content">正在加载</p>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import LoginDialog from '@/components/widgets/LoginDialog'
import { mapGetters } from 'vuex'

export default {
  name: 'app-main',

  computed: mapGetters({
    _user: '_user'
  }),

  components: {
    LoginDialog
  }
}
</script>

<style lang='scss' scoped>
.app-main {
  position: relative;
  margin: 0 auto;
  padding: 0;
}
.container {
  margin:0 auto;
}
.el-loading-mask {
  z-index: 9;
}

#app-loading{
  .loading-mask{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index: 9999;
  }
  .loading-body{
    position:fixed;
    z-index: 5000;
    width:8rem;
    min-height:8rem;
    left: 50%;
    margin-left:-4rem;
    top: 50%;
    margin-top:-4rem;
    background:rgba(17,17,17,0.7);
    text-align: center;
    border-radius: 5px;
    color: #fff;

    .ui-loading{
      margin:1rem 0;
    }
    .loading-icon{
      width: 3rem;
      height: 3rem;
      display: inline-block;
      vertical-align: middle;
      -webkit-animation: uiLoading 1s steps(12, end) infinite;
      animation: uiLoading 1s steps(12, end) infinite;
      background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
      background-size: 100%;
    }
    .loading-content{
      margin:0 0 15px;
      text-align: center !important;
    }

    @-webkit-keyframes uiLoading {
      0% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
                transform: rotate3d(0, 0, 1, 0deg);
      }
      100% {
        -webkit-transform: rotate3d(0, 0, 1, 360deg);
                transform: rotate3d(0, 0, 1, 360deg);
      }
    }
    @-moz-keyframes uiLoading {
      0% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
                transform: rotate3d(0, 0, 1, 0deg);
      }
      100% {
        -webkit-transform: rotate3d(0, 0, 1, 360deg);
                transform: rotate3d(0, 0, 1, 360deg);
      }
    }
    @keyframes uiLoading {
      0% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
                transform: rotate3d(0, 0, 1, 0deg);
      }
      100% {
        -webkit-transform: rotate3d(0, 0, 1, 360deg);
                transform: rotate3d(0, 0, 1, 360deg);
      }
    }
  }

}
</style>
