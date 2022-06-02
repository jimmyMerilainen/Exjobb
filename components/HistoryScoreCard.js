import React from 'react'
import { View, Text, Modal, ScrollView } from 'react-native'

import AppStyles from '../styles/AppStyles'
import ButtonDefault from './ButtonDefault'

const HistoryScoreCard = ({
  data,
  modalVisible,
  setModalVisible,
  deleteItem,
}) => {
  let game = data.scorecard
  let courseName = data.course

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View
        style={[
          AppStyles.modalView,
          AppStyles.border,
          AppStyles.shadow,
          { height: 700, width: '95%' },
        ]}
      >
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={[AppStyles.h1, { textAlign: 'center' }]}>
            {courseName}
          </Text>
        </View>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          <View style={AppStyles.scoreCard}>
            <Text style={[AppStyles.h3, AppStyles.box]}>Hål</Text>
            <View style={AppStyles.line}></View>
            <Text style={[AppStyles.h3, AppStyles.box]}>TEE</Text>
            <View style={AppStyles.line}></View>
            <Text style={[AppStyles.h3, AppStyles.box]}>Par</Text>
            <View style={AppStyles.line}></View>
            <Text style={[AppStyles.h3, AppStyles.box2]}>Slag</Text>
          </View>

          <View style={{ marginBottom: 20 }}>
            {game &&
              game.map((game, index) => (
                <View index={index} key={index} style={AppStyles.scoreCard}>
                  <Text style={[AppStyles.h3, AppStyles.box]}>{game.hole}</Text>
                  <View style={AppStyles.line}></View>
                  <Text style={[AppStyles.h3, AppStyles.box]}>{game.tee}</Text>
                  <View style={AppStyles.line}></View>
                  <Text style={[AppStyles.h3, AppStyles.box]}>{game.par}</Text>
                  <View style={AppStyles.line}></View>
                  <Text style={[AppStyles.h3, AppStyles.box2]}>
                    {String(game.strokes)}
                  </Text>
                </View>
              ))}
          </View>
        </ScrollView>
        <View style={[{ marginTop: 20, marginBottom: 20, width: '100%' }]}>
          <ButtonDefault
            text="Radera Scorekort"
            onPress={() => {
              deleteItem(data)
              setModalVisible(!modalVisible)
            }}
          />
          <ButtonDefault
            text="Tillbaka"
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default HistoryScoreCard
