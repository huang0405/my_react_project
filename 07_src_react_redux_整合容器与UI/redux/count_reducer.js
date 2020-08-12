import { INCREMENT, DECREMENT } from './constant.js'

// 为Count组件服务的reducer
const initState = 0
function countReducer (preState=initState,action) {
  const {type,data} = action
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
