// 定义为Count组件服务的cationCreator，专门用于创建和Count组件相关的action对象
import {INCREMENT,DECREMENT} from './constant'
// 创建加的action
export const incrementAction = number => ({type:INCREMENT,data:number})

// 创建等等再加的action
export const incrementWaitAction = number => {
  return (dispatch) => {
    // 用setTimeout模拟一个异步代码
    setTimeout(() => {
      // 调用同步action-incrementAction实现加
      dispatch(incrementAction(number))
    }, 500);
  }
}

// 创建减的action
export  const decrementAction = number => ({type:DECREMENT,data:number})
