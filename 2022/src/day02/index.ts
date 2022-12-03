import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const elfMoves = {
  A: "rock",
  B: "paper",
  C: "scissors",
}
const movePoints = {
  rock: 1,
  paper: 2,
  scissors: 3,
}
const gameResultsPoints = {
  lost: 0,
  draw: 3,
  win: 6,
}
const part1 = (rawInput: string) => {
  const meMoves = {
    X: "rock",
    B: "paper",
    C: "scissors",
  }

  const input = parseInput(rawInput)
  const games = input.split(/\n/)
  console.log(games)
  let totalPoints: number = 0
  for (let game of games) {
    const elfMove = elfMoves[game[0] as keyof typeof elfMoves]
    const meMove = meMoves[game[2] as keyof typeof meMoves]

    const lost =
      (elfMove === "rock" && meMove === "scissors") ||
      (elfMove === "paper" && meMove === "rock") ||
      (elfMove === "scissors" && meMove === "paper")
    const draw = elfMove === meMove
    const win =
      (meMove === "rock" && elfMove === "scissors") ||
      (meMove === "paper" && elfMove === "rock") ||
      (meMove === "scissors" && elfMove === "paper")

    if (lost) {
      totalPoints += gameResultsPoints["lost"] + movePoints[meMove]

      continue
    }
    if (draw) {
      totalPoints +=
        gameResultsPoints["draw"] +
        movePoints[meMove as keyof typeof movePoints]

      continue
    }

    if (win) {
      totalPoints += gameResultsPoints["win"] + movePoints[meMove]

      continue
    }
  }

  return totalPoints
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const games = input.split(/\n/)
  const gameResultsDict = {
    X: "lost",
    Y: "draw",
    Z: "win",
  }

  let totalPoints: number = 0

  for (let round of games) {
    const elfMove = elfMoves[round[0] as keyof typeof elfMoves]
    const roundResult =
      gameResultsDict[round[2] as keyof typeof gameResultsDict]
    const resultPoints =
      gameResultsPoints[roundResult as keyof typeof gameResultsPoints]

    if (elfMove === "rock") {
      const responseMove =
        roundResult === "lost"
          ? "scissors"
          : roundResult === "draw"
          ? "rock"
          : "paper"
      totalPoints += resultPoints + movePoints[responseMove]

      continue
    }
    if (elfMove === "paper") {
      const responseMove =
        roundResult === "lost"
          ? "rock"
          : roundResult === "draw"
          ? "paper"
          : "scissors"
      totalPoints += resultPoints + movePoints[responseMove]

      continue
    }
    if (elfMove === "scissors") {
      const responseMove =
        roundResult === "lost"
          ? "paper"
          : roundResult === "draw"
          ? "scissors"
          : "rock"
      totalPoints += resultPoints + movePoints[responseMove]

      continue
    }
  }

  return totalPoints
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
