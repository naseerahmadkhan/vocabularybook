import { useState,useEffect } from 'react';
import * as React from 'react';
import { View,ScrollView } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text,TextInput } from 'react-native-paper';
import useStore from '../store/store';
import { addRecordInDB } from '../config/firebase/firebase';

const AlertBox = (props) => {
  
  const data = props.data
  const [word,setWord] = useState(data.word)
  const [urdu1,setUrdu1] = useState(data.urdu1)
  const [urdu2,setUrdu2] = useState(data.urdu2)
  const [explanation,setExplanation] = useState('')
  const { items,addItem } = useStore();
  const [disableBtn,setDisableBtn] = useState(false)


  useEffect(() => {
    // console.log('*****Updated items:', items);
  }, [items]);


  const add = async() =>{
    setDisableBtn(true)
    let obj = {}
    if((word.length > 0) && (urdu1 == urdu2)){
      obj = {word:word,urdu1:urdu1,explanation:explanation}
    }else if((word.length > 0) && (urdu1 != urdu2)){
      obj = {word:word,urdu1:urdu1,urdu2:urdu2,explanation:explanation}
    }

    let tempList = [...items,obj]

    try {
      const result = await addRecordInDB(obj);
      addItem(obj)
      console.log(result); // "Successfully added" if successful
      alert('successfully added');
  } catch (error) {
      console.error(error); // Error message if failed
      alert('failed to add');
  }

    
    obj = {}
    props.hide()
    setDisableBtn(false)
    
  }

  const hideDialog = () => {
    console.log('printing',items)
    props.hide()
  };

  let fields
  if(data.urdu1 != data.urdu2){
    
    fields = (<View>
              <TextInput style={{fontSize:30}} label="Meaning2" multiline={true} value={`${urdu2}`} onChangeText={text=> setUrdu2(text)}/>

    </View>)

  }

  return (
    <PaperProvider >
      <View >
        <Portal >
          <Dialog visible={true} onDismiss={hideDialog} style={{maxHeight:'90%'}}>
            <Dialog.Title>Add word</Dialog.Title>
            <ScrollView>
            <Dialog.Content>
            <TextInput style={{fontSize:30}} label="Word" value={`${word}`} onChangeText={text => setWord(text)} />
            <TextInput style={{fontSize:30}} label="Meaning"  value={`${urdu1}`} onChangeText={text=>setUrdu1(text)}/>
              {
                fields
              }
            

              <TextInput style={{fontSize:25}} label="Explanation" multiline={true} value={explanation} onChangeText={text=>setExplanation(text)} />
              
            </Dialog.Content>
            </ScrollView>
            <Dialog.Actions>
              <Button disabled={disableBtn} onPress={add}>ADD</Button>
              <Button disabled={disableBtn} onPress={hideDialog}>Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default AlertBox;