import compareRobots from './compareRobots.mjs'
import { roadGraph, findRoute, goalOrientedRobot } from './index.mjs'

// import {VillageState, runRobot } from './index.mjs'

function myRobot ({ place, parcels }, memory) {
  if (memory.length == 0) {
    const routes = parcels.map(parcel => {
      const destination = parcel.place != place ? parcel.place : parcel.address
      return findRoute(roadGraph, place, destination)
    })
    memory = routes.reduce((a, b) => a.length < b.length ? a : b)
  }

  return { direction: memory[0], memory: memory.slice(1) }
}

// runRobot(VillageState.random(), myRobot, [])

compareRobots(myRobot, [], goalOrientedRobot, [])
