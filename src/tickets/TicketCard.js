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
                <Text style={styles.userName}>
                    { props.item.user.fullName }
                </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    ticketCard: { flex:1, flexDirection: 'column' },
    titleRow: { flex:1, flexDirection: 'column'},
    ticketImage: { flex:4, height: 300 },
    drawingTitle: { fontSize: 20 },
    drawingDate: { fontSize: 15 },
    poolName: { fontSize: 15 },
    userCard: { flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start' },
    userImage: { flex:1, width: 80, height: 80, borderRadius: 40 },
    userName: { flex:4, fontSize: 20 }
});

export default TicketCard;