import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

const GameContext = React.createContext()

export const useGameCheckFunction = () => {
  return useContext(GameContext)
}

export const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false)
  const [wordToSearch, setWordToSearch] = useState('')
  const [noMatch, setNoMatch] = useState(false)
  const [courseArray, setCourseArray] = useState([])
  const [searchArray, setSearchArray] = useState([])
  const [cleanSearchBar, setCleanSearchBar] = useState(false)

  useEffect(() => {
    const tempArray = []
    setNoMatch(false)
    if (wordToSearch != '') {
      for (let index = 0; index < courseArray.length; index++) {
        if (
          courseArray[index].name
            .toLowerCase()
            .includes(wordToSearch.toLowerCase())
        ) {
          tempArray.push(courseArray[index])
        }
      }
      if (tempArray.length === 0) {
        setNoMatch(true)
        console.log('Inga resultat')
      }
      setSearchArray(tempArray)
    } else {
      setSearchArray([])
    }
  }, [wordToSearch])

  return (
    <GameContext.Provider
      value={{
        gameStarted: gameStarted,
        setGameStarted: setGameStarted,
        wordToSearch: wordToSearch,
        setWordToSearch: setWordToSearch,
        noMatch: noMatch,
        setNoMatch: setNoMatch,
        setCourseArray: setCourseArray,
        searchArray: searchArray,
        cleanSearchBar: cleanSearchBar,
        setCleanSearchBar: setCleanSearchBar,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
