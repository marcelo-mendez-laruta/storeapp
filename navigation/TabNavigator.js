import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();
const TabNavigator = () => (
    <BottomTabs.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
    }} initialRouteName="ShopTab">
        <BottomTabs.Screen name="ShopTab" component={ShopNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                    <Ionicons name="ios-home" size={24} color={focused ? 'black' : 'gray'} />
                    <Text>Tienda</Text>
                </View>
            )
        }} />
        <BottomTabs.Screen name="CartTab" component={CartNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <View style={styles.item}>
                    <Ionicons name="ios-cart" size={24} color={focused ? 'black' : 'gray'} />
                    <Text>Carrito</Text>
                </View>
            )
        }} />
    </BottomTabs.Navigator>
);
const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7F5DF0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default TabNavigator;
