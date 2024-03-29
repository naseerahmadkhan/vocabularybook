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



export default function TranslationScreen() {
  const [text, setText] = React.useState('');
  const [translatedFromGoogle, setTranslatedFromGoogle] = React.useState('');




  const clearText = () =>{
    setText("")
    setTranslatedFromGoogle("")
  }


  const translateFromGoogleApi = async () => {
    const result = await translate(text, {to: 'ur'});
    setTranslatedFromGoogle(result);
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

      <View style={{flexDirection:'row',flex:0.2,justifyContent:'space-between',marginBottom:'5%'}}>
      <TouchableRipple
          style={{justifyContent: 'center',alignItems:'center'}}
          onPress={() => translateFromGoogleApi()}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon source="file-find" color={MD3Colors.primary10} size={50} />
        </TouchableRipple>

        <TouchableRipple
          style={{ justifyContent: 'center',alignItems:'center'}}
          onPress={() => clearText()}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon source="volume-high" color={MD3Colors.secondary50} size={50} />
        </TouchableRipple>

        <TouchableRipple
          style={{ justifyContent: 'center',alignItems:'center'}}
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
          style={{ justifyContent: 'center',alignItems:'center'}}
          onPress={() => clearText()}
          rippleColor="rgba(0, 0, 0, .32)">
          <Icon source="plus" color={MD3Colors.neutral10} size={50} />
        </TouchableRipple>
        </View>

        

        

        
      </View>

      

        

   
    </ScrollView>
  );
}
