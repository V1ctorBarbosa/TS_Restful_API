import config from "config"
import mongoose from 'mongoose'

//Logger
import Logger from "./logger"

async function connect() {

    const dbUri = config.get<string>('dbUri')
    Logger.info("Conectado!")

    try {
        await mongoose.connect(dbUri)
    } catch (e) {
        Logger.error("Não foi possível conectar")
        Logger.error(`Erro: ${e}`)
        process.exit(1)
    }
}

export default connect