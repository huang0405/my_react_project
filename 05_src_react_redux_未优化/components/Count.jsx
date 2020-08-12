import React,{Component} from 'react'
export default class Count extends Component {
  state = {
    school: '尚硅谷'
  }

  // 加
  increment = () => {
    // 获取用户输入
    const {value} = this.refs.selectedNumber
    // 通知redux加value
    this.props.increment(value*1)
  }

  // 减
  decrement = () => {
    // 获取用户输入
    const {value} = this.refs.selectedNumber
    // 通知redux减value
    this.props.decrement(value*1)
  }

  // 当前求和为奇数，再加
  incrementIfOdd = () => {
    // 获取用户输入
    const {value} = this.refs.selectedNumber
    // 通知redux加value
    this.props.increment(value*1)
  }

  // 等等再加
  incrementWait = () => {
    // 获取用户输入
    const {value} = this.refs.selectedNumber
    // 通知redux加value
    this.props.incrementWait(value*1)
  }

  render () {
    return (
      <div>
				<h1>{this.state.school}-当前求和为:{this.props.count}</h1>
				<select ref="selectedNumber">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>若和为奇数 +</button>&nbsp;
				<button onClick={this.incrementWait}>等一等 +</button>&nbsp;
			</div>
    )
  }
}
