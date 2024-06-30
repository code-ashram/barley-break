import { useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { Image } from 'expo-image'
import AsyncStorage from '@react-native-async-storage/async-storage'

import TileBar from '@/components/Tile'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

import { Tile } from '@/models'
import { canMove, checkBoard, generateNewBoard, replaceTiles, saveScore } from '@/app/screens/HomeScreen/utils'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {
  const [board, setBoard] = useState<Tile[]>(generateNewBoard())
  const [step, setStep] = useState<number>(0)

  const isComplete = useMemo(() => {
    const isDone = checkBoard(board)
    if (isDone) saveScore(`${step}`).then()
    return isDone
  }, [board])

  const handleResetBoard = () => {
    setBoard(generateNewBoard())
    setStep(0)
  }

  const handleSwapTiles = (target: Tile): void => {
    const source = board.find((tile) => tile.id === 0)

    if (canMove(source, target)) {
      setBoard(replaceTiles(board, source, target))
      setStep((prevStep) => prevStep + 1)
    }
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Barley Break</ThemedText>

      <ThemedView style={styles.steps}>
        <ThemedText type="title">Your steps: {step}</ThemedText>

        <Button mode="contained" buttonColor="#336edc" onPress={handleResetBoard}>
          <Ionicons name="reload" size={22} color="white" />
        </Button>
      </ThemedView>

      <ThemedView style={styles.board}>
        {board.map((tile) =>
          <TileBar key={tile.id} tile={tile} onTap={handleSwapTiles} />
        )}
      </ThemedView>

      {isComplete &&
        <ThemedView>
          <ThemedText style={styles.winnerTitle}>You are winner!</ThemedText>

          <Image
            style={styles.winnerImage}
            source={require('./assets/img/ann.png')}
            placeholder="winner image"
            contentFit="contain"
            transition={1000}
          />
        </ThemedView>
      }

    </ThemedView>
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
  board: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    width: 360,
    height: 360,
    borderWidth: 2,
    borderColor: 'wheat'
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%'
  },
  button: {
    marginLeft: 20,
    padding: 20,
    backgroundColor: '#336edc',
    borderRadius: 7
  },
  buttonText: {
    fontSize: 22
  },
  winnerTitle: {
    fontWeight: 'bold',
    paddingVertical: 12,
    marginTop: 25,
    fontSize: 30
  },
  winnerImage: {
    width: 200,
    height: 150
  }
})

export default HomeScreen
