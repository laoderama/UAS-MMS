//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style ={{fontSize:20, fontWeight: 'bold'}}>Selamat Datang Di Aplikasi Kami</Text>
                <Text style = {{fontSize:15, fontWeight: 'bold'}}>Ini Halaman Utama Anda {'\n'}{'\n'}{'\n'}{'\n'}</Text> 
                <Text>NAMA KELOMPOK :</Text>
                <Text style = {{fontSize:15, fontWeight: 'bold'}}>Ramadhan Ismail H{'\n'}</Text> 
                <Text style = {{fontSize:15, fontWeight: 'bold'}}>Hasan Tabir{'\n'}</Text>
                <Text style = {{fontSize:15, fontWeight: 'bold'}}>Dana Harlianyah {'\n'}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default HomeScreen;