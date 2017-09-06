import Mockjs from 'mockjs'

export default Mockjs.mock('http://organizegroups', {
    'list|1-10': [{
        'name': '@name',
        'value|0-10': 1
    }]
})