import { StyleSheet, Pressable } from 'react-native'

import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { generateNewBoard } from '@/utils'
import { useState } from 'react'
import { TileType } from '@/models/models'
import { Button } from 'react-native-paper'

const HomeScreen = () => {
  const [board, setBoard] = useState<TileType[]>(generateNewBoard())

  const handleResetBoard = () => {
    setBoard(generateNewBoard())
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
          <ThemedView style={tile.id ? styles.tile : styles.emptyTile}>
            <ThemedText style={styles.tileNumber} type='subtitle'>
              {tile.id ? tile.id : ''}
            </ThemedText>
          </ThemedView>
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
    borderColor: 'wheat',
  },
  tile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    borderWidth: 1,
    borderColor: 'white',
  },
  emptyTile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a3c3e',
    width: 89,
    height: 89,
    borderWidth: 1,
    borderColor: 'white',
  },
  tileNumber: {
    fontSize: 40,
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
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
});

export default HomeScreen
