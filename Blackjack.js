import React, {useState} from 'react';
import {StyleSheet, View, Button, Image, Text, TextInput} from 'react-native';
import List from './List';

function generateRandomNumber(max, min = 1) {
    return Math.floor(Math.random()*(max-min) + min);
}

const mapItems = (items) => items.map((value, i) => ({ key: i.toString(), value }));

function interpretarCarta(x){
    let numero = '';
    let symb = '';

    switch (x%13) {
        case 0:
            numero = 'K';
            break;
        case 1:
            numero = 'A';
            break;
        case 2:
            numero = '2';
            break;
        case 3:
            numero = '3';
            break;
        case 4:
            numero = '4';
            break;
        case 5:
            numero = '5';
            break;
        case 6:
            numero = '6';
            break;
        case 7:
            numero = '7';
            break;
        case 8:
            numero = '8';
            break;
        case 9:
            numero = '9';
            break;
        case 10:
            numero = '10';
            break;
        case 11:
            numero = 'J';
            break;
        case 12:
            numero = 'Q';
            break;
    }

    switch (x%4) {
        case 0:
            symb = '♥';
            break;
        case 1:
            symb = '♦';
            break;
        case 2:
            symb = '♣';
            break;
        case 3:
            symb = '♠';
            break;
    }
    
    return numero + symb;
}

function calculatePunctuation(cards){
    let score = 0;
    let numAs = 0;
    cards.map((cards, i) => {
        switch (cards) {
            case 'A♦':
                numAs += 1;
                break;
            case '2♦':
                score += 2;
                break;
            case '3♦':
                score += 3;
                break;
            case '4♦':
                score += 4;
                break;
            case '5♦':
                score += 5;
                break;
            case '6♦':
                score += 6;
                break;
            case '7♦':
                score += 7;
                break;
            case '8♦':
                score += 8;
                break;
            case '9♦':
                score += 9;
                break;
            case '10♦':
                score += 10;
                break;
            case 'J♦':
                score += 10;
                break;
            case 'Q♦':
                score += 10;
                break;
            case 'K♦':
                score += 10;
                break;

                case 'A♥':
                    numAs += 1;
                    break;
                case '2♥':
                    score += 2;
                    break;
                case '3♥':
                    score += 3;
                    break;
                case '4♥':
                    score += 4;
                    break;
                case '5♥':
                    score += 5;
                    break;
                case '6♥':
                    score += 6;
                    break;
                case '7♥':
                    score += 7;
                    break;
                case '8♥':
                    score += 8;
                    break;
                case '9♥':
                    score += 9;
                    break;
                case '10♥':
                    score += 10;
                    break;
                case 'J♥':
                    score += 10;
                    break;
                case 'Q♥':
                    score += 10;
                    break;
                case 'K♥':
                    score += 10;
                    break;
                    case 'A♣':
                        numAs += 1;
                        break;
                    case '2♣':
                        score += 2;
                        break;
                    case '3♣':
                        score += 3;
                        break;
                    case '4♣':
                        score += 4;
                        break;
                    case '5♣':
                        score += 5;
                        break;
                    case '6♣':
                        score += 6;
                        break;
                    case '7♣':
                        score += 7;
                        break;
                    case '8♣':
                        score += 8;
                        break;
                    case '9♣':
                        score += 9;
                        break;
                    case '10♣':
                        score += 10;
                        break;
                    case 'J♣':
                        score += 10;
                        break;
                    case 'Q♣':
                        score += 10;
                        break;
                    case 'K♣':
                        score += 10;
                        break;
                        
                        case 'A♠':
                            numAs += 1;
                            break;
                        case '2♠':
                            score += 2;
                            break;
                        case '3♠':
                            score += 3;
                            break;
                        case '4♠':
                            score += 4;
                            break;
                        case '5♠':
                            score += 5;
                            break;
                        case '6♠':
                            score += 6;
                            break;
                        case '7♠':
                            score += 7;
                            break;
                        case '8♠':
                            score += 8;
                            break;
                        case '9♠':
                            score += 9;
                            break;
                        case '10♠':
                            score += 10;
                            break;
                        case 'J♠':
                            score += 10;
                            break;
                        case 'Q♠':
                            score += 10;
                            break;
                        case 'K♠':
                            score += 10;
                            break;
        }
    })

    for (let i=0;i<numAs;i++){
        if(score + 11<=21){
            score += 11;
        } else {
            score ++;
        }
    }

    return score;
}

function Blackjack(props) {
    const [cardList, setCardList] = useState([
        interpretarCarta(generateRandomNumber(53,1)),
        interpretarCarta(generateRandomNumber(53,1)),
    ]);
    const [cpuCardList, setCpuCardList] = useState([interpretarCarta(generateRandomNumber(53,1)),]);
    const [currentScore, setCurrentScore] = useState(calculatePunctuation(cardList));
    const [cpuScore, setCpuScore] = useState(calculatePunctuation(cpuCardList));
    const [gameEnded, setGameEnded] = useState(false);
    const [message, setMessage] = useState('');

    handleOnHit = () => {
        const newCardList = [
            ...cardList,
            interpretarCarta(generateRandomNumber(53,1))
        ];

        setCardList([
            ...newCardList,
        ])
        const newScore = calculatePunctuation(newCardList);
        setCurrentScore(newScore);

        setMessage(checkScores(newScore, cpuScore));
    }

    handleOnHold = () => {
        let newCpuScore = cpuScore;
        let newCpuCardList = [
            ...cpuCardList
        ];

        while(newCpuScore<17){
            newCpuCardList = [
                ...newCpuCardList,
                interpretarCarta(generateRandomNumber(53,1))
            ];
            newCpuScore = calculatePunctuation(newCpuCardList);
        }

        setCpuCardList([...newCpuCardList]);
        setCpuScore(newCpuScore);

        setMessage(checkScores(currentScore,newCpuScore));
        setGameEnded(true);
    }

    function checkScores(score, cpuScore){
        if(score === 21){
            setGameEnded(true);
            return 'BLACKJACK!';
        } else if(score>21){
            setGameEnded(true);
            return `${score}. Te haz pasado!`;
        } else if(cpuScore>21){
            setGameEnded(true);
            return `${cpuScore} - ${score}. Haz ganado!`;
        } else if(score>cpuScore){
            return `${cpuScore} - ${score}. Haz ganado!`;
        } else if(score<cpuScore){
            return `${cpuScore} - ${score}. Haz perdido!`;
        } else {
            return `${cpuScore} - ${score}. Empate!`;
        }
    }

    function restartGame(){
        const newCardList = 
        [
            interpretarCarta(generateRandomNumber(53,1)),
            interpretarCarta(generateRandomNumber(53,1))
        ];

        const newCpuCardList = [
            interpretarCarta(generateRandomNumber(53,1)),
        ];

        const newScore = calculatePunctuation(newCardList);
        const newCpuScore = calculatePunctuation(newCpuCardList);

        setCardList([...newCardList]);
        setCpuCardList([...newCpuCardList]);
        setCurrentScore(newScore);
        setCpuScore(newCpuScore);
        setGameEnded(false);
    }

    return (
        <View>
            <Text>Trata de Sacar 21!</Text>
            <Text>Cartas Del Rival</Text>
            <List data = {mapItems(cpuCardList)} ></List>
            <Text>Tus Cartas</Text>
            <List data = {mapItems(cardList)} ></List>
            
            {
                gameEnded?
                <View>
                    <Text>{message}</Text>
                    <Button onPress={restartGame} title="Jugar de Nuevo"/>
                </View>
                :
                <View>
                <Button title = "Hit Me" onPress = {handleOnHit}/>
                <Button title = "Hold" onPress = {handleOnHold}/>
                </View>
            }
        </View>
    );
}

export default Blackjack;