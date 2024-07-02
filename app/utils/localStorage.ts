import {Score} from "@/models";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HISTORY_LENGTH = 5

export const getHistory = async (): Promise<Score[] | null | undefined> => {
  try {
    const value = await AsyncStorage.getItem('history')

    console.log(value)

    return value === null ? null : JSON.parse(value)
  } catch (e) {
    // error reading value
  }
}

export const saveScore = async (steps: number): Promise<void> => {
  const score: Score = {
    steps,
    date: new Date().toISOString(),
  }

  try {
    const history = await getHistory()

    const updatedHistory = [score, ...(history || [])]

    if (updatedHistory.length > HISTORY_LENGTH) updatedHistory.splice(HISTORY_LENGTH)

    await AsyncStorage.setItem('history', JSON.stringify(updatedHistory))
  } catch (e) {
    // saving error
  }
}

