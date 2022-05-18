import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const SearchBarComponent = () => {
  const [wordToSearch, setWordToSearch] = useState('')

  const searchButton = () => {
    Keyboard.dismiss()
  }
  return (
    <View style={styles.conteiner}>
      <TextInput
        placeholder="Sök"
        placeholderTextColor="#DDB58E"
        selectionColor="#DDB58E"
        color="#DDB58E"
        returnKeyType="search"
        style={styles.inputStyle}
        onChangeText={setWordToSearch}
        onSubmitEditing={() => searchButton()}
        value={wordToSearch}
      />
      <View style={styles.lineNearIcon}></View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => searchButton()}
      >
        <Ionicons name="search" size={30} color="#DDB58E" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBarComponent

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '85%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDB58E',
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 55,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineNearIcon: {
    width: 1,
    height: 50,
    borderLeftWidth: 1,
    borderColor: '#DDB58E',
    opacity: 0.18,
  },
  inputStyle: {
    height: 63,
    flex: 1,
    padding: 10,
    marginLeft: 5,
    fontSize: 17,
  },
})
