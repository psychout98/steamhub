import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Modal, TouchableHighlight, Button } from 'react-native'

export default function GameModal(game) {
    return (
        <View>
            <Text>
                {game.name}
            </Text>
        </View>
    )
}