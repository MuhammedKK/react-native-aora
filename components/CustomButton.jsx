import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyle,isLoading, textStyles}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`}>
        <Text className={`text-primary font-pesemibold text-lg ${textStyles} `}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
