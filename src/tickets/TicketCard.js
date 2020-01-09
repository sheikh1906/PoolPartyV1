/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import userCard from '../common/UserCard';
import UserCard from '../common/UserCard';

const TicketCard = (props) => {

    formatImageSource = (image) => {
        return {uri:`data:image/${image.contentType};base64,${image.data}`};
    }

    return(
        <View style={styles.ticketCard}>
            <View style={styles.titleRow}>
                <Text style={styles.drawingTitle}>
                    { props.item.drawing }
                </Text>
                <Text style={styles.drawingDate}>
                    { props.item.drawingDate }
                </Text>
                <Text style={styles.poolName}>
                { props.item.pool.name } 
                </Text>
            </View>
            <Image 
                style={styles.ticketImage}
                source={formatImageSource(props.item.image)} /> 
            <UserCard {...props.item.user} />
        </View>
    );

}

const styles = StyleSheet.create({
    ticketCard: { flex:1, flexDirection: 'column', backgroundColor: 'white', marginBottom: 30},
    titleRow: { flex:1, flexDirection: 'column'},
    ticketImage: { flex:4, height: 300 },
    drawingTitle: { fontSize: 20 },
    drawingDate: { fontSize: 15 },
    poolName: { fontSize: 15 },
});

export default TicketCard;