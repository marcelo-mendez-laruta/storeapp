import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Category of items Screen</Text>
            <Button title="Go to Detail" onPress={() => {
                navigation.navigate('Detail');
            }} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CategoryScreen;