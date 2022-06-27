import React from 'react';
import {StyleSheet, Image, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function Box({ id, title, description, screen}) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Text style={{fontSize: 20, margin: 10, marginHorizontal: 0, textAlign: 'center', fontWeight: 'bold', color: 'white'}}>{title}</Text>
            <Text style={{ margin: 2, color: '#DBDADA'}}>{description}</Text>
            <Button style={{alignSelf: 'flex-end'}}
                color="#66A63B"
                title="Ver"
                onPress={
                    () => navigation.navigate(screen)
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: 147,
        height: 150,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#5e2129',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
    }
})

export default Box;