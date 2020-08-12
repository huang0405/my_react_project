// 引入createStore，用于创建redux中最核心的对象---store
import {createStore,applyMiddleware} from 'redux'
// 引入countReducer，用于加工Count组件的状态
import countReducer from './count_reducer'
// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'

// applyMiddleware用于让store认可异步action的写法
const store = createStore(countReducer,applyMiddleware(thunk))

// 暴露store对象
export default store
