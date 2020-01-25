/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { GetUser } from '../mocks/User';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = () => {

    const user = GetUser();

    const formatImageSource = (image) => {
        return {uri:`data:image/${image.contentType};base64,${image.data}`};
    }

    return (
        <ScrollView 
            contentContainerStyle={styles.container}
            >
            <View style={styles.sectionCard}>
                <Text>Profile Screen</Text>
                <Image style={styles.userImage} 
                    source={formatImageSource(user.image)} />
                <Text style={styles.userFullName}>{user.fullName}</Text>
                <Text style={styles.sectionHeading}>Payment Links</Text>
                {user.paymentLinks.map((link) => {
                    return (<Text key={link.name}>{link.name}: {link.url}</Text>);
                })}
                <Text style={styles.sectionHeading}>Bio</Text>
                <Text style={styles.userBio}>
                {user.bio}
                </Text>
            </View>
            <View style={styles.sectionCard}>
                <Text style={styles.sectionHeading}>Settings</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: 'stretch', backgroundColor: 'lavender'},
    sectionCard: {flex: 1, backgroundColor: 'white', marginBottom: 30, alignItems: 'center'},
    sectionHeading: {fontSize: 20, fontWeight: 'bold'},
    userBio: {fontSize:20},
    userFullName: {fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'},
    userImage: {height:300, width:300, borderRadius:150}
});

export default ProfileScreen;