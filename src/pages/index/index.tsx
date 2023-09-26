import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Content from './components/content/index'
import './index.scss'

const Index = () => {
  return (
    <View className='index'>
      <View className='header'>简历优化助手</View>
      <Content />
    </View>
  )
}

export default Index
