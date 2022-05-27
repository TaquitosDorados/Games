import React from 'react';
import {Button, View, Text, Image} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: 'gray'}}>
            <Image style={{width: '100%', height: '30%'}} source={require('./piratas.jpg')}/>
            <Text style={{padding: 10, fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>Bienvenido a juegospirata.com</Text>
            <Text style={{padding: 10, fontSize: 20, textAlign: 'center'}}>Llevate un juego y te regalamos un Troyano completamente Gratis!!</Text>
            <Image style={{width: '40%', height: '30%', alignSelf: 'center'}} source={require('./cholo.png')}/>
            <Button 
            style={{width: '100%', height: '30%'}}
                title="Comenzar"
                onPress={() => navigation.navigate('Directory')}
            />
            
        </View>
    );
}

export default HomeScreen;