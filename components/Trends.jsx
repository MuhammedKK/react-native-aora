import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'

const zoomIn = {
  0: {
    scale: 0.5
  },
  1: {
    scale: 1
  }
}
const zoomOut = {
  0: {
    scale: 1
  },
  1: {
    scale: 0.5
  }
}

const TrendingVideo = ({activeVideo, video}) => {
  const [isPlaying, setIsPlaying] = useState(false) 
  return (
    <Animatable.View
      className="ml-5"
      animation={activeVideo === video.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {
        isPlaying ? (
          <Text className="text-white">playing</Text>
        )
        : (
          <TouchableOpacity
            className="relative justify-center items-end"
            activeOpacity={0.7}
            onPress={() => {
              setIsPlaying(true)
            }}
          >
            <ImageBackground
              source={{
                uri: video.thumbnail
              }}
               className="w-50 h-70 rounded-[35px] my-5 shadow-lg sh overflow-hidden shadow-black/40"
            />
          </TouchableOpacity>
          // <Text className="text-white">{video.$id}</Text>
        )
      }
      
    </Animatable.View>
  )
}

const Trends = ({latestPosts}) => {
  const [activeVideo, setActiveVideo] = useState(latestPosts[0])
  return (
    <FlatList
        data={latestPosts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
            <TrendingVideo activeVideo={activeVideo} setActiveVideo={setActiveVideo} video={item}/>
        )}
        className="flex-row-reverse"
    />
  )
}

export default Trends