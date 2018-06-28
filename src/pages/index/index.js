import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

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
      </View>
    )
  }
}

