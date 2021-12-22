import express from "express"
import roadRacesRouter from "./roadRacesRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.redirect("/road-races")
})

rootRouter.use("/road-races", roadRacesRouter)

export default rootRouter