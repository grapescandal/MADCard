
import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', position: '', tel: '', mail: '', www: 'www.madvrstudio.com', address: '11 Phaholyothin 29, Phaholyothin Rd., Chatuchak, Bangkok, Thailand 10900' };

        this.changeName = this.changeName.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.changeTel = this.changeTel.bind(this);
        this.changeMail = this.changeMail.bind(this);
    }

    changeName(inputText) {
        this.setState({ name: inputText });
    }

    changePosition(inputText) {
        this.setState({ position: inputText });
    }

    changeTel(inputText) {
        this.setState({ tel: inputText });
    }

    changeMail(inputText) {
        this.setState({ mail: inputText });
    }

    render() {
        const styles = StyleSheet.create({
            inputBox: {
                padding: 10,
            },
            nameContainer: {
                padding: 10,
            },
            positionContainer: {
                padding: 10,
            },
            telContainer: {
                padding: 10,
            },
            mailContainer: {
                padding: 10,
            },
            wwwContainer: {
                padding: 10,
            },
            addressContainer: {
                padding: 10,
            },
        });

        return (
            <View>
                <TextInput style={styles.inputBox} placeholder="Name here!" onChangeText={(name) => this.changeName(name)} value={this.state.name} />
                <TextInput style={styles.inputBox} placeholder="Position here!" onChangeText={(position) => this.changePosition(position)} value={this.state.position} />
                <TextInput style={styles.inputBox} placeholder="Telephone number here!" onChangeText={(tel) => this.changeTel(tel)} value={this.state.tel} />
                <TextInput style={styles.inputBox} placeholder="E-mail here!" onChangeText={(mail) => this.changeMail(mail)} value={this.state.mail} />
                
                <View style={styles.nameContainer}>
                    <Text>Your Name: {this.state.name} </Text>
                </View>

                <View style={styles.positionContainer}>
                    <Text>Your Position: {this.state.position} </Text>
                </View>

                <View style={styles.telContainer}>
                    <Text>Your Telephone Number: {this.state.tel} </Text>
                </View>

                <View style={styles.mailContainer}>
                    <Text>Your E-mail: {this.state.mail} </Text>
                </View>

                <View style={styles.wwwContainer}>
                    <Text>MAD Website: {this.state.www} </Text>
                </View>

                <View style={styles.addressContainer}>
                    <Text>MAD Address: {this.state.address} </Text>
                </View>
            </View>
        );
    }

}

export default Info