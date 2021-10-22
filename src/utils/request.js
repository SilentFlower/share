import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: 'https://fenghe-api.gonglong.shop/v1',
    timeout: 10000, // 请求超时时间
    crossDomain:true
})


export default request

export { request as axios }
