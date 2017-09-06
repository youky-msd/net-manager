<template>
  <nav>
    <div class="header-left">
      <router-link to="/" title="回首页">
        <img src="../../assets/logoicon.png">
      </router-link>
    </div>
    <div class="header-right">
      <el-dropdown class="header-item" :key="index" v-for="(item, index) in menuArray">
        <el-button type="primary">
          {{ item.title }}
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :key="index" v-for="(con, index) in item.children">
            <router-link :to="con.link" @click="getLink">
              {{ con.name }}
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </nav>
</template>

<script>
import menu from '@/router/navi-menu.js'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app-header',
  data () {
    return {
    }
  },

  methods: {
    getLink () {
      console.log('e')
    }
  },

  computed: {
    ...mapGetters({
      _user: '_user'
    }),
    menuArray () {
      return menu
    }
  },

  watch: {
    '$route.path' (path) {
    }
  }
}
</script>

<style lang='scss' scoped>
/* 所有按钮样式都在app.scss中处理 */
@import "../../styles/variables.scss";
nav {
  display: flex;
  flex-direction: row;
  height: 4rem;
  align-items: center;
  border: 0px;
  box-shadow: 0px 5px 10px 0px #e5e5e5;
  width: 100%;
  margin: 0px;
  box-sizing: border-box;
  background-color: $nav-btn-bgk;
  color: $theme-color;
  text-align: center;
}
.header-left {
  flex: 3;
  > img {
    width: auto;
    height: auto;
    background-position: center;
    background-size: contain;
  }
}
.header-right {
  flex: 7;
  display: inline-flex;
  .header-item {
    margin-left: 1rem;
    .el-button {
      font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
      font-weight: 600;
      color: rgba(85, 85, 85, .8);
    }
  }
}
</style>
