/**
 * 防抖函数
 * @param {函数} fn 
 * @param {时间，毫秒为单位} delay 
 */
export function debounce(fn,delay){
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,args)
    },delay)
  }
}