import { TouchableHighlight, SafeAreaView, StyleSheet, Text, View, Image, Modal, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ReviewList from './ReviewList'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function GameModal({ game, gameModalVisible, setGameModalVisible, username }) {


    const [count, setCount] = useState(20)
    const [data, setData] = useState([])
    const [max, setMax] = useState(0)

    const [writing, setWriting] = useState(false)
    const [text, onChangeText] = useState('')

    useEffect(() => {
        getReviews()
    }, [count, writing, gameModalVisible])

    function getReviews() {
        Axios({
            method: "get",
            url: `/api/reviews`,
            params: {
                count: count,
                appids: [game.appid],
                usernames: []
            }
        })
        .then((result) => {
            setData(result.data.reviews)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function writeReview() {
        if (writing) {
            Axios({
                method: "post",
                url: "/api/review",
                data: {
                    text: text,
                    username: username,
                    appid: game.appid,
                    game: game.name
                }
            }).then((result) => {
                setWriting(false)
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
                <TouchableHighlight style={styles.modalheader} onPress={() => setGameModalVisible(false)} underlayColor={"#1b2838"}>
                    <Ionicons name={'ios-chevron-down-outline'} size={20} color={'white'}/>
                </TouchableHighlight>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{game.name}</Text>
                        <Image style={styles.thumbnail} source={{ uri: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg` }} />
                    </View>
                    <View style={styles.content}>
                        <Button onPress={() => writeReview(game.name)} title='Write review'></Button>
                        {writing ? <View style={styles.review}>
                            <TextInput style={styles.textBox} onChangeText={onChangeText} multiline={true}></TextInput>
                        </View> : null}
                        <ReviewList data={data} includeGame={false}/>
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
        flex: 30,
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
        justifyContent: 'center',
        paddingTop: 10
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