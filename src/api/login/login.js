import $axios from '@/api/index.js'

export function login(data) {
  const url = '/user/login'
  return $axios.post(url, data)
}

export function getRouter() {
  const url = '/user/getRouter'
  return $axios.post(url)
}
export function getInfo() {
  const url = '/user/getInfo'
  return $axios.post(url)
}
