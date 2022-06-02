import React, { useState } from 'react'
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

import ButtonDefault from './ButtonDefault'
import AppStyles from '../styles/AppStyles'
import TextInputDefault from './TextInputDefault'
import ChangeErrorText from './ChangeErrorText'

const RegisterOverlay = ({ handleOnPress }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('Account created with email: ', user.email)

        const newUser = doc(db, 'users', user.uid)
        const newUserData = { username: username, userId: user.uid }

        setDoc(newUser, newUserData)
      })
      .catch((error) => {
        console.log(error.message)
        setErrorMessage(error.message)
      })
  }

  return (
    <View
      style={[
        AppStyles.registerView,
        AppStyles.shadow,
        AppStyles.grey,
        AppStyles.border,
        ,
        {
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        },
      ]}
    >
      <KeyboardAvoidingView behavior={'position'}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View
            style={[AppStyles.modalView, AppStyles.border, AppStyles.shadow]}
          >
            <Text style={[AppStyles.modalText, AppStyles.h1, {}]}>
              Skapa Konto
            </Text>
            <Text style={[AppStyles.modalText, AppStyles.h3]}>
              Skriv in dina uppgifter nedan
            </Text>
            <TextInputDefault
              textCallback={setUsername}
              placeholder="Användarnamn"
            />
            <TextInputDefault textCallback={setEmail} placeholder="Email" />
            <TextInputDefault
              type="password"
              textCallback={setPassword}
              placeholder="Lösenord"
            />
            <View style={{ width: '100%' }}>
              <ButtonDefault
                style={{}}
                text="Registrera"
                onPress={() => {
                  handleCreateAccount()
                }}
              />
              <ButtonDefault
                text="Avbryt"
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              />
            </View>
            {errorMessage && (
              <ChangeErrorText
                text={errorMessage}
                style={{ marginBottom: 15 }}
              />
            )}
          </View>
        </Modal>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text
          style={[
            AppStyles.buttonText,
            { color: 'white', textAlign: 'center' },
          ]}
        >
          Registrera
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterOverlay
