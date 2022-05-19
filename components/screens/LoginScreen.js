import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import AppStyles from '../../styles/AppStyles'

import ButtonDefault from '../ButtonDefault'
import TextInputDefault from '../TextInputDefault'

const LoginScreen = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <ImageBackground
      style={AppStyles.container}
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
    >
      <View style={styles.logoView}>
        <Text style={[styles.logoText, AppStyles.h1]}>GolfHacker</Text>
      </View>
      <View style={AppStyles.container}>
        <TextInputDefault
          textCallback={setUsername}
          placeholder="Användarnamn"
        />
        <TextInputDefault textCallback={setPassword} placeholder="Lösenord" />
        <ButtonDefault
          text="Logga in"
          onPress={() => {
            console.log('Username: ', username, ' Password: ', password)
          }}
        />

        <View style={{ width: '80%', alignSelf: 'center' }}>
          <Text style={AppStyles.h3}>
            Konto sedan tidigare?{'\n'}Logga in ovan för att ladda dina
            uppgifter
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  logoView: {
    height: 180,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoText: {
    textAlign: 'center',
    color: 'white',
  },
})
