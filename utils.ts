import { Tile, Position } from '@/models/models'

// export const generateNewBoard = (): TileType[] => {
//   const board: TileType[] = []
//
//   while (board.length < 16){
//     const id = Math.floor(Math.random() * 16)
//
//     if (board.some((tile) => tile.id === id)) continue
//
//     board.push({ id, position: { x: 0, y: 0 } })
//   }
//
//   return board
// }

export const generateNewBoard = (): Tile[] => {
  const board: Tile[] = []

  while (board.length < 16){
    const id = Math.floor(Math.random() * 16)

    if (board.some((tile) => tile.id === id)) continue

    const index = board.length
    const position: Position = {
      x: Math.floor(index / 4),
      y: index % 4
    }

    board.push({ id, position })
  }

  return board
}
