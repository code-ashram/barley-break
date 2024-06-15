import {Image, StyleSheet, Platform} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Colors} from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Barley Break</ThemedText>

      <ThemedView style={styles.board}>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            1
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            2
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            3
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            4
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            5
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            6
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            7
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            8
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            9
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            10
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            11
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            13
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            13
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            14
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.tile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>
            15
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.emptyTile}>
          <ThemedText style={styles.tileNumber} type='subtitle'>

          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.steps}>
        <ThemedText type="title">Your steps: 12</ThemedText>
      </ThemedView>

    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
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
    marginTop: 30
  }
});
