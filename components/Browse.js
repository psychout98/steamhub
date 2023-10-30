import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'


export default function Feed() {

    const [data, setData] = useState([])
    const [max, setMax] = useState(0)
    const [count, setCount] = useState(20)

    useEffect(() => {
        fetch(`http://192.168.1.185:3000/games?count=${count}`).then(response => response.json())
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
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginBottom: 3
    },
    title: {
        fontSize: 24,
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
    }
});