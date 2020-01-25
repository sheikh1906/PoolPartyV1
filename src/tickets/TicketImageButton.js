/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { 
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback, 
    StyleSheet, View } from 'react-native';


const TicketImageButton = (props) => {

    if(Platform.OS === "android"){ 
        return(
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.container}>
                    <View style={styles.circle}></View>
                </View>
            </TouchableNativeFeedback>
        );
    }
    return(
        <TouchableHighlight onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.circle}></View>
        </View>
        </TouchableHighlight>
    );

}

const styles = StyleSheet.create({
    container: { flex:1, flexDirection: 'column', 
    backgroundColor: 'white', width: 200, height: 200
    },
    circle: { borderColor: 'black', borderRadius: 40, borderWidth: 2, height: 80, width: 80}
});

export default TicketImageButton;