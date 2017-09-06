import Mock from 'mockjs';

export default Mock.mock('http://alliance', {
  'list|1-10': [{
  	'id|+1': 1,
  	'value':  '@name',
    'label|1-10' : 1
  }]
});
