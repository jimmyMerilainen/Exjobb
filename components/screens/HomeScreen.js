import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBarComponent from '../SearchBarComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import CourseCard from '../CourseCard'

const HomeScreen = ({ navigation }) => {
  const [searchWord, setSearchWord] = useState('')

  const wordToSearch = (data) => {
    console.log('homescreen', data)
    setSearchWord(data)
  }

  // useEffect(() => {
  //   console.log('homescreen', wordToSearch)
  // }, [wordToSearch])

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBarComponent callBack={wordToSearch} />
        <ScrollView keyboardDismissMode="on-drag">
          <CourseCard navigation={navigation} searchWord={searchWord} />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
