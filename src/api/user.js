import { param } from '@/utils'
import request from '@/utils/request'
import qs from 'qs'

export function login(data) {
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

export function getAllUser(query){
  return request({
    url: '/api/manager/all/user',
    method: 'get',
    params:query
  })
}

export function deleteUser(data){
  return request({
    url: '/api/manager/delete/user',
    method: 'post',
    data:qs.stringify(data),
  })
}

export function updateUser(data){
  return request({
    url: '/api/manager/update/user',
    method: 'post',
    data:qs.stringify(data),
  })
}


export function registerUser(data){
  return request({
    url: '/api/auth/register',
    method: 'post',
    data:qs.stringify(data),
  })
}