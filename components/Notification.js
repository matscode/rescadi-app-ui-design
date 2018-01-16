/**
 *
 * Description
 *
 * @package        Rescadi
 * @category       Source
 * @author         Michael Akanji <matscode@gmail.com> {@link http://michaelakanji.com}
 * @date           2018-01-15
 *
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// Expo components
import { Ionicons } from '@expo/vector-icons';
import { appColor } from "../resource/consts";

export default class Notification extends Component {

    handleButtonPress = () => {
        Alert.alert(
            '',
            'You sure got it?',
            [
                //{ text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.notificationHeader}>Notifications</Text>
                <View style={styles.notificationBody}>

                    {/*Align left*/}
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        {/*Align left*/}
                        <Ionicons name="md-notifications" size={24} color="#e55" style={{ flex: 0 }} />

                        {/*Align right*/}
                        <View style={{ flex: 1, marginLeft: 8 }}>
                            <Text style={styles.resturant}>Alborz Resturant</Text>
                            <Text style={styles.postTime}>32 minutes ago</Text>
                            <Text style={styles.postTitle}>Here comes our weekend promotion:</Text>
                            <Text style={styles.postBody}>
                                <Text>Free desert with early check ins and purchase of an entree.</Text>
                                <Text>Dont forget to join us at pizza arena in this weekend.</Text>
                                <Text style={{ color: appColor }}> View More..</Text>
                            </Text>
                        </View>
                    </View>

                    {/*Align right*/}
                    <Text style={styles.button}
                          onPress={this.handleButtonPress}>
                        Got it!
                    </Text>

                    {/* Cant give button component desired effect: using Text Component
                    <View style={{ width: 70 }}>
                        <Button style={styles.button}
                                onPress={handleButtonPress}
                                title="Got it!" />
                    </View>*/}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //alignItems     : 'center',
        //justifyContent : 'felx-start',
    },

    notificationHeader: {
        marginHorizontal: 20,
        //marginBottom    : 5,
        fontWeight      : 'bold',
        fontSize        : 18,
        color           : "#222"
    },

    notificationBody: {
        margin      : 7,
        padding     : 8,
        borderWidth : 1,
        borderColor : '#ddd',
        borderRadius: 10,
    },

    notificationInfo: {
        flex         : 1,
        flexDirection: 'row',
    },

    button: {
        width          : 70,
        borderRadius   : 10,
        backgroundColor: '#e55',
        padding        : 5,
        color          : 'white',
        textAlign      : 'center',
        alignSelf      : 'flex-end'
    },

    resturant: {
        fontSize  : 16,
        fontWeight: 'bold'
    },

    postTime: {
        fontSize : 11,
        fontStyle: 'italic',
        color    : appColor
    },

    postTitle: {
        fontWeight  : 'bold',
        marginTop   : 3,
        marginBottom: 0,
        fontSize    : 13
    },

    postBody: {
        color       : '#666',
        marginTop   : 0,
        marginBottom: 3,
        fontSize    : 13
    },

});
