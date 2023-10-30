import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'


export default function Feed() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.185:3000/games').then(response => response.json())
        .then((json) => {
            console.log(json.games)
            setData(json.games)
        })
        .catch((error) => {
            console.log(error, 'the fuq')
        })
    }, [])

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList data={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                >
                </FlatList>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    }
    ,
    container: {
        flex: 1,
        backgroundColor: '#1b2838',
        color: '#fff'
      }
    ,
  });