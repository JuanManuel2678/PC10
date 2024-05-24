import { pool } from '../config/db.js'

export const all = async () => {
  const [usuarios] = await pool.query('SELECT * FROM usuarios')
  return usuarios
}

const remove = async (id) => {
  const [resultado] = await pool.execute('DELETE FROM usuarios WHERE id_usuario = ?', [id])

  return resultado.affectedRows === 1
}

const create = async ({ nombre, email, password, idRole, picture }) => {
  const [resultado] = await pool.execute('INSERT INTO usuarios(nombre, email, password, id_role, picture) VALUES(?,?,?,?,?)', [nombre, email, password, idRole, picture])

  return resultado.affectedRows === 1
}

const update = async ({ id, nombre, email, password, idRole, picture }) => {
  const [resultado] = await pool.execute('UPDATE usuarios SET nombre = ?, email = ?, password = ?, id_role = ?, picture = ? WHERE id_usuario = ?', [nombre, email, password, idRole, picture, id])

  return resultado.affectedRows === 1
}

export default { all, remove, create, update }
