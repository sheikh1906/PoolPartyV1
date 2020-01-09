/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const UserCard = (props) => {

    formatImageSource = (image) => {
        return {uri:`data:image/${image.contentType};base64,${image.data}`};
    }

    return(
        <View style={styles.userCard}>
            <Image style={styles.userImage} 
            source={formatImageSource(props.image)} />
            <View style={styles.userNameContainer}>
                <Text style={styles.userName}>
                    { props.fullName }
                </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    userCard: { flex: 1, flexDirection: 'row', alignItems:'center', alignContent: 'center', justifyContent: 'flex-start' },
    userImage: { flex:1, width: 60, height: 60, borderRadius: 30, marginLeft: 5, marginRight: 5 },
    userNameContainer: {  flex:4, height: 80, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' },
    userName: {fontSize: 20, alignContent: 'stretch', justifyContent: 'flex-start'}
});

export default UserCard;