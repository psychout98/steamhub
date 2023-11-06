import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Modal, TouchableHighlight, Button } from 'react-native'

export default function GameModal({ game }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{game.name}</Text>
                <Image style={styles.thumbnail} source={{ uri: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg` }}/>
            </View>
            <View style={styles.content}>

            </View>
        </SafeAreaView>
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
    }
});