//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';


// create a component
class Berita_jawapos extends Component {
   render() {
        return (
            <View style={{flex:1}}>
                <WebView
        source={{uri: 'https://www.jawapos.com/'}}
        
      />
            </View>
        );
    }
}

// define your styles


//make this component available to the app
export default Berita_jawapos;