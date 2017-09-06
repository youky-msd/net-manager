export default {
  name: 'Organize',
  path: '/organize',
  children: [
    {
      name: 'organizeList',
      path: 'organizelist',
      file: 'organizeList'
    }, {
      name: 'organizeCreate',
      path: 'organizecreate',
      file: 'organizeCreate'
    }
  ]
}
