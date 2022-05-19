import React, { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'

import AppStyles from '../../styles/AppStyles'
import ButtonDefault from '../ButtonDefault'
import { useGameCheckFunction } from '../../context/GameContext'

const ScoreCardScreen = ({ navigation }) => {
  const gameCheckContext = useGameCheckFunction()
  // const { courseName } = route.params
  const [showRightButton, setShowRightButton] = useState(false)

  const startGame = () => {
    setShowRightButton(true)
    gameCheckContext.setGameStarted(true)
    navigation.goBack()
  }

  const endGame = () => {
    setShowRightButton(false)
    gameCheckContext.setGameStarted(false)
    navigation.navigate('Home')
  }

  return (
    <ImageBackground
      style={AppStyles.container}
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
    >
      <View style={AppStyles.container}>
        <Text style={[AppStyles.h1, { textAlign: 'center', color: 'white' }]}>
          Score kort
        </Text>
        {!gameCheckContext.gameStarted ? (
          <View>
            <ButtonDefault text="Starta spel" onPress={startGame} />
            <ButtonDefault
              text="Tillbaka"
              onPress={() => navigation.goBack()}
            />
          </View>
        ) : (
          <ButtonDefault text="Avsluta spel" onPress={endGame} />
        )}
      </View>
    </ImageBackground>
  )
}

export default ScoreCardScreen
