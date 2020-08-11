// 定义redux中最核心的管理者----store
// 引入createStore，用于创建redux中最核心的对象----store
import {createStore,applyMiddleware} from 'redux'
// 引入countReducer,用于加工Count组建的状态
import countReducer from './count_reducer'
// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'

// 调用createStore可以生成一个store对象
const store = createStore(countReducer,applyMiddleware(thunk))

// 暴露store对象
export default store
