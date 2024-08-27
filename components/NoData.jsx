import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
const NoData = ({title, description}) => {
  return (
    <View className="justify-center items-center px-4">
        <Image 
            source={images.empty}
            resizeMode='contain'
            className="w-[250px] h-[200px]"
        />
      <Text className="text-gray-100 text-sm ">{description}</Text>
      <Text className="text-white mt-2 text-center font-psemibold">{title}</Text>
      <CustomButton
        title={'Upload Video'}
        handlePress={() => router.push('/create ')}
        containerStyle={'w-full mt-4'}
      />
    </View>
  )
}

export default NoData