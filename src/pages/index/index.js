import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
import './index.css'

// import { add, minus, asyncAdd } from '../../actions/counter'
import * as Actions from '../../actions/counter'

function mapStateToProps(state) {
  return {
    counter: state.counter.toJS()
  }
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick = () => {
    Taro.navigateTo({
      url: '/pages/detail/detail'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.onClick}>世界你好</Text>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.minus}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View>
      </View>
    )
  }
}

