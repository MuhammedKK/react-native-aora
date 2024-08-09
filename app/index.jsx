import { Link } from 'expo-router'
import {View, StyleSheet, Text, StatusBar} from 'react-native';


export default function App() {

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-pblack">Aora App</Text>
            <Link href="/profile" style={{color:'blue '}}>Go to profile</Link>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})