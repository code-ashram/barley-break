import {StyleSheet} from 'react-native'

import {useFocusEffect} from 'expo-router';
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import ScoresItem from '@/app/screens/Scores/parts/ScoreItem'
import {Score} from "@/models";
import {FC, useCallback, useEffect, useState} from "react";
import {getHistory} from "@/app/utils";

type Props = {
  navigation: unknown;
}

const TabTwoScreen: FC<Props> = ({navigation}) => {
  const [scores, setScores] = useState<Score[]>([])

  useFocusEffect(
    useCallback(() => {
      getHistory().then((response) => setScores(response || []))

      return () => {}
    }, [])
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Scores</ThemedText>

      <ThemedView style={styles.scoresBoard}>
        {scores.length
          ? scores.map((score, index) => <ScoresItem key={index} score={score}/>)
          : <ThemedText>No results</ThemedText>}
      </ThemedView>
    </ ThemedView>
  )
}

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
