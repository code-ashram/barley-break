import {Tile, Position, Score} from '@/models'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const generateNewBoard = (): Tile[] => {
  const board: Tile[] = []

  while (board.length < 16) {
    const id = Math.floor(Math.random() * 16)

    if (board.some((tile) => tile.id === id)) continue

    const index = board.length
    const position: Position = {
      x: Math.floor(index / 4),
      y: index % 4
    }

    board.push({id, position})
  }

  return board
}

export const canMove = (source: Tile | undefined, target: Tile): boolean =>
  !!source && (
    (target.position.x === source.position.x && Math.abs(target.position.y - source.position.y) === 1) ||
    (target.position.y === source.position.y && Math.abs(target.position.x - source.position.x) === 1)
  )

export const replaceTiles = (board: Tile[], source: Tile | undefined, target: Tile): Tile[] => {
  if (!source) return board

  const sourceIdx = board.indexOf(source)
  const targetIdx = board.indexOf(target)

  let tempBoard: Tile[] = [...board]

  tempBoard.splice(targetIdx, 1, {...source, position: target.position})
  tempBoard.splice(sourceIdx, 1, {...target, position: source.position})

  return tempBoard
}

export const checkBoard = (board: Tile[]): boolean =>
  (board.map((tile) => tile.id).toString() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0")

export const testBoard: Tile[] = [
  {
    id: 1,
    position: {
      x: 0,
      y: 0,
    }
  },
  {
    id: 2,
    position: {
      x: 0,
      y: 1,
    }
  },
  {
    id: 3,
    position: {
      x: 0,
      y: 2,
    }
  },
  {
    id: 4,
    position: {
      x: 0,
      y: 3,
    }
  },
  {
    id: 5,
    position: {
      x: 1,
      y: 0,
    }
  },
  {
    id: 6,
    position: {
      x: 1,
      y: 1,
    }
  },
  {
    id: 7,
    position: {
      x: 1,
      y: 2,
    }
  },
  {
    id: 8,
    position: {
      x: 1,
      y: 3,
    }
  },
  {
    id: 9,
    position: {
      x: 2,
      y: 0,
    }
  },
  {
    id: 10,
    position: {
      x: 2,
      y: 1,
    }
  },
  {
    id: 11,
    position: {
      x: 2,
      y: 2,
    }
  },
  {
    id: 12,
    position: {
      x: 2,
      y: 3,
    }
  },
  {
    id: 13,
    position: {
      x: 3,
      y: 0,
    }
  },
  {
    id: 14,
    position: {
      x: 3,
      y: 1,
    }
  },
  {
    id: 0,
    position: {
      x: 3,
      y: 3,
  }
    },
  {
    id: 15,
    position: {
      x: 3,
      y: 2,
    }
  },
]
