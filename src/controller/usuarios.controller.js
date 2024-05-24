import usuariosModel from '../models/usuarios.model.js'
import { nuevoNombreArchivo } from '../multer.js'

export const index = async (req, res) => {
  const usuarios = await usuariosModel.all()
  res.json(usuarios)
}

export const remove = async (req, res) => {
  const { id } = req.params

  const eliminado = await usuariosModel.remove(id)

  if (eliminado) {
    return res.json({ message: 'usuario eliminado' })
  } else {
    return res.status(500).json({ message: 'No se pudo eliminar el usuario' })
  }
}

export const store = async (req, res) => {
  try {
    const { nombre, email, password, idRole } = req.body

    if (!nombre || !email || !password || !idRole) return res.status(400).json({ message: 'Faltan datos en el formulario' })

    const picture = nuevoNombreArchivo
    if (picture === null) {
      return res.status(400).json({ message: 'no se cargo la imagen' })
    }

    const resultado = await usuariosModel.create({ nombre, email, password, idRole, picture })

    if (resultado) {
      return res.status(201).json({ message: 'usuario creado' })
    } else {
      return res.status(500).json({ message: 'no se pudo crear el usuario' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'error interno' })
  }
}

export const update = async (req, res) => {
  try {
    const { nombre, email, password, idRole } = req.body
    const { id } = req.params

    if (!id || !nombre || !email || !password || !idRole) return res.status(400).json({ message: 'Faltan datos en el formulario' })

    const picture = nuevoNombreArchivo
    if (picture === null) {
      return res.status(400).json({ messge: 'se cargo la imagen ' })
    }

    const resultado = await usuariosModel.update({ id, nombre, email, password, idRole, picture })

    if (resultado) {
      return res.status(201).json({ message: 'Usuario Actualizado' })
    } else {
      return res.status(500).json({ message: 'no se pudo actualizar el usuario' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'error interno' })
  }
}

export const subir = async (req, res) => {
  try {
    const { user } = req.body

    if (nuevoNombreArchivo === null) {
      return res.status(500).json({ message: 'no se puede subbir la imagen ' })
    }

    // const [resultado] = await pool.execute('INSERT INTO usuarios(usuario_id, picture) VALUE (?,?)', [nuevoNombreArchivo, user])

    // if (resultado.affectedRows === 1) {

    // }
  } catch {}
}
