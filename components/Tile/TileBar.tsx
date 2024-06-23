import { FC } from 'react'
import { Pressable, StyleSheet } from 'react-native'

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

import { Tile } from '@/models'

type Props = {
  tile: Tile
  onTap: (tile: Tile) => void
}

const TileBar: FC<Props> = ({onTap, tile}) => {

  return (
    <Pressable onPress={() => onTap(tile)}>
      <ThemedView style={tile.id ? styles.tile : styles.emptyTile}>
        <ThemedText style={styles.tileNumber} type='subtitle'>
          {tile.id ? tile.id : ''}
        </ThemedText>
      </ThemedView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
});

export default TileBar
