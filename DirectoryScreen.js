import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView, StatusBar, View} from 'react-native';
import Box from './Box';
import Games from './Juegos';


function DirectoryScreen() {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.root}>
            <View style={styles.containerBox}>
                {
                    Games.map((Games, i) => (
                        <Box 
                            key={i}
                            id = {Games.id}
                            title = {Games.title}
                            description = {Games.description}
                            screen = {Games.screen}
                        />
                    ))
                }
            </View>



        </View>
      </ScrollView>
      
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'gray',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },

    container: {
        backgroundColor: 'gray',
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        marginHorizontal: 20,
        //marginBottom: 50
      },
})

export default DirectoryScreen;