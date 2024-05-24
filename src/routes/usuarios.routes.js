import { Router } from 'express'
import { index, remove, subir, store, update } from '../controller/usuarios.controller.js'
import { upload } from '../multer.js'
import { manejarError } from '../helper.js'

const router = Router()

router.get('/', index)
router.delete('/:id', remove)
router.post('/', store)
router.put('/:id', update)

router.post('/img',
  upload.single('imagen'),
  subir,
  manejarError)
export default router
// upload.single('imagen')
