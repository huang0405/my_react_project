// 此文件是定义为count组件服务的reducer

const initState = 0
function countReducer (preState=initState,action) {
  // 从action中获取type、data
  const {type,data} = action
  // 根据type的类型，决定接下来干什么
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}
export default countReducer
