import Vue from 'vue'
import moment from 'moment'
Vue.prototype.$date = (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dataStr).format(pattern)
}

Vue.prototype.$available = val => {
  return val !== undefined && val != null && val !== ''
}
