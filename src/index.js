import express from 'express'
import { PORT } from './config/config.js'
import usuariosRouter from './routes/usuarios.routes.js'
import rolesRoutes from './routes/roles.routes.js'

const app = express()

app.use(express.json())

app.use('/api/usuarios', usuariosRouter)
app.use('/api/roles', rolesRoutes)

app.listen(PORT, () => console.log(`Aplication en http://localhost:${PORT}`))
