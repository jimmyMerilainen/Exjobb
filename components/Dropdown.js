import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyles from '../styles/AppStyles'
import { Ionicons } from '@expo/vector-icons'

const Dropdown = ({ placeholderDd, DpArray, callBack }) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [placeholder, setPlacholder] = useState(null)
  const [dropdownArray, setDropdownArray] = useState([])
  // const [checkBeforeStart, setCheckBeforeStart] = useState(false)

  useEffect(() => {
    setPlacholder(placeholderDd)
    setDropdownArray(DpArray)
  }, [])

  const pressDropdown = () => {
    setOpenDropdown(true)
    if (openDropdown) {
      setOpenDropdown(false)
    }
  }

  const pressInsideDropdown = (info) => {
    setOpenDropdown(false)
    setPlacholder(info)
    callBack(info)
  }

  return (
    <View style={[styles.conteiner]}>
      <TouchableOpacity onPress={pressDropdown}>
        <View style={[styles.dropdownView]}>
          <Text style={[AppStyles.buttonText, styles.placholderStyle]}>
            {placeholder}
          </Text>
          <Ionicons
            name={
              openDropdown
                ? 'arrow-up-circle-outline'
                : 'arrow-down-circle-outline'
            }
            size={24}
            style={styles.iconStyle}
          />
        </View>
      </TouchableOpacity>
      {openDropdown && (
        <View style={styles.openDropdownStyle}>
          {openDropdown &&
            dropdownArray.map((info, index) => (
              <View index={index} key={index}>
                <TouchableOpacity onPress={() => pressInsideDropdown(info)}>
                  <Text style={[AppStyles.buttonText, styles.placholderStyle]}>
                    {info}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      )}
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
  conteiner: {
    // backgroundColor: 'blue',
    marginBottom: 20,
  },
  dropdownView: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    // alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDB58E',
  },
  placholderStyle: {
    color: '#DDB58E',
    padding: 10,
    marginLeft: 5,
  },
  iconStyle: {
    color: '#DDB58E',
    padding: 10,
    marginRight: 5,
  },
  openDropdownStyle: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDB58E',
    backgroundColor: 'white',
    borderColor: '#DDB58E',
    // width: '45%',
    // alignSelf: 'center',
  },
})
