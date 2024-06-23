import {checkBoard} from "../utils";
import {Tile} from "@/models";

const board = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 0},
]

test('board is complete', () => {
  expect(checkBoard(board as Tile[])).toBe(true);
});

test('board is not complete', () => {
  let tempBoard = [...board]

  tempBoard.splice(15, 1, )
  tempBoard.splice(0, 1, {id: 0})

  expect(checkBoard(tempBoard as Tile[])).toBe(false);
});
