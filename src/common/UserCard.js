/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React from 'react';
import { 
    Image, 
    StyleSheet, 
    Text, 
    View, 
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback } from 'react-native';

const UserCard = (props) => {

    formatImageSource = (image) => {
        return {uri:`data:image/${image.contentType};base64,${image.data}`};
    }
    if(Platform.OS === "android"){ 
        return(
            <TouchableNativeFeedback>
                <View style={styles.userCard}>
<<<<<<< HEAD
                <Image style={styles.userImage} 
                source={formatImageSource(props.image)} />
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>
                        { props.fullName }
                    </Text>
=======
                    <Image style={styles.userImage} 
                    source={formatImageSource(props.image)} />
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userName}>
                            { props.fullName }
                        </Text>
                    </View>
>>>>>>> 9f1f6d9bfa94fcd6f3593f25a28cd2e739cc921d
                </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
    return(
        <TouchableHighlight>
        <View style={styles.userCard}>
            <Image style={styles.userImage} 
            source={formatImageSource(props.image)} />
            <View style={styles.userNameContainer}>
                <Text style={styles.userName}>
                    { props.fullName }
                </Text>
            </View>
        </View>
        </TouchableHighlight>
    );

}

const styles = StyleSheet.create({
    userCard: { flex: 1, flexDirection: 'row', alignItems:'center', height: 80, alignContent: 'center', justifyContent: 'flex-start' },
    userImage: { flex:1, width: 75, height: 75, borderRadius: 35, marginLeft: 5, marginRight: 5 },
    userNameContainer: {  flex: 4, height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' },
    userName: {flex: 1, fontSize: 20, alignContent: 'stretch', flexDirection: 'row', justifyContent: 'flex-start'}
});

export default UserCard;