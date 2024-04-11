import { View,FlatList } from 'react-native'
import { TouchableRipple,Text,Card,Avatar,Searchbar } from 'react-native-paper';
import React from 'react'


export default function VocabList() {

    const data = ['one','two','three','four','five','six','seven','eight','nine','ten','elenvs','twelve']
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredData, setFilteredData] = React.useState(data);
    
    
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
    title={item}
    titleVariant={'titleLarge'}
    subtitle="Card Subtitle"
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