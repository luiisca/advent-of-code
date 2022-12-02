import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\n/)

  let caloriesArr: number[] = [0]
  let highestCalories: number = 0
  let elfPosition: number = 0
  input.reduce((prev, crr, i) => {
    // sum up values
    if (crr !== "") {
      return `${Number(prev) + Number(crr)}`
    }

    caloriesArr.push(Number(prev))

    highestCalories =
      caloriesArr[elfPosition] > highestCalories
        ? caloriesArr[elfPosition]
        : highestCalories

    elfPosition++

    return "0"
  }, "0")

  return highestCalories
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\n/)

  let caloriesArr: number[] = [0]
  let highestCalories: number[] = [0]
  let elfPosition: number = 0
  input.reduce((prev, crr, i) => {
    // sum up values
    if (crr !== "") {
      return `${Number(prev) + Number(crr)}`
    }

    caloriesArr.push(Number(prev))

    // highestCalories.unshift(
    //   caloriesArr[elfPosition] > highestCalories[0]
    //     ? caloriesArr[elfPosition]
    //     : caloriesArr[elfPosition] > highestCalories[1]
    //     ?
    //       highestCalories[0],
    // )
    highestCalories[0] =
      caloriesArr[elfPosition] > highestCalories[0]
        ? caloriesArr[elfPosition]
        : highestCalories[0]
    highestCalories[1] =
      caloriesArr[elfPosition] > highestCalories[1]
        ? caloriesArr[elfPosition]
        : highestCalories[0]
    highestCalories[2] =
      caloriesArr[elfPosition] > highestCalories[2]
        ? caloriesArr[elfPosition]
        : highestCalories[0]

    elfPosition++

    return "0"
  }, "0")

  console.log(highestCalories)
  return highestCalories.slice(0, 3).reduce((prev, crr) => prev + crr)
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
