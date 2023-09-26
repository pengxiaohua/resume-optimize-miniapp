import Taro from '@tarojs/taro'
import { View, Button, Picker } from '@tarojs/components'

import { mockData } from '../../mock'
import './index.scss'

const Content = () => {
  const handleUpload = () => {
    // Handle PDF upload
  }

  const handleJobTypeChange = (e) => {
    // Handle job type change
  }

  return (
    <View className='content'>
      <Button onClick={handleUpload}>上传简历</Button>
      <Picker mode='selector' range={mockData.jobTypes} onChange={handleJobTypeChange}>
        <View className='picker'>选择职业类型</View>
      </Picker>
      {/* Other components and logic */}
    </View>
  )
}

export default Content
