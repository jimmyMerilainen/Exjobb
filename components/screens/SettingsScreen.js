import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import AppStyles from '../../styles/AppStyles'
import ButtonDefault from '../ButtonDefault'

const SettingsScreen = () => {
  return (
    <ImageBackground
      style={AppStyles.container}
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
    >
      <View style={[AppStyles.container, styles.container]}>
        <ButtonDefault
          text="Ändra lösenord"
          onPress={() => {
            console.log('Ändra lösenord')
          }}
        />
        <ButtonDefault
          text="Om appen"
          onPress={() => {
            console.log('Om appen')
          }}
        />
        <ButtonDefault
          text="Logga ut"
          onPress={() => {
            console.log('Logga ut')
          }}
        />
      </View>
    </ImageBackground>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
})
