export const manejarError = (err, req, res, next) => {
  if (err) {
    res.status(400).json({ message: 'err.messge' })
  } else {
    next()
  }
}
