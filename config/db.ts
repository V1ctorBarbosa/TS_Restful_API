import config from "config"
import mongoose from 'mongoose'

async function connect() {

    const dbUri = config.get<string>('dbUri')
    console.log("Conectado!")

    try {
        await mongoose.connect(dbUri)
    } catch (e) {
        console.log("Não foi possível conectar")
        console.log(`Erro: ${e}`)
    }
}

export default connect