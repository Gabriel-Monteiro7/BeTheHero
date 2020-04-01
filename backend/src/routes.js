const express = require("express")

const OngController = require('./controllers/OngController')
const IncidentCotroller = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const OngValidation = require('./validations/OngValidation')
const IncidentValidation = require('./validations/IncidentValidation')
const ProfileValidation = require('./validations/ProfileValidation')
const SessionValidation = require('./validations/SessionValidation')

const routes = express.Router()

routes.post('/ongs', OngValidation.post(), OngController.create)
routes.get('/ongs', OngController.index)
routes.put('/ongs', OngValidation.put(), OngController.update)
routes.delete('/ongs', OngValidation.delete(), OngController.delete)

routes.post('/incidents', IncidentValidation.post(), IncidentCotroller.create)
routes.get('/incidents', IncidentValidation.get(), IncidentCotroller.index)
routes.put('/incidents/:id', IncidentValidation.put(), IncidentCotroller.update)
routes.delete('/incidents/:id', IncidentValidation.delete(), IncidentCotroller.delete)

routes.post('/session', SessionValidation.post(), SessionController.create)
routes.get('/forgetpassword', SessionValidation.get(), SessionController.forgotPassword)

routes.get('/profile', ProfileValidation.get(), ProfileController.index)

module.exports = routes;