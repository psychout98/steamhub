import { StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import ReviewList from './ReviewList';


export default function Feed({ username }) {

    const [count, setCount] = useState(20)
    const [data, setData] = useState([])
    const [max, setMax] = useState(0)
    
    useEffect(() => {
        async function call() {
            await Axios({
                method: "get",
                url: `/api/reviews`,
                params: {
                    count: count,
                    appids: [],
                    usernames: []
                }
            })
                .then((result) => {
                    setData(result.data.reviews)
                    setMax(result.data.max)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        call()
    }, [count])

    return (
        <SafeAreaView style={styles.container}>
            <ReviewList data={data}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },
    container: {
        flex: 1,
        backgroundColor: '#1b2838',
        color: '#fff'
    }
});