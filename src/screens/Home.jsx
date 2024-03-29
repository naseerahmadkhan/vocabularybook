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

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;


export default function Home() {


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'search', title: 'Search', focusedIcon: 'file-find', unfocusedIcon: 'file-find-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: TranslationScreen,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
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
