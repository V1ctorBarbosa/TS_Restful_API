import {model, Schema} from 'mongoose'

const gameSchema = new Schema (
    {
        title: {type: String},
        poster: {type: String},
        console: {type: String},
        year: {type: Number},
        theme: {type: String},
    },
    {
        timestamps: true
    }
)

export const GameModel = model("Game", gameSchema)