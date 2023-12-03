import React from 'react'
import { FlatList, StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function ReviewList({ data }) {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.appid}</Text>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        overflow: 'visible'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
});