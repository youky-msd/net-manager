export default {
    name: 'Aisle',
    path: '/aisle',
    children: [
      {
        name: 'aisleList',
        path: 'list',
        file: 'aisleList'
      },
      {
        name: 'aisleCreate',
        path: 'create',
        file: 'aisleCreate'
      }
    ]
  }
  