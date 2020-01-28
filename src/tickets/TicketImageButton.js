/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { 
    Platform,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback, 
    StyleSheet, View } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome5';


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
        <TouchableHighlight style={styles.container} onPress={props.onPress}>
        <View >
            <View style={styles.imagePlaceholder}>
                <Icon name={'plus-circle'} size={60} />
            </View>
            <Text style={styles.fieldTitle}>Add Ticket Image</Text>
        </View>
        </TouchableHighlight>
    );

}

const styles = StyleSheet.create({
    container: { flex:1, flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'lavender', width: '80%', height: 200
    },
    circle: { borderColor: 'black', borderRadius: 40, borderWidth: 2, height: 80, width: 80},
    imagePlaceholder: { flex:2, flexDirection: 'column',justifyContent: 'center', alignItems: 'center' },
    fieldTitle: { flex: 1, }
});

export default TicketImageButton;