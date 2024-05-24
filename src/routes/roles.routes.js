import { Router } from 'express'
import { index } from '../controller/roles.controller.js'

const router = Router()

router.get('/', index)

export default router
