import { VillageState, routeRobot, goalOrientedRobot, runRobot } from './index.mjs'

export default function compareRobots (robot1, memory1, robot2, memory2) {
  const results = { robot1: [], robot2: [] }

  const avg = (array) => array.reduce((acc, element) => acc + element, 0) / array.length

  for (let i = 0; i < 100; i++) {
    const task = VillageState.random()

    const robot1Turns = runRobot(task, robot1, memory1)
    const robot2Turns = runRobot(task, robot2, memory2)

    results.robot1.push(robot1Turns)
    results.robot2.push(robot2Turns)
  }

  console.log('robot1 average moves per task:', avg(results.robot1))
  console.log('robot2 average moves per task:', avg(results.robot2))
}
