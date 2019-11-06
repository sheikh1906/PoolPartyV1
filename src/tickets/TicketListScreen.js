/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GetTickets } from '../mocks/Tickets';

import TicketCard from './TicketCard';

const TicketListScreen = () => {

    const ticketsAPIURL = "";
    //const [tickets, setTickets] = useState([]);
    const [error, setError] = useState({});
    const tickets = GetTickets();

    async function fetchTickets(){
        const res = await fetch(ticketsAPIURL);
        res
        .json(res)
        .then(
            res => setTickets(res)
        )
        .catch();
    }

    // useEffect(()=>{
    //     setTickets(GetTickets());
    // });

    return(
        <View>
            <FlatList
                keyExtractor={item => item._id.toString()}
                data={tickets}
                renderItem={ (item) => <TicketCard {...item} ></TicketCard> }
                //contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            />
        </View>
    );
}

//const styles = StyleSheet.create({});

export default TicketListScreen;