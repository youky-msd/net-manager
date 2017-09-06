import Mock from 'mockjs';

export default Mock.mock('http://baasnets', {
  'list|1-10': [{
  	'id|+1': 1,
  	'value':  '@name',
    'label|1-10' : 1
  }]
});
