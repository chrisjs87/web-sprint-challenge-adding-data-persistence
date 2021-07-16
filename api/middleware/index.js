const checkProjectBody = (req, res, next) => {
  const { project_name } = req.body
  if (project_name === undefined) {
    next({ status:400, message: 'invalid project_name' })
  } else {
    next()
  }
}



module.exports = {
  checkProjectBody
}