import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { Appbar,Icon, MD3Colors,useTheme,Menu,PaperProvider,Button,Divider } from 'react-native-paper';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export default function Appheader() {
    const theme = useTheme();



  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
  
      <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
        <Appbar.Content title="Vocab Book" titleStyle={{color: 'white'}} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}><Icon source={MORE_ICON}
          color={'white'}
          size={20}/></Button>}>
          <Menu.Item onPress={closeMenu} title="Login" />
          <Menu.Item onPress={closeMenu} title="Settings" />
          <Divider />
          <Menu.Item onPress={closeMenu} title="About us" />
        </Menu>
      </Appbar.Header>


   
  
  );
}