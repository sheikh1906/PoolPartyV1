/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AuthLoadingScreen = (props) => {
    const {navigate} = props.navigation;
    return (
        <SafeAreaView style={styles.View}>
            <Text style={styles.LoginPrompt}>AuthLoadingScreen Screen</Text>
            <Button
                title="Login"
                onPress={() => navigate('App')}
                style={styles.LoginButton} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    LoginPrompt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    LoginButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    View: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    }
});

export default AuthLoadingScreen;