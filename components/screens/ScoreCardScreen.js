import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'

import AppStyles from '../../styles/AppStyles'
import ButtonDefault from '../ButtonDefault'
import { useGameCheckFunction } from '../../context/GameContext'
import Dropdown from '../Dropdown'

import { auth, db } from '../../firebase'
import { updateDoc, arrayUnion, doc } from 'firebase/firestore'

const ScoreCardScreen = ({ route, navigation }) => {
  const gameCheckContext = useGameCheckFunction()
  const { courseName, courseGuide } = route.params

  const [tee, setTee] = useState(null)
  const [hole, setHole] = useState(null)
  const [scoreCard, setScoreCard] = useState([])
  const [stroke, setStroke] = useState(false)

  const startGame = () => {
    let array = []
    for (let index = 0; index < hole; index++) {
      const data = {
        hole: courseGuide[index].hole,
        tee: tee,
        par: courseGuide[index].par,
        strokes: 0,
      }

      array.push(data)
    }

    setScoreCard(array)
    gameCheckContext.setGameStarted(true)
    // navigation.goBack()
  }

  const endGame = async () => {
    const coll = doc(db, 'users', auth.currentUser.uid)
    await updateDoc(coll, {
      history: arrayUnion({
        course: courseName,
        date: new Date(),
        scorecard: scoreCard,
      }),
    })

    gameCheckContext.setGameStarted(false)
    navigation.navigate('Home')
  }

  const selectTee = (data) => {
    setTee(data)
  }
  const selectHole = (data) => {
    setHole(data)
  }

  const setRightStrike = (hole, stroke) => {
    for (let index = 0; index < scoreCard.length; index++) {
      if (scoreCard[index].hole === hole) {
        scoreCard[index].strokes = parseInt(stroke)
      }
    }
    checkIfDone()
  }

  const checkIfDone = () => {
    if (scoreCard.every((isTrue) => isTrue.strokes != 0)) {
      setStroke(true)
    }
  }

  return (
    <ImageBackground
      style={AppStyles.container}
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
    >
      <View style={AppStyles.container}>
        <Text
          style={[
            AppStyles.h1,
            {
              textAlign: 'center',
              color: 'white',
              width: '85%',
              alignSelf: 'center',
            },
          ]}
        >
          {courseName}
        </Text>
        {!gameCheckContext.gameStarted ? (
          <View>
            <View style={styles.viewForDropdown}>
              <Dropdown
                placeholderDd={'Välj TEE'}
                DpArray={['Röd', 'Blå', 'Gul', 'Vit']}
                callBack={selectTee}
              />
              <Dropdown
                placeholderDd={'Antal hål'}
                DpArray={[9, 18]}
                callBack={selectHole}
              />
            </View>
            {tee != null && hole != null && (
              <ButtonDefault text="Starta spel" onPress={startGame} />
            )}
            <ButtonDefault
              text="Tillbaka"
              onPress={() => navigation.goBack()}
            />
          </View>
        ) : (
          <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <ScrollView keyboardDismissMode="on-drag">
              <View style={styles.scoreCard}>
                <Text style={[AppStyles.h3, styles.box]}>Hål</Text>
                <View style={styles.line}></View>
                <Text style={[AppStyles.h3, styles.box]}>TEE</Text>
                <View style={styles.line}></View>
                <Text style={[AppStyles.h3, styles.box]}>Par</Text>
                <View style={styles.line}></View>
                <Text style={[AppStyles.h3, styles.box2]}>Slag</Text>
              </View>

              <View style={{ marginBottom: 20 }}>
                {scoreCard.map((game, index) => (
                  <View index={index} key={index} style={styles.scoreCard}>
                    <Text style={[AppStyles.h3, styles.box]}>{game.hole}</Text>
                    <View style={styles.line}></View>
                    <Text style={[AppStyles.h3, styles.box]}>{game.tee}</Text>
                    <View style={styles.line}></View>
                    <Text style={[AppStyles.h3, styles.box]}>{game.par}</Text>
                    <View style={styles.line}></View>
                    <TextInput
                      key={index}
                      style={[AppStyles.h3, styles.box2]}
                      placeholder="-"
                      keyboardType="number-pad"
                      maxLength={2}
                      onChangeText={(s) => setRightStrike(game.hole, s)}
                    />
                  </View>
                ))}
              </View>

              <ButtonDefault
                text="Avsluta spel"
                onPress={endGame}
                disabled={!stroke}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </View>
    </ImageBackground>
  )
}

export default ScoreCardScreen

const styles = StyleSheet.create({
  scoreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDB58E',
  },
  line: {
    width: 1,
    height: 30,
    borderLeftWidth: 1,
    borderColor: '#DDB58E',
    opacity: 0.18,
  },
  box: {
    margin: 4,
    width: '15%',
    height: '65%',
  },
  box2: {
    margin: 4,
    width: '40%',
    height: '75%',
  },
  viewForDropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '85%',
  },
})
