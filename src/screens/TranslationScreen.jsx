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
  BottomNavigation,
} from 'react-native-paper';
import gTranslate from 'translate-google-api';
import { translate } from '@vitalets/google-translate-api';

import {ScrollView} from 'react-native';

export default function TranslationScreen() {
  const [text, setText] = React.useState('');
  const [translatedFromGoogle, setTranslatedFromGoogle] = React.useState('');
  const [translatedFromGoogleV, setTranslatedFromGoogleV] = React.useState('');

  const [wordDefinition, setWordDefinition] = React.useState('');

  const clearText = () => {
    setText('');
    setTranslatedFromGoogle('');
  };

  const doTranslate = () =>{
    translateFromGoogleApi()
    translateFromGoogleApiVitalets()

  }

  const translateFromGoogleApi = async () => {
    const result = await gTranslate(text, {to: 'ur'});
    setTranslatedFromGoogle(result);
  };

  const translateFromGoogleApiVitalets = async () =>{
    const result = await translate(text, { to: 'ur' });
    setTranslatedFromGoogleV(result.text);

   
  }

  const getDefinition = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(JSON.stringify(result[0].meanings[0].definitions));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        flexDirection: 'column',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TextInput
            label="Text"
            style={{marginBottom: 5}}
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flex: 0.2,
          justifyContent: 'space-between',
          marginBottom: '5%',
        }}>
        <TouchableRipple
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => doTranslate()}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon source="file-find" color={MD3Colors.primary10} size={50} />
        </TouchableRipple>

        <TouchableRipple
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => clearText()}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon source="volume-high" color={MD3Colors.secondary50} size={50} />
        </TouchableRipple>

        <TouchableRipple
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => clearText()}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon source="delete" color={MD3Colors.error60} size={50} />
        </TouchableRipple>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.86}}>
          <TextInput
            label="Translation from google"
            style={{marginBottom: 5}}
            value={translatedFromGoogle + ''}
            onChangeText={val => setTranslatedFromGoogle(val)}
            on
          />
        </View>

        <View style={{flex: 0.14, justifyContent: 'center'}}>
          <TouchableRipple
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => console.log()}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon source="content-copy" color={MD3Colors.neutral10} size={30} />
          </TouchableRipple>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.86}}>
          <TextInput
            label="Translation from google"
            style={{marginBottom: 5}}
            value={translatedFromGoogleV + ''}
            onChangeText={val => setTranslatedFromGoogleV(val)}
            on
          />
        </View>

        <View style={{flex: 0.14, justifyContent: 'center'}}>
          <TouchableRipple
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => console.log()}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon source="content-copy" color={MD3Colors.neutral10} size={30} />
          </TouchableRipple>
        </View>
      </View>

    </ScrollView>
  );
}
