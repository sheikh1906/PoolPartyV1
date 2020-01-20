/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState} from 'react';
import {FlatList, StyleSheet, View,     
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback, 
    TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import {GetTickets} from '../mocks/Tickets';

import TicketCard from './TicketCard';

const TicketListScreen = () => {const ticketsAPIURL = "";
    //const [tickets, setTickets] = useState([]);
    const [] = useState({});
    const tickets = GetTickets();


    // useEffect(()=>{
    //     setTickets(GetTickets());
    // });

    return(
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item._id.toString()}
                data={tickets}
                renderItem={item => <TicketCard {...item} />}
            />
        </View>
    );
}

TicketListScreen.navigationOptions = ({navigation}) => {
    return ({
        headerTitle: 'Pool Party!',
        headerRight: AddButton
    });
}

const AddButton = () => {

    if(Platform.OS === 'android'){
        <TouchableNativeFeedback />
    }
    else {
        <TouchableOpacity />
    }
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'lavender'},
});

export default TicketListScreen;
