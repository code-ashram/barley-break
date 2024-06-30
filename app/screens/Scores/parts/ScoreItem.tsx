import { StyleSheet } from 'react-native'
import { FC } from 'react'

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { convertTime } from '@/app/screens/Scores/utils'

import { Score } from '@/app/screens/Scores/score'

type Props = {
  score: Score
}

const ScoresItem: FC<Props> = ({score}) => <ThemedView style={styles.score}>
  <ThemedText style={styles.scoreDate}>{convertTime(score.date)}</ThemedText>

  <ThemedText style={styles.scorePoints}>Steps: {score.steps}</ThemedText>
</ThemedView>

const styles = StyleSheet.create({
  score: {
    alignSelf: 'flex-start',
    marginTop: 8,
    padding: 10,
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5
  },
  scoreDate: {
    fontSize: 20
  },
  scorePoints: {
    fontSize: 20
  }
})

export default ScoresItem
