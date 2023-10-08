import { FC } from "react"
import { View } from "@tarojs/components"

import "./index.scss"

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AnalyzePage: FC<Props> = (props) => {
  return (
    <View className='analyze'>
      <View className='analyze__resume-optimize'>
        <View className='analyze__resume-optimize__title'>推荐简历改动</View>
        <View className='analyze__resume-optimize__content'>
          123
        </View>
      </View>
      <View className='analyze__interview-question'>
        <View className='analyze__interview-question__title'>推荐面试问题</View>
        <View className='analyze__interview-question__content'>
          2234
        </View>
      </View>
    </View>
  )
}

AnalyzePage.defaultProps = defaultProps

export default AnalyzePage
