import multer from 'multer'

export let nuevoNombreArchivo = null

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/img')
  },
  filename: function (req, file, cb) {
    nuevoNombreArchivo = `${Date.now()}-${file.originalname}`
    cb(null, nuevoNombreArchivo)
  }
})

const filter = (req, file, cb) => {
  const mimeType = file.mimeType
  const mimePermitidos = ['image/png', 'image/jpeg']

  if (mimePermitidos.includes(mimeType)) {
    return cb(null, true)
  } else {
    cb(new Error('no se pudo cargar la imagen'))
  }
}

export const upload = multer({ storage, fileFilter: filter })
