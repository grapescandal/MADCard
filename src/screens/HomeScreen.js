
import React, {Component} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Info from '../components/Info'

class HomeScreen extends Component {
    render() {
        const styles = StyleSheet.create({
            mainContainer: {
                width: "100%",
                height: "100%",
                backgroundColor: "white",
            },
            titleContainer: {
                paddingTop: 10,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            },
            title: {
                fontSize: 32,
                fontWeight: "bold",
            },
            madIconContainer: {
                position: "absolute",
                flex: 1,
                flexDirection: "column",     
                bottom: 30,
                right: -40,
                // borderColor: 'black',
                // borderRadius: 4,
                // borderWidth: 0.5,
                transform: [{rotate:"90deg"}],
                zIndex: -1,
            },
            madIcon: {
                width: 210,
                height: 134,
            }
        });

        const madIcon = require('../sprites/logo.png');
        return (
            <>
                <View style={styles.mainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>MAD CARD</Text>
                    </View>
                    <Info></Info>
                    <View style={styles.madIconContainer}>
                        <Image style={styles.madIcon} source={madIcon}/>
                    </View>
                </View>
            </>
        );
    }
}

export default HomeScreen;