import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

const GameContext = React.createContext()

export const useGameCheckFunction = () => {
  return useContext(GameContext)
}

export const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false)

  // useEffect(() => {}, [])

  return (
    <GameContext.Provider
      value={{
        gameStarted: gameStarted,
        setGameStarted: setGameStarted,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
