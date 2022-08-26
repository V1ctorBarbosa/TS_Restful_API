import {Router, Request, Response} from "express"
import { createGame } from "./controllers/gameControllers"

const router = Router()

export default router.get('/test', (req: Request, res: Response) => {
    res.status(200).send("Api funcionando")
})
.post("/game", createGame)