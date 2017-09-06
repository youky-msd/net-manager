// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import { cookie } from 'cookie_js'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import aweIcon from 'vue-awesome/components/Icon'

import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import Toast from '@/components/widgets/Toast'
import MultiSelect from '@/components/widgets/MultiSelect'

import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tree,
  Row,
  Col,
  Icon,
  Tag
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tree)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Tag)

Vue.use(MultiSelect)
Vue.component('icon', aweIcon)
// axios.defaults.baseURL = '/api'
// axios.defaults.withCredentials = true
// axios.defaults.timeout = 5000
Vue.prototype.$http = axios
Vue.prototype.$cookie = cookie
Vue.prototype.$toast = Toast

Vue.config.devtools = process.env.NODE_ENV !== 'prod'
Vue.config.productionTip = false

sync(store, router)

const { state, dispatch } = store

// axios.interceptors.request.use(conf => {
//   dispatch('beginRequest')
//   return conf
// })
// axios.interceptors.response.use(conf => {
//   dispatch('endRequest')
//   return conf
// }, err => {
//   dispatch('endRequest')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
