import axios from 'axios'
import merge from 'loadsh/merge'
import qs from 'qs'
// import uuid from 'uuid'

// import isAbsoluteURL from 'axios/lib/helpers/isAbsoluteURL'
// import combineURLs from 'axios/lib/helpers/combineURLs'
// import buildURL from 'axios/lib/helpers/buildURL'

const defaultConfig = {
  headers: {'Content-Type': 'application/json'},
  timeout: 10000,
  withCredentials: true,
  paramsSerializer: function (params) {
    return qs.stringify(params, {arrayFormat: 'repeat'})
  },
}

export const createInstance = (config) => {
  config = merge({}, defaultConfig, config)
  const instance = axios.create(config)

  // request
  instance.interceptors.request.use((config) => {
    // console.log(config)
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  // response
  instance.interceptors.response.use((response) => {
    let {data} = response
    return data
  }, (error) => {
    return Promise.reject(error)
  })

  return instance
}

const instance = createInstance()

export default instance
