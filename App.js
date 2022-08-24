import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const onPressItemDelete = (key) => {
    const newTodos = todos.filter(item => item.key !== key);
    setTodos(newTodos);
  }

  const onChangeText = (value) => {
    setText(value);
  }

  const onPressButton = () => {
    const newTodos = [...todos, {
      name: text,
      key:Math.random().toString(),
    }]
    setText('');
    setTodos(newTodos);
  }

// todoItem component
const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteView}
          onPress={() => onPressItemDelete(item.key)}
        >
        <Text style={styles.deleteText}>削除</Text>
        </TouchableOpacity>
      </View>
    )
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo app</Text>
        <TextInput style={styles.textInput} value={text} onChangeText={onChangeText} />
        <View style={styles.button}>
          <Button
            title='登録'
            onPress={onPressButton}
            color='black'
          />
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop:80,
  },
  button: {
    backgroundColor: 'grey',
    borderRadius:'8',
  },
  itemName: {
    fontSize: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'lightblue',
    width: 300,
    height: 80,
    margin: 8,
    borderRadius:8,
  },
  deleteView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    width: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    margin: 8,
  },
  deleteText:{
    color: 'black',
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom:20,
  },
});