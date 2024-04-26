import { View,FlatList } from 'react-native'
import { TouchableRipple,Text,Card,Avatar,Searchbar } from 'react-native-paper';
import React, { useEffect } from 'react'
import useStore from '../store/store';

export default function VocabList() {
  const { items} = useStore();
    // const data = items;
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredData, setFilteredData] = React.useState(items);
    
    useEffect(()=>{
      console.log('vocab',items)
      setFilteredData(items)
    },[])
    
    //handle search that matches text from data array and return filtered data
    const handleSearch = (query) =>{
        setSearchQuery(query)
        const regex = new RegExp(query, 'gi'); // 'gi' for global and case-insensitive matching
    const filtered = data.filter(item => item.match(regex));
          setFilteredData(filtered);
    }

    // Render View to display in Flat List
    const renderItem = ({ item,index }) => (
        <TouchableRipple
    onPress={() => console.log('Pressed',index)}
    onLongPress={()=>console.log('long')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
   <View >
   <Card.Title
    title={item.word}
    titleVariant={'titleLarge'}
    subtitle={`${item?.urdu1 || ''} ${item?.urdu2 || ''} ${item?.meaning || ''}`} 
    subtitleVariant={'bodyLarge'}
    
    left={(props) => <Avatar.Text label='Oo'  {...props} icon="code-json" color='white' style={{backgroundColor:'black'}}/>}
    
  />
   </View>
  </TouchableRipple>
      );


  return (
    <View>
      <Text style={{marginBottom:15}} variant='titleLarge'>Vocabulary List</Text>
      <Searchbar
      placeholder="Search"
      onChangeText={handleSearch}
      value={searchQuery}
    />
      <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={{marginBottom:95}}
    />
    </View>
  )
}