import { SafeAreaView, View, StyleSheet, Button, Text } from 'react-native';
import React, { useEffect, useState } from 'react'
import ReviewList from './ReviewList';
import Axios from 'axios';


export default function Profile({ username, setLogin }) {

    
    const [count, setCount] = useState(20)
    const [data, setData] = useState([])

    useEffect(() => {
        async function call() {
            await Axios({
                method: "get",
                url: `/api/reviews`,
                params: {
                    count: count,
                    appids: [],
                    usernames: [username]
                }
            })
                .then((result) => {
                    console.log(result.data.reviews.length)
                    setData(result.data.reviews)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        call()
    }, [count])

    return (
        <SafeAreaView style={styles.container}>
            <ReviewList data={data} username={username} includeGame={true}/>
            <Button onPress={() => setLogin(false)} title="Log out"></Button>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b2838',
        color: '#fff'
    }
});