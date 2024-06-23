import {Tile} from "@/models";

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
