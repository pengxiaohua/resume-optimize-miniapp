import { FC } from "react"
import {View} from "@tarojs/components"

import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AnalyzePage: FC<Props> = (props) => {
  return (
    <View className='analyze-page'>Analyze</View>
  )
}

AnalyzePage.defaultProps = defaultProps

export default AnalyzePage
