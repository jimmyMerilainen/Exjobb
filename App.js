import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Navigation from './navigation/Navigation'
import { GameProvider } from './context/GameContext'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GameProvider>
          <Navigation />
        </GameProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
