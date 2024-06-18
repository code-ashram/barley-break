import { TileType } from '@/models/models'

export const generateNewBoard = (): TileType[] => {
  const board: TileType[] = []

  while (board.length < 16){
    const id = Math.floor(Math.random() * 16)

    if (board.some((tile) => tile.id === id)) continue

    board.push({ id, position: { x: 0, y: 0 } })
  }

  return board
}
