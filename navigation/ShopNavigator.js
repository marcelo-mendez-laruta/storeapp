import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={CategoriesScreen} />
                <Stack.Screen name="Category" component={CategoryScreen} />
                <Stack.Screen name="Detail" component={ItemDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ShopNavigator;