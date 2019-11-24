/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
            <View style={styles.userCard}>
                <Image style={styles.userImage} 
                source={formatImageSource(props.item.user.image)} />
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>
                        { props.item.user.fullName }
                    </Text>
                </View>
            </View>
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
    userCard: { flex: 1, flexDirection: 'row', alignItems:'center', alignContent: 'center', justifyContent: 'flex-start' },
    userImage: { flex:1, width: 60, height: 60, borderRadius: 30, marginLeft: 5, marginRight: 5 },
    userNameContainer: {  flex:4, height: 80, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' },
    userName: {fontSize: 20, alignContent: 'stretch', justifyContent: 'flex-start'}
});

export default TicketCard;