import request from '@/utils/request'
import qs from 'qs'


export function GetAllSensor(query) {
    return request({
        url: '/api/sensor/all/page',
        method: 'get',
        params:query
    })
}
