import {request} from './request'
export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoodsData(type,page){
  return request({
    url:'/home/data',
    // 在地址栏后面传递参数
    params:{
      type,
      page
    }
  })
}