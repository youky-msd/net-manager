import Mockjs from 'mockjs';

export default Mockjs.mock('http://kafkagroup', {
    'list|1-10': [{
        'id|+1': 1,
        'value': '@name',
        'label|1-10': 1
    }]
})