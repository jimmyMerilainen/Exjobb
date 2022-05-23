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

import { auth, db } from '../firebase'
import { doc, setDoc, getDocs, QuerySnapshot, getDoc } from 'firebase/firestore'

const CourseCard = ({ navigation }) => {
  const gameCheckContext = useGameCheckFunction()
  const [testarray, setTestarray] = useState([])

  useEffect(() => {
    // const test = db.collection('golfcourses').get()
    // .then((doc) => {
    //   doc.forEach((course) => {
    //     setTestarray(course)
    //   })
    // })
    const testarigen = async () => {
      const getCourses = doc(db, 'golfcourses', 'DJ9tzGnEfbMdFGzefCeR')
      // console.log('!!!!!', getCourses.data)
      await getDoc(getCourses).then((snap) => {
        console.log(snap.data())
        // setTestarray(snap.data())
      })
    }
    testarigen()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {testarray.map((course, index) => (
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
              source={require('../assets/images/golfCourse.jpg')}
              resizeMode="cover"
            >
              <View style={styles.viewInsideCard}>
                <Text style={[AppStyles.h2, styles.textInsideCard]}>
                  {course.name}
                </Text>
                <Text style={[styles.textInsideCard]}>{course.hols}</Text>
                <Text style={[styles.textInsideCard]}>
                  Övrigt: {course.info}
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
