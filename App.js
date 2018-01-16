import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// Custom components
import Notification from './components/Notification';
import TabNavigation from './components/TabNavigation';
import Welcome from "./components/Welcome";

export default class App extends Component {
    render () {
        return (
            <View style={styles.container}>
                {/*Using a ScrollView component here might be a better aproach for responsiveness for small screen devices*/}
                <View style={styles.content}>

                    <Notification />

                    <Welcome />
                </View>

                {/*Navigation Addon for every page*/}
                <TabNavigation />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex           : 1,
        marginTop      : 30,
        backgroundColor: '#fff',
        //alignItems     : 'center',
        //justifyContent : 'center',
    },

    content: {
        flex: 1,
    },
});
