//config do servidor

import express from "express"

export const app = express()

export const port = process.env.PORT || 7777



/* Rotas */

import index from "../routes/index.mjs"
import sobre from "../routes/sobre.mjs"

const routes  = [
    index(app),
    sobre(app)
]