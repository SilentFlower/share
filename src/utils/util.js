import qs from 'qs'

export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome() {
  const arr = ['']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader(callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function() {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE() {
  const bw = window.navigator.userAgent
  const compare = s => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate(id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}

export function obj2FormData(obj) {
  let form_data = new FormData()
  for (let key in obj) {
    form_data.append(key, obj[key])
  }
  return form_data
}

export function stringifyObj(obj){
  return qs.stringify(obj)
}

//对于n个集合的排列
export function doExchange(arr) {
  var len = arr.length
  // 当数组大于等于2个的时候
  if (len >= 2) {
    var len1 = arr[0].length // 第一个数组的长度
    var len2 = arr[1].length // 第二个数组的长度
    var lenBoth = len1 * len2 // 2个数组产生的组合数
    var items = new Array(lenBoth) //  申明一个新数组,做数据暂存
    var index = 0 // 申明新数组的索引
    // 2层嵌套循环,将组合放到新数组中
    for (var i = 0; i < len1; i++) {
      for (var j = 0; j < len2; j++) {
        items[index] = arr[0][i] + ',' + arr[1][j]
        index++
      }
    }
    // 将新组合的数组并到原数组中
    var newArr = new Array(len - 1)
    for (var i = 2; i < arr.length; i++) {
      newArr[i - 1] = arr[i]
    }
    newArr[0] = items
    // 执行回调
    return doExchange(newArr)
  } else {
    return arr[0]
  }
}

//解析出url的请求参数
export function getUrlParam(url) {
  var params = {}
  url = /\?/.test(url) && url.split('?')[1]
  var searchs = /\&/.test(url) ? url.split('&') : [url]
  for (var i = 0; i < searchs.length; i++) {
    if (/\=/.test(searchs[i])) {
      var item = searchs[i].split('=')
      params[item[0]] = item[1]
    }
  }
  return params
}

//从请求参数对象转成url参数
export function queryParams(data, isPrefix) {
  isPrefix = isPrefix ? isPrefix : false
  let prefix = isPrefix ? '?' : ''
  let _result = []
  for (let key in data) {
    let value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      continue
    }
    if (value.constructor === Array) {
      value.forEach(_value => {
        _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
      })
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }
  }

  return _result.length ? prefix + _result.join('&') : ''
}

export function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
