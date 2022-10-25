import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
  console.log('login...:')
  console.log(data)
  return request({
    url: '/api/manager/login',
    // headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'post',
    data:qs.stringify(data),
  })
}

export function getInfo() {
  return request({
    url: '/api/auth/detail',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/api/manager/logout',
    method: 'post'
  })
}
