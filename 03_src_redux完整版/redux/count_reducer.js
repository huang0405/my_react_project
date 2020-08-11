// 定义为Count组件服务的reducer(reducer中最好不要写业务逻辑)
import {INCREMENT,DECREMENT} from './constant'

const initState = 0
function countReducer (preState=initState,action) {
  const {type,data} = action
  // 根据type的类型，决定接下来干什么
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
export default countReducer
