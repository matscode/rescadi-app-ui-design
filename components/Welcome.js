/**
 *
 * Description
 *
 * @package        Rescadi
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com> {@link http://michaelakanji.com}
 * @date           2018-01-16
 *
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// Expo components
import { Ionicons } from '@expo/vector-icons';
import { appColor } from "../resource/consts";

export default class Notification extends Component {

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.welcomeIconWrapper}>
                    <Ionicons name="ios-restaurant" size={64} color={appColor} />
                </View>
                <Text style={styles.welcome}>
                    Looking for
                    <Text style={styles.lunch}> Lunch</Text>
                    ?
                </Text>
                <Text style={styles.welcomeAddonText}>
                    or you can easily change your meal
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex      : 1,
        alignItems: 'center',
        marginVertical: 10,
        //justifyContent : 'center',
    },

    welcome: {
        fontSize: 20
    },

    welcomeAddonText: {
        color   : '#888',
        fontSize: 13
    },

    lunch: {
        backgroundColor: appColor,
        color          : 'white',
    },
});
