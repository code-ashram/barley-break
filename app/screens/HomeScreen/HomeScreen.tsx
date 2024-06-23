import {useMemo, useState} from "react";
import {Tile} from "@/models";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Button} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import TileBar from "@/components/Tile";
import {StyleSheet} from "react-native";
import {canMove, checkBoard, generateNewBoard, replaceTiles} from "@/app/screens/HomeScreen/utils";

const HomeScreen = () => {
  const [board, setBoard] = useState<Tile[]>(generateNewBoard())

  const handleResetBoard = () => {
    setBoard(generateNewBoard())
  }

  const handleSwapTiles = (target: Tile): void => {
    const source = board.find((tile) => tile.id === 0)

    if (canMove(source, target)) setBoard(replaceTiles(board, source, target))
  }

  const isComplete = useMemo(() => checkBoard(board), [board])

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Barley Break</ThemedText>

      <ThemedView style={styles.steps}>
        <ThemedText type="title">Your steps: 0</ThemedText>

        <Button mode="contained" buttonColor="#336edc" onPress={handleResetBoard}>
          <Ionicons name="reload" size={22} color="white"/>
        </Button>
      </ThemedView>

      <ThemedView style={styles.board}>
        {board.map((tile) =>
          <TileBar key={tile.id} tile={tile} onTap={handleSwapTiles}/>
        )}
      </ThemedView>

      {isComplete && <ThemedText>You are winner!</ThemedText>}
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
