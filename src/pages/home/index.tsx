import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui'

import { mockData } from './mock'
import './index.scss'

const Home = () => {
  const [pickerValue, setPickerValue] = useState('')

  const handleUpload = () => {
    // Handle PDF upload
  }

  // Handle job type change
  const handleJobTypeChange = (e) => {
    const { jobTypes } = mockData
    const index = e.detail.value
    setPickerValue(jobTypes[index])
  }

  const handleStart = () => {
    Taro.navigateTo({
      url: '/pages/analyze/index',
    })
  }

  return (
    <View className='home'>
      <View className='home__upload-btn' onClick={handleUpload}>
        <AtIcon value='add' size='30' color='#333' />
      </View>
      <View className='home__upload-tips'>点击上传个人简历PDF</View>
      <Picker className='home__picker' mode='selector' range={mockData.jobTypes} onChange={handleJobTypeChange}>
        <View>
          {pickerValue ? `已选择：${pickerValue}` : '请选择职位'}
          {!pickerValue && <AtIcon value='chevron-down' size='20' color='#333' />}
        </View>
      </Picker>
      <AtButton
        className='home__start-btn'
        type='primary'
        size='small'
        disabled={!pickerValue}
        onClick={handleStart}
      >
        开  始
      </AtButton>
      <View className='home__footer'>解锁码：暂未支付</View>
    </View>
  )
}

export default Home
