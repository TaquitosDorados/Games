import React, {useState} from 'react';
import {StyleSheet, View, Button, Image, Text, TextInput} from 'react-native';
import imgPiedra from './assets/piedra.png';
function generateRandomNumber(max, min = 1) {
    return Math.floor(Math.random()*(max-min) + min);
}

function Piedra(props) {
    const [mySelection, setMySelection] = useState(0);
    const [cpuSelection, setCPUSelection] = useState(0);
    const [myPunctuation, setMyPunctuation] = useState(0);
    const [cpuPunctuation, setPunctuation] = useState(0);
    const [myPicture, setPicture] = useState("./assets/interrogacion.png");
    const [cpuPicture, setCpuPicture] = useState('./assets/interrogacion.png');

    return (
        <View style={styles.root}>
            <Text>{myPunctuation} ------------- {cpuPunctuation}</Text>
            <View style={styles.ImagesContainer}>
            {
                mySelection === 1 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/piedra.png')}/>
                :
                mySelection === 2 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/tijera.png')}/>
                :
                mySelection === 3 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/papel.png')}/>
                :
                mySelection === 0 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/interrogacion.png')}/>
                :
                <Text></Text>
            }
            {
                cpuSelection === 1 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/piedra.png')}/>
                :
                cpuSelection === 2 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/tijera.png')}/>
                :
                cpuSelection === 3 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/papel.png')}/>
                :
                cpuSelection === 0 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/interrogacion.png')}/>
                :
                <Text></Text>
            }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        alignSelf:"center",
    },

    ImagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    }
})

export default Piedra;