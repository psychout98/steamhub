import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Modal, TouchableHighlight, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import GameModal from './GameModal';


export default function Feed() {

    const [data, setData] = useState([])
    const [max, setMax] = useState(0)
    const [count, setCount] = useState(20)
    const [modalVisible, setModalVisible] = useState(false)
    const [currentGame, setCurrentGame] = useState({})

    useEffect(() => {
        fetch(`http://66.71.85.150:3000/games?count=${count}`).then(response => response.json())
            .then((json) => {
                setData(json.games)
                setMax(json.max)
            })
            .catch((error) => {
                console.log(error, 'the fuq')
            })
    }, [count])


    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => {
                        setModalVisible(true)
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
                <Text style={styles.index}>Showing 0-{count} of {max} games</Text>
            </View>
            <Modal style={styles.modalview} visible={modalVisible}>
                <Button style={styles.exitmodal} onPress={() => {setModalVisible(false)}} title='X'/>
                <GameModal game={currentGame}/>
            </Modal>
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
    },
    modalview: {
        backgroundColor: '#c7d5e0',
        margin: 50
    },
    exitmodal: {
        position: 'absolute',
        top: 0,
        right: 0
    }
});