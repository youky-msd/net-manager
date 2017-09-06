export default {
  name: 'Ordernode',
  path: '/ordernode',
  children: [
    {
      name: 'orderList',
      path: 'orderlist',
      file: 'orderNodeList'
    },
    {
      name: 'orderCreate',
      path: 'ordercreate',
      file: 'orderNodeCreate'
    }
  ]
}

