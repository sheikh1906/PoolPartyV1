/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import UserCard from '../common/UserCard';

const PoolCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.item.name}
            </Text>
            <UserCard {...props.item.owner} />
            <Text style={styles.drawingsTitle}>Drawings</Text>
                {props.item.drawings.map((drawing) => {
                    return (<Text style={styles.drawings} key={drawing.name}>{drawing.name}</Text>);
                    })
                }
            <Text style={styles.memberCount}>
                Members: {props.item.members.length}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex:1, flexDirection: 'column', backgroundColor: 'white', marginBottom: 30},
    title: { fontSize: 20 },
    drawingsTitle: { fontSize: 20 },
    drawings: {},
    memberCount: {}
});

export default PoolCard;