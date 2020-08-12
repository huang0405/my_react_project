// 引入Count的UI组件，用于展示页面
import CountUI from '../components/Count.jsx'
// 引入connect，用于连接
import {connect} from 'react-redux'
// 引入actionCreator
import {
  incrementAction,
  decrementAction,
  incrementWaitAction
} from '../redux/count_action'

// 暴露connect()()生成的容器组件
export default connect (
  state => ({count:state}),
  {
    increment:incrementAction,
    decrement:decrementAction,
    incrementWait:incrementWaitAction,
  }
) (CountUI)
