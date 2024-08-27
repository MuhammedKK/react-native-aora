import { Alert, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trends from '../../components/Trends'
import NoData from '../../components/NoData'
import { getPosts, getLatestPosts } from '../../lib/appwrite'
import { useAppWrite } from '../../hooks/UseAppWrite'
import Video from '../../components/Video'
const Home = () => {
  const {data: posts, refetch} = useAppWrite(getPosts)
  const {data: latestPosts} = useAppWrite(getLatestPosts)
  const [refersh, setRefersh] = useState(false)
  console.log(latestPosts)

  const onRefresh = async () => {
    setRefersh(true);
    await refetch();
    setRefersh(false);
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts ?? []}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <Video video={item} />
          
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row-reverse mb-6">
              <View>
                <Text className="text-sm font-pmedium text-gray-100">Welcome Back</Text>
                <Text className="text-2xl font-psemibold text-white">khaloood</Text>
              </View>
              <View className="mt-1.5">
                <Image 
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput placeholder={'Search for videos'}/>
            <View className="w-full flex flex-col pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-4">
                latest videos
              </Text>
              <Trends 
                latestPosts={latestPosts ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <NoData
            title={'No videos found'}
            description={'Try searching for something else or create a new one'}
          />
        )}
        refreshControl={<RefreshControl refreshing={refersh} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})