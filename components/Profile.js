import { StyleSheet, Text, View } from 'react-native';

export default function Profile({ username }) {
    return (
        <View>
            <Text>
                {username}
            </Text>
        </View>
    )
}