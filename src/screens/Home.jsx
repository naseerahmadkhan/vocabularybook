import {View} from 'react-native';
import React from 'react';
import {
  TextInput,
  Button,
  Text,
  Avatar,
  Card,
  IconButton,
  Icon,
  TouchableRipple,
  MD3Colors,
  BottomNavigation
} from 'react-native-paper';
import translate from 'translate-google-api';
import { ScrollView } from 'react-native';
import TranslationScreen from './TranslationScreen';
import VocabList from './VocabList';




export default function Home() {


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'search', title: 'Search', focusedIcon: 'file-find', unfocusedIcon: 'file-find-outline'},
    { key: 'list', title: 'Vocab List', focusedIcon: 'view-list', unfocusedIcon: 'format-list-bulleted-square' },

  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: TranslationScreen,
    list: VocabList,

  });





  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: 'column',
      }}>
     
        <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </View>
  );
}
