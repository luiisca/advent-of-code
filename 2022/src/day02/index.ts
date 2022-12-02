import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const elfPoints = {
  A: 1,
  B: 2,
  C: 3,
}
const mePoints = {
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
}
const gameResultsPoints = {
  lost: 0,
  draw: 3,
  win: 6,
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const games = input.split(/\n/)
  console.log(games)
  let totalPoints: number = 0
  for (let game of games) {
    const elfMove = elfPoints[game[0] as keyof typeof elfPoints]
    const meMove = mePoints[game[2] as keyof typeof mePoints]

    const lost =
      (elfMove === 1 && meMove === 3) ||
      (elfMove === 2 && meMove === 1) ||
      (elfMove === 3 && meMove === 2)
    const draw = elfMove === meMove
    const win =
      (meMove === 1 && elfMove === 3) ||
      (meMove === 2 && elfMove === 1) ||
      (meMove === 3 && elfMove === 2)

    if (lost) {
      totalPoints += gameResultsPoints["lost"] + meMove

      continue
    }
    if (draw) {
      totalPoints += gameResultsPoints["draw"] + meMove

      continue
    }

    if (win) {
      totalPoints += gameResultsPoints["win"] + meMove

      continue
    }
  }

  return totalPoints
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
