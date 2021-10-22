import methods from '@/api/methods'
import { obj2FormData, stringifyObj } from '@/utils/util'

export default function request(url, method, data = null, type = 0) {
    if (method === methods.GET || method === methods.DELETE) {
        return { url: url, method: method, params: data }
    } else {
        if (type === 0) {
            return { url: url, method: method, data: stringifyObj(data) }
        }
        if (type === 1) {
            return { url: url, method: method, data: data }
        } else {
            return { url: url, method: method, data: obj2FormData(data) }
        }
    }
}
