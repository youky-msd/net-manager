import Mock from 'mockjs';

export default Mock.mock('http://mockjs', {
	// "status": 200,
	// "data|1-9": [{
	//   "userName" : '@name',
	//   "age|1-100":  100,
	//   "color"    : "@color",
	//   "date"     : "@date('yyyy-MM-dd')",
	//   "url"      : "@url()",
	//   "content"  : "@cparagraph()"
	// }]
	'list|1-10': [{
    'id|+1': 1
  }]
})