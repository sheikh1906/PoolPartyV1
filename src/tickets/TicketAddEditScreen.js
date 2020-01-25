/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState, useEffect} from 'react';
import { Input, StyleSheet, Text, View, Picker } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const TicketAddEditScreen = () => {    return (
    <View>
        <Text>Add Screen</Text>
        <Picker ></Picker>
        <Picker></Picker>
        <ImagePicker>

        </ImagePicker>
        <Input></Input>
    </View>
);}

const styles = StyleSheet.create(

);

export default TicketAddEditScreen;