import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from 'react-native'

import AppStyles from '../../styles/AppStyles'
import ButtonDefault from '../ButtonDefault'
import { useGameCheckFunction } from '../../context/GameContext'

const ScoreCardScreen = ({ navigation }) => {
  const gameCheckContext = useGameCheckFunction()
  // const { courseName } = route.params
  const [showRightButton, setShowRightButton] = useState(false)
  const [testArray, setTestArray] = useState(
    { hole: 1, tee: 'Gul', par: 3, strokes: null },
    { hole: 2, tee: 'Gul', par: 4, strokes: null },
    { hole: 3, tee: 'Gul', par: 3, strokes: null },
    { hole: 4, tee: 'Gul', par: 5, strokes: null },
    { hole: 5, tee: 'Gul', par: 4, strokes: null },
    { hole: 6, tee: 'Gul', par: 4, strokes: null },
    { hole: 7, tee: 'Gul', par: 3, strokes: null },
    { hole: 8, tee: 'Gul', par: 4, strokes: null },
    { hole: 9, tee: 'Gul', par: 5, strokes: null }
  )

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
          <View>
            <View style={[styles.scoreCardView, AppStyles.border]}>
              <View style={[styles.infoLine, AppStyles.border]}>
                <Text style={AppStyles.h3}>Hål</Text>
                <View style={styles.line}></View>
                <Text style={AppStyles.h3}>TEE</Text>
                <View style={styles.line}></View>
                <Text style={AppStyles.h3}>Par</Text>
                <View style={styles.line}></View>
                <Text style={AppStyles.h3}>Slag</Text>
              </View>
              {/* {testArray.map((game, index) => (
                <View
                  index={index}
                  key={index}
                  style={[styles.infoLine, AppStyles.border]}
                >
                  <Text style={AppStyles.h3}>{game.hole}</Text>
                  <View style={styles.line}></View>
                  <Text style={AppStyles.h3}>{game.tee}</Text>
                  <View style={styles.line}></View>
                  <Text style={AppStyles.h3}>{game.par}</Text>
                  <View style={styles.line}></View>
                  <TextInput placeholder="?"></TextInput>
                </View>
              ))} */}
            </View>
            <ButtonDefault text="Avsluta spel" onPress={endGame} />
          </View>
        )}
      </View>
    </ImageBackground>
  )
}

export default ScoreCardScreen

const styles = StyleSheet.create({
  scoreCardView: {
    // flex: 1,
    // paddingTop: 5,
    width: '85%',
    height: 150,
    marginBottom: 20,
    // alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  infoLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    width: 1,
    height: 30,
    borderLeftWidth: 1,
    borderColor: '#96C2A8',
    // borderColor: '#DDB58E',
    opacity: 0.18,
  },
})
