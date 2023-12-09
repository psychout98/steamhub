import { TouchableHighlight, SafeAreaView, StyleSheet, Text, View, Image, Modal, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function GamePreview({ item, setGameModalVisible, setCurrentGame }) {
    return <TouchableHighlight onPress={() => {
        setGameModalVisible(true)
        setCurrentGame(item)
    }}>
        <View style={styles.item}>
            <Image style={styles.thumbnail} source={{ uri: `https://cdn.akamai.steamstatic.com/steam/apps/${item.appid}/header.jpg` }} />
            <Text style={styles.title}>{item.name}</Text>
        </View>
    </TouchableHighlight>
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#c7d5e0',
        padding: 10,
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        height: 96
    },
    title: {
        fontSize: 20,
        flexShrink: 1,
        marginLeft: 12,
    },
    thumbnail: {
        width: 90,
        height: 48,
        marginLeft: 10
    }
});