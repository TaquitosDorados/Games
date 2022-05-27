import React from 'react';
import {Button, View, Text, Image, TextInput, StyleSheet} from 'react-native';

function GuessScreen({navigation}) {
    return (
        <View>
            <Text>Guess my number</Text>
            <TextInput
                style={styles.input}
                onChangeText={0}
                value={0}
                placeholder="0"
                keyboardType="numeric"
            />
            <Text>Guess your number</Text>
            <Text>00</Text>
            <Button title='Muy Bajo (Dif > 25)'/>
            <Button title='Bajo (Dif > 10)'/>
            <Button title='Cercanamente Bajo (Dif < 10)'/>
            <Button title='Correcto'/>
            <Button title='Cercanamente Alto (Dif < 10)'/>
            <Button title='Alto (Dif > 10)'/>
            <Button title='Muy Alto (Dif > 25)'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default GuessScreen;