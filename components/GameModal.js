import { SafeAreaView, StyleSheet, Text, View, Image, Modal, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function GameModal({ game, gameModalVisible, setGameModalVisible }) {


    const [writing, setWriting] = useState(false)
    const [text, onChangeText] = useState('')

    function writeReview() {
        if (writing) {
            axios.post("/review", {
                text: text,
                appid: game.appid
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        } else {
            setWriting(true)
        }
    }

    return (
        <Modal visible={gameModalVisible} transparent={true} animationType='slide'>
            <View style={styles.modalview}>
                <View style={styles.modalheader}>
                    <Button onPress={() => { setGameModalVisible(false) }} title='X' />
                </View>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{game.name}</Text>
                        <Image style={styles.thumbnail} source={{ uri: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg` }} />
                    </View>
                    <View style={styles.content}>
                        <Button onPress={writeReview} title='Write review'></Button>
                        {writing ? <View style={styles.review}>
                            <TextInput style={styles.textBox} onChangeText={onChangeText} multiline={true}></TextInput>
                        </View> : null}
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    thumbnail: {
        flex: 5,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        flex: 1
    },
    container: {
        flex: 15,
        backgroundColor: '#1b2838',
        color: '#ffffff'
    },
    header: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    content: {
        flex: 2
    },
    modalview: {
        flex: 1
    },
    modalheader: {
        backgroundColor: '#1b2838',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingLeft: 10
    },
    review: {
        flex: 1,
        backgroundColor: 'white',
        margin: 30
    },
    textBox: {
        flex: 1,
        textAlignVertical: 'top'
    }
});