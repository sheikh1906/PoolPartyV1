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
        <View>
            <Text>
                { props.item.drawing }
            </Text>
            <Text>
                { props.item.drawingDate }
            </Text>
            <Image 
                style={styles.ticketImage}
                source={formatImageSource(props.item.image)} /> 
            <View>
                <Image style={styles.userImage} 
                source={formatImageSource(props.item.user.image)} />
                <Text style={styles.userName}>
                    { props.item.user.fullName }
                </Text>
            </View>
            <Text style={styles.poolName}>
                { props.item.pool.name } 
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    ticketImage: { width: 300, height: 300 },
    drawingTitle: { fontSize: 20 },
    drawingDate: { fontSize: 15 },
    poolName: { fontSize: 15 },
    userImage: { width: 60, height: 60 },
    userName: { fontSize: 15 }
});

export default TicketCard;