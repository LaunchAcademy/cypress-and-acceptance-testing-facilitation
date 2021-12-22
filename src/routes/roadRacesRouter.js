import express from "express"

import RoadRace from "../models/RoadRace.js"

const roadRacesRouter = new express.Router()

roadRacesRouter.get("/", (req, res) => {
  const roadRaces = RoadRace.findAll()
  res.render("roadRaces/index", { roadRaces })
})

roadRacesRouter.get("/new", (req, res) => {
  res.render("roadRaces/new")
})

roadRacesRouter.post("/", (req, res) => {
  const roadRace = new RoadRace(req.body)
  roadRace.save()
  res.redirect("/road-races")
})

roadRacesRouter.get("/:id", (req, res) => {
  const raceId = req.params.id
  const roadRaceObject = RoadRace.findById(raceId)

  res.render("roadRaces/show", { race: roadRaceObject })
})

export default roadRacesRouter