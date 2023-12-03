import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Modal, TouchableHighlight, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import GameModal from './GameModal';
import Axios from 'axios';


export default function Browse({ username }) {

    const [data, setData] = useState([])
    const [count, setCount] = useState(20)
    const [gameModalVisible, setGameModalVisible] = useState(false)
    const [currentGame, setCurrentGame] = useState({})

    useEffect(() => {
      async function call() {
        await Axios({
          method: "get",
          url: `/api/games?count=${count}`
        })
        .then((result) => {
          setData(result.data.games)
        })
        .catch((error) => {
          console.log(error)
        })
      } 
      call()
    }, [count])


    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => {
                        setGameModalVisible(true)
                        setCurrentGame(item)
                        }}>
                        <View style={styles.item}>
                            <Image style={styles.thumbnail} source={{ uri: `https://cdn.akamai.steamstatic.com/steam/apps/${item.appid}/header.jpg` }}/>
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                onScroll={({ nativeEvent }) => {
                    if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 10 && data.length === count) {
                        setCount(count + 20)
                    }
                }}
            >
            </FlatList>
            <View style={styles.bottom}>
                <Text style={styles.index}>Showing 0-{count} games</Text>
            </View>
            <GameModal game={currentGame} gameModalVisible={gameModalVisible} setGameModalVisible={setGameModalVisible} username={username}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#c7d5e0',
        padding: 10,
        marginBottom: 3,
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        flexShrink: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#1b2838',
        color: '#fff'
    },
    bottom: {
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    index: {
        fontSize: 10
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 10
    }
});