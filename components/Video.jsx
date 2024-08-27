import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import  {icons}  from '../constants'
const Video = ({video: {title, thumbnail, video, creator: {username, avatar}}}) => {
    const [isPlaying, setIsPlaying] = useState(false)
  return (
    <View className="flex-col items-center px-4 mb-10">
        <View className="flex-row-reverse gap-3 items-start">
            <View className="justify-center items-center flex-row-reverse flex-1">
                <View className="w-[64px] h-[64px] rounded-lg border-secondary-100 items-center justify-center p-2">
                    <Image 
                        source={{uri: avatar}}
                        className="w-full h-full rounded-lg"
                        resizeMode='cover'
                    />
                </View>
                <View className="justify-center flex-1 ml-3 gap-y-1">
                    <Text className="text-white font-semibold text-sm">{title}</Text>
                    <Text className="text-xs text-gray-100 font-pregular">
                        {username}
                    </Text>
                </View>
            </View>
            <View className="p-2">
                <Image
                    source={icons.menu}
                    className="w-5 h-5"
                    resizeMode="contain"
                />
            </View>
        </View>
        {
            isPlaying ? (
                <View>
                    <Text className="text-white">Playing</Text>
                </View>
            )
            : (
                <TouchableOpacity className="w-full h-60 rounded-md mt-3 relative justify-center items-center"
                    activeOpacity={0.6}
                    onPress={() => setIsPlaying(true)}
                >
                    <Image
                        source={{uri: thumbnail}}
                        className="w-full h-full rounded-lg mt-4"
                        resizeMode="cover"
                    />
                    <Image   
                        source={icons.play}
                        className="w-10 h-10 absolute"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )
        }
    </View>
  )
}

export default Video