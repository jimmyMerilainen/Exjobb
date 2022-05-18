import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import SearchBarComponent from '../SearchBarComponent'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBarComponent />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
