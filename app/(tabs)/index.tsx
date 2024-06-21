import { StyleSheet, Pressable } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Ionicons } from '@expo/vector-icons'
import { generateNewBoard } from '@/utils'
import { useState } from 'react'
import { Tile } from '@/models/models'
import { Button } from 'react-native-paper'
import TileBar from '@/components/Tile'

const HomeScreen = () => {
  const [board, setBoard] = useState<Tile[]>(generateNewBoard())

  const handleResetBoard = () => {
    setBoard(generateNewBoard())
  }

  const handleSwapTiles = (target: Tile): void => {
    const source = board.find((tile) => tile.id === 0)

    if (target.position.x === source?.position.x || target.position.y === source?.position.y) {
      const sourceIdx = board.indexOf(source)
      const targetIdx = board.indexOf(target)

      let tempBoard: Tile[] = [...board]
      //   [tempBoard[sourceIdx], tempBoard[targetIdx]] = [{ ...target, position: source.position }, { ...source, position: target.position }]
      tempBoard.splice(targetIdx, 1, { ...source, position: target.position })
      tempBoard.splice(sourceIdx, 1, { ...target, position: source.position })
      setBoard(tempBoard)
    }
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Barley Break</ThemedText>

      <ThemedView style={styles.steps}>
        <ThemedText type="title">Your steps: 0</ThemedText>

        <Button mode="contained" buttonColor="#336edc" onPress={handleResetBoard}>
          <Ionicons name="reload" size={22} color="white" />
        </Button>
      </ThemedView>

      <ThemedView style={styles.board}>
        {board.map((tile) =>
          <TileBar key={tile.id} tile={tile} onTap={handleSwapTiles} />
        )}
      </ThemedView>

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
  }
})

export default HomeScreen
