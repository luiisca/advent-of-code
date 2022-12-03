import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\n/)

  let totalCaloriesByElf: number[] = [0]
  let highestCalories: number = 0
  let elfPosition: number = 0
  input.reduce((prev, crr, i) => {
    // sum up values
    if (crr !== "") {
      return `${Number(prev) + Number(crr)}`
    }

    totalCaloriesByElf.push(Number(prev))

    highestCalories =
      totalCaloriesByElf[elfPosition] > highestCalories
        ? totalCaloriesByElf[elfPosition]
        : highestCalories

    elfPosition++

    return "0"
  }, "0")

  return highestCalories
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\n/)

  let totalCaloriesByElf: number[] = [0]
  let highestCalories: number[] = [0, 0, 0]
  let elfPosition: number = 0

  input.reduce((prev, crr) => {
    if (crr !== "") {
      return `${Number(prev) + Number(crr)}`
    }

    totalCaloriesByElf.push(Number(prev))

    const totalCaloriesCrrElf = totalCaloriesByElf[elfPosition]
    if (totalCaloriesCrrElf > highestCalories[0]) {
      highestCalories.unshift(totalCaloriesCrrElf)
    } else if (totalCaloriesCrrElf > highestCalories[1]) {
      highestCalories[1] = totalCaloriesCrrElf
    } else if (totalCaloriesCrrElf > highestCalories[2]) {
      highestCalories[2] = totalCaloriesCrrElf
    }

    elfPosition++

    return "0"
  }, "0")

  return highestCalories.slice(0, 3).reduce((prev, crr) => prev + crr, 0)
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
