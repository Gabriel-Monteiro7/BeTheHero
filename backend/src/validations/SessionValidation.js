const { celebrate, Segments, Joi } = require("celebrate")

module.exports = {
  post() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
      })
    })
  },
  get() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required()
      })
    })
  }
}