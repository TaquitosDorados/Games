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
    const [cpuPunctuation, setCPUPunctuation] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [message, setMessage] = useState('');

    const becomePiedra = () => {
        setMySelection(1);
        const newRand = generateRandomNumber(1,4);
        setCPUSelection(newRand);
        calculatePunctuation(1, newRand);
    }
    const becomePapel = () => {
        setMySelection(2);
        const newRand = generateRandomNumber(1,4);
        setCPUSelection(newRand);
        calculatePunctuation(2, newRand);
    }
    const becomeTijera = () => {
        setMySelection(3);
        const newRand = generateRandomNumber(1,4);
        setCPUSelection(newRand);
        calculatePunctuation(3, newRand);
    }

    function calculatePunctuation(yo, cpu){
        let myPunt, cpuPunt;
        if(yo === 1){
            if(cpu === 2){
                setCPUPunctuation(cpuPunctuation+1);
                cpuPunt = cpuPunctuation+1;
            } else if(cpu === 3) {
                setMyPunctuation(myPunctuation +1)
                myPunt = myPunctuation+1;
            }
        } else if(yo === 2){
            if(cpu === 3){
                setCPUPunctuation(cpuPunctuation+1);
                cpuPunt = cpuPunctuation+1;
            } else if(cpu === 1) {
                setMyPunctuation(myPunctuation +1)
                myPunt = myPunctuation+1;
            }
        } else {
            if(cpu === 1){
                setCPUPunctuation(cpuPunctuation+1);
                cpuPunt = cpuPunctuation+1;
            } else if(cpu === 2) {
                setMyPunctuation(myPunctuation +1)
                myPunt = myPunctuation+1;
            }
        }

        checkScores(myPunt,cpuPunt);
    }

    function checkScores(yo, cpu) {
        if(yo===3){
            setGameEnded(true);
            setMessage('Haz Ganado!');
        } else if(cpu === 3){
            setGameEnded(true);
            setMessage('Haz Perdido!');
        }
    }

    function restartGame() {
        setGameEnded(false);
        setMyPunctuation(0);
        setMySelection(0);
        setCPUPunctuation(0);
        setCPUSelection(0);
    }

    return (
        <View style={styles.root}>
            <Text>{myPunctuation} ------------- {cpuPunctuation}</Text>
            <View style={styles.ImagesContainer}>
            {
                mySelection === 1 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/piedra.png')}/>
                :
                mySelection === 2 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/papel.png')}/>
                :
                mySelection === 3 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/tijera.png')}/>
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
                <Image style={{width: 100, height: 100}} source={require('./assets/papel.png')}/>
                :
                cpuSelection === 3 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/tijera.png')}/>
                :
                cpuSelection === 0 ?
                <Image style={{width: 100, height: 100}} source={require('./assets/interrogacion.png')}/>
                :
                <Text></Text>
            }
            </View>

            <View style={styles.ImagesContainer}>
                {
                    gameEnded?
                    <View>
                    <Text style={{alignSelf: 'center'}}>{message}</Text>
                    <Button onPress={restartGame} title="Jugar de Nuevo"/>
                    </View>
                    :
                    <View style={styles.ImagesContainer}>
                    <Button onPress={becomePiedra} title="Piedra" id="1"/>
                    <Button onPress={becomePapel} title="Papel" id="2"/>
                    <Button onPress={becomeTijera} title="Tijera" id="3"/>
                    </View>
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