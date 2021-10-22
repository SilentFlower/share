import { axios } from '@/utils/request'
import methods from '@/api/methods'
import request from '@/api/request'

const api = {
    getProduct: data => request('/html/product', methods.GET, data),
    getGroupProduct: data => request('/html/groupBuy', methods.GET, data)
}
export function getProduct(id) {
    return axios(api.getProduct(id))
}
export function getGroupProduct(id) {
    return axios(api.getGroupProduct(id))
}
