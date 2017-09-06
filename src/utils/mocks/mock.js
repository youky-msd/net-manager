import Mock from 'mockjs';

export default Mock.mock('http://mockjs', {
	'list|1-10': [{
    'id|+1': 1
  }]
})