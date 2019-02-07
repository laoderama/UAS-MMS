import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Home';
import SosmedScreen from './Sosmed';
import BeritaScreen from './Berita_jawapos';

const Stack1 = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});


const Stack2 = StackNavigator({
  Sosmed: {
    screen: SosmedScreen ,
    navigationOptions: ({ navigation }) => ({
      title: 'Login Facebook',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});


const Stack3 = StackNavigator({
  Berita_jawapos: {
    screen: BeritaScreen ,
    navigationOptions: ({ navigation }) => ({
      title: 'Berita',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});

export default DrawerNavigator({
  Home: {
    screen: Stack1,
  },
  Sosmed: {
    screen: Stack2,
  },
  Berita_jawapos: {
    screen: Stack3,
  },
  
});