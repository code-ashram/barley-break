import { StyleSheet } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { scoresMock } from '@/app/screens/Scores/score'
import ScoresItem from '@/app/screens/Scores/parts/ScoreItem'

const TabTwoScreen = () =>
  <ThemedView style={styles.container}>
    <ThemedText type="title">Scores</ThemedText>

    <ThemedView style={styles.scoresBoard}>
      {scoresMock.map((score) => <ScoresItem key={score.id} score={score} />)}
    </ThemedView>
  </ ThemedView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 15,
    flexGrow: 1
  },
  scoresBoard: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
})

export default TabTwoScreen
