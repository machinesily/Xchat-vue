import axios from 'axios'


export function request(config) {
  // 创建axios实例
  const service = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    timeout: 10000
  })

  return service(config)

  // 拦截器
  // service.interceptors.request.use(config => {
  //   /** 设置令牌 */
  //   let accessToken = Storage.getItem('token')
  //   if (accessToken) {
  //     config.headers['Authorization'] = accessToken
  //   }
  //   return config
  // }, err => {
  //   Promise.reject(err)
  // })
}