import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyles from '../styles/AppStyles'
import { useGameCheckFunction } from '../context/GameContext'
import Images from '../Images'

import { db } from '../firebase'
import { getDocs, collection } from 'firebase/firestore'

const CourseCard = ({ navigation }) => {
  const gameCheckContext = useGameCheckFunction()
  const [courseArray, setCourseArray] = useState([])

  useEffect(() => {
    const tempArray = []
    const getCourse = async () => {
      const query = await getDocs(collection(db, 'golfcourses'))
      query.forEach((doc) => {
        console.log(doc.data())
        tempArray.push(doc.data())
      })
      setCourseArray(tempArray)
    }

    getCourse()
  }, [])

  const setRightImages = (courseImage) => {
    for (let index = 0; index < Images.length; index++) {
      if (courseImage === Images[index].name) return Images[index].image
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {courseArray.map((course, index) => (
        <TouchableOpacity
          index={index}
          key={index}
          disabled={gameCheckContext.gameStarted}
          // onPress={() => {
          //   navigation.navigate('Scorecard', {
          //     courseName: course.name,
          //   })
          // }}
          onPress={() => {
            navigation.navigate('Scorecard')
          }}
        >
          <View style={styles.conteiner}>
            <ImageBackground
              style={styles.imageStyle}
              source={setRightImages(course.image)}
              resizeMode="cover"
            >
              <View style={styles.viewInsideCard}>
                <Text style={[AppStyles.h2, styles.textInsideCard]}>
                  {course.name}
                </Text>
                <Text style={[styles.textInsideCard]}>
                  {course.holes}-hålsbana
                </Text>
                <Text style={[styles.textInsideCard]}>
                  Övrigt: {course.information}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CourseCard

const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 15,
    width: '85%',
    height: 100,
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDB58E',
    alignSelf: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  viewInsideCard: {
    paddingLeft: 15,
    paddingTop: 25,
  },
  textInsideCard: {
    color: 'white',
  },
})
