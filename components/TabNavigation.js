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
import { StyleSheet, Text, View } from 'react-native';

// Expo components
import { Ionicons } from '@expo/vector-icons';
import { tabColor, tabColorActive } from '../resource/consts';

export default class TabNavigation extends Component {
    render () {

        return (
            <View style={styles.container}>
                <View style={[styles.tabItem, styles.tabItemDivider]}>
                    <Ionicons name="md-menu" size={24} color={tabColor} />
                    <Text style={styles.tabItemText}>Featured</Text>
                </View>
                <View style={[styles.tabItem, styles.tabItemDivider]}>
                    <Ionicons name="md-search" size={24} color={tabColor} />
                    <Text style={styles.tabItemText}>Search</Text>
                </View>
                <View style={[styles.tabItem, styles.tabItemDivider]}>
                    <Ionicons name="md-home" size={24} color={tabColorActive} />
                    <Text style={styles.tabItemTextActive}>Home</Text>
                </View>
                <View style={styles.tabItem}>
                    <Ionicons name="md-person" size={24} color={tabColor} />
                    <Text style={styles.tabItemText}>Me</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container        : {
        flex           : 0,
        flexDirection  : 'row',
        backgroundColor: '#efefef',
        justifyContent : 'space-around',

        borderTopWidth: 1,
        borderColor   : '#ddd',
    },
    tabItem          : {
        paddingHorizontal: 18,
        margin           : 8,
        alignItems       : 'center',
    },
    tabItemText      : {
        color: tabColor,
    },
    tabItemTextActive: {
        color: tabColorActive,
    },
    tabItemDivider   : {
        borderRightWidth: 1,
        borderColor     : '#dfdfdf',
    }
});
