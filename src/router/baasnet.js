export default {
  name: 'Baasnet',
  path: '/baasnet',
  children: [
    {
      name: 'baasList',
      path: 'baaslist',
      file: 'baasNetList'
    },
    {
      name: 'baasCreate',
      path: 'baascreate',
      file: 'baasNetCreate'
    }
  ]
}

