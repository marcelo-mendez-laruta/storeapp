import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go to Items" onPress={() => {
                navigation.navigate('Category');
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
export default CategoriesScreen;