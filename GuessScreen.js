import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';
import List from './List';

const mapItems = (items) => items.map((value, i) => ({ key: i.toString(), value }));

function generateRandomNumber(max, min = 1) {
    return Math.floor(Math.random()*(max-min) + min);
}

function calculateText(number, random){
    const soClose = 5;
    const diff = Math.abs(random - number);

    if (diff < soClose){
        if(number <random){
            return "Muy Cerca (bajo)";
        } else{
            return "Muy Cerca (alto)";
        }
    } else {
        if(number <random){
            return "Muy Lejos (bajo)";
        } else{
            return "Muy Lejos (alto)";
        }
    }
}

const random = generateRandomNumber(100);
const randAttempt = generateRandomNumber(100);


function GuessScreen({navigation}) {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [guessList, setGuessList] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0);
    const [myAttempt, setMyAttempt] = useState(randAttempt);
    const [maxAttempt, setMaxAttempt] = useState(100);
    const [minAttempt, setMinAttempt] = useState(0)
    const [countAttempt, setCountAttempt] = useState(0)
    const [myWin, setMyWin] = useState(false);

    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnPress = () => {
        const num = parseInt(number);
        const numRandom = parseInt(random);
        const text = calculateText(num, numRandom);

        if(num === numRandom) {
            setWin(true);
        }

        setNumber('');
        setMessage(text);
        setGuessList([
            num,
            ...guessList
        ]);
        setCount(count + 1);
    }

    const handleOnLow = () => {
        setMinAttempt(myAttempt+1);
        setMyAttempt(generateRandomNumber(maxAttempt,myAttempt+1));
        setCountAttempt(countAttempt+1);
    }

    const handleOnHigh = () => {
        setMaxAttempt(myAttempt+1);
        setMyAttempt(generateRandomNumber(myAttempt+1,minAttempt));
        setCountAttempt(countAttempt+1);
    }

    const handleOnWin = () => {
        setMyWin(true);
        setCountAttempt(countAttempt+1);
    }

    return (
        <View style={styles.game}>
            <Text style={styles.title}>Guess my number</Text>
            <TextInput
                style={styles.input}
                autoFocus
                onChangeText = {handleOnChange}
                defaultValue = {number}
            />

            <Button
                title='Probar'
                onPress={handleOnPress}
            />

            {
                win?
                    <Text>
                        Felicidades, lo haz adivinado en {count} intentos.
                    </Text>
                :
                    <Text>{message}</Text>
            }

        <List data = {mapItems(guessList)}/>

            <Text style={styles.title}>Guess your number</Text>
            <Text>{myAttempt}</Text>
            <Button title='Muy Bajo' onPress={handleOnLow}/>
            <Button title='Muy Alto' onPress={handleOnHigh}/>
            <Button title='Correcto!' onPress={handleOnWin}/>
            {
                myWin?
                    <Text>Lo he adivinado en {countAttempt} intentos!</Text>
                    : null
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    game: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
    },

    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: 'ghostwhite'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 50,
        textAlign: 'center',
    }
});

export default GuessScreen;