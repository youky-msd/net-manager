export default {
  name: 'Kafka',
  path: '/kafka',
  children: [
    {
      name: 'kafkaList',
      path: 'kafkalist',
      file: 'kafkaList'
    },
    {
      name: 'kafkaCreate',
      path: 'kafkacreate',
      file: 'kafkaCreate'
    }
  ]
}

