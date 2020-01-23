/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState} from 'react';
import {FlatList, StyleSheet, View,     
    Platform,
    Button,
    TouchableHighlight,
    TouchableNativeFeedback, 
    TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import {GetTickets} from '../mocks/Tickets';

import TicketCard from './TicketCard';

const TicketListScreen = (props) => {const ticketsAPIURL = "";
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
        headerTitleStyle: { flex: 1, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 'bold'},
        headerRight: <AddButton navigate={navigation} />
    });
}

const AddButton = (props) => {

    if(Platform.OS === 'android'){
        return(
            <TouchableNativeFeedback onPress={() => props.navigate.navigate('Add')}>
                <View style={styles.addButton}>
                <Icon name={'plus'} solid size={24} />
                </View>
            </TouchableNativeFeedback>
        );
    }
    else {
        return (
            <TouchableOpacity style={styles.addButton}
            onPress={() => props.navigate.navigate('Add')}
            >
                <Icon name={'plus'} solid size={24} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'lavender'},
  addButton: { paddingRight: 10 }
});

export default TicketListScreen;
