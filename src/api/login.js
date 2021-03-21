import {request} from '@/plugins/request.js'

export function login(data) {
  return request({
    url: 'signup/judge',
    method:'post',
    data
  })
}