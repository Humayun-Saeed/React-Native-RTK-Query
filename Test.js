import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import { useGetPokemonByNameQuery, useAddRecordMutation ,useGetallMutation} from './Services/pokemon';
import { useDispatch, useSelector } from 'react-redux';




export const AddData = () => {
  const nameValue = useSelector((state) => state.name.name)
  const [value, setValue] = React.useState("")
  const record = {
    "attendence": value
  }
  
  var [getall,{data}] = useGetallMutation()
  useEffect(() => {
    
    getall({})
      
    }, [])
  

  
  const [AddData, { data: post, isSuccess, error }] = useAddRecordMutation()

  const OnclickHandler = async () => {
    await AddData(record)
   getall({})
  }



  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 100, alignSelf: 'center', width: '100%' }}>
        <TextInput
          style={{ backgroundColor: 'teal', marginTop: 40, width: '90%', height: 50, borderColor: 'black', alignSelf: 'center', paddingLeft: 10 }}
          value={value}
          onChangeText={setValue}
        />
      </View>
      <TouchableOpacity
        onPress={() => { OnclickHandler() }}
        style={{ justifyContent: 'center', alignSelf: 'center', backgroundColor: 'teal', width: '30%', height: 30, paddingTop: 13, alignItems: 'center' }}
      >
        <Text>Submit</Text>
        {data ?
          <Text>{data.attendence}</Text>
          : <Text>no</Text>}

      </TouchableOpacity>
      <Text></Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) =>
          <View style={{ height: 30, backgroundColor: 'teal', margin: 5 }}>
            <TouchableOpacity>
              <Text>{nameValue}{item.attendence}</Text>
            </TouchableOpacity>
          </View>}
      />
    </View>
  )
}

// export default Test

const styles = StyleSheet.create({})