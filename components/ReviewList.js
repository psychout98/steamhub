import { FlatList, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import GamePreview from './GamePreview';
import React, { useEffect, useState } from 'react'
import GameModal from './GameModal';


export default function ReviewList({ data, username, includeGame }) {

    const [gameModalVisible, setGameModalVisible] = useState(false)
    const [currentGame, setCurrentGame] = useState({})

    useEffect(() => {

    }, [gameModalVisible, currentGame])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        {includeGame ? <GamePreview item={{appid: item.appid, name: item.game}} setGameModalVisible={setGameModalVisible} setCurrentGame={setCurrentGame}/> : null}
                        <Text style={styles.reviewName}>{item.username}</Text>
                        <Text style={styles.reviewText}>{item.text}</Text>
                    </View>
                )}
            />
            {includeGame ? <GameModal game={currentGame} gameModalVisible={gameModalVisible} setGameModalVisible={setGameModalVisible} username={username}/> : null}
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        overflow: 'visible'
    },
    item: {
        backgroundColor: '#171a21',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16
    },
    reviewName: {
        color: '#e5e5e5',
        fontSize: 18,
        fontWeight: 'bold'
    },
    reviewText: {
        color: '#e5e5e5'
    }
});