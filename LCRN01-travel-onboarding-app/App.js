/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// screens
import {
    OnBoarding,
} from "./app/screens/";

// screen for stack & tabs
const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Onboarding screen */}
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};