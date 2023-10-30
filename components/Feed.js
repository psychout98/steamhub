import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const DATA = [
    {
        title: 'Dumb Game',
        game: 'Among us',
        review: 'This game is dumb',
        user: 'psychout98',
        date: '10/28/2023',
    },
    {
        title: 'Dumb Game',
        game: 'Among us',
        review: 'This game is dumb',
        user: 'psychout98',
        date: '10/28/2023',
    },
    {
        title: 'Dumb Game',
        game: 'Among us',
        review: 'This game is dumb',
        user: 'psychout98',
        date: '10/28/2023',
    },
    {
        title: 'Dumb Game',
        game: 'Among us',
        review: 'This game is dumb',
        user: 'psychout98',
        date: '10/28/2023',
    }
];

export default function Feed() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList data={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text>{item.game}</Text>
                            <Text>{item.review}</Text>
                            <Text>{item.user}</Text>
                            <Text>{item.date}</Text>
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