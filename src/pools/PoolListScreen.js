/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { GetPools } from '../mocks/Pool';

const PoolListScreen = () => {

    const pools = GetPools();

    return (
        <View>
            <Text>Pool List Screen</Text>
            <View>
                <PoolCardOwner />
            </View>
            <FlatList
                keyExtractor={item => item._id.toString()}
                data={pools}
                renderItem={item => <PoolCard {...item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create();

const PoolCardOwner = () => {
    return (
        <View>
            <Text>Your Pool</Text>
            <Text>
                Members / Capacity
            </Text>
        </View>
    );
}

const PoolCard = () => {
    return (
        <View>
            <Text>
                Pool Name
            </Text>
            <Text>
                Pool Owner
            </Text>
            <Text>
                Pool Drawings
            </Text>
            <Text>
                Members
            </Text>
        </View>
    );
}

export default PoolListScreen;