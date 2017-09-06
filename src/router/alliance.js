export default {
  name: 'Alliance',
  path: '/alliance',
  children: [
    {
      name: 'List',
      path: 'list',
      file: 'allianceList'
    },
    {
      name: 'Create',
      path: 'create',
      file: 'allianceCreate'
    }
  ]
}
