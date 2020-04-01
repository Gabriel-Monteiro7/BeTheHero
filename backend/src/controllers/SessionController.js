const connection = require('../database/connection')
const nodemailer = require('nodemailer')

module.exports = {
  async create(req, res) {
    const { id } = req.body;
    try {
      const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

      if (!ong) {
        return res.status(404).json({ error: 'Não existe ongs com esse ID' })
      }

      return res.status(201).json(ong)
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao fazer longin' })
    }
  },

  async forgotPassword(req, res) {
    const { email } = req.body

    try {
      const ong = await await connection('ongs').where('email', email).select('id', 'name').first()

      if (!ong)
        return res.status(400).json({ error: 'Ong não encontrada' })

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'testemails913@gmail.com',
          pass: 'Testemails.2'
        }
      })

      const mailOptions = {
        from: 'testemails913@gmail.com',
        to: email,
        subject: 'BeHeros - ForgetPassword',
        text: `Olá ${ong.name}, parece que você se esqueceu o ID de sua ong....Está aki ele ${ong.id}`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.status(400).json({ error: error })
        } else
          console.log('Email sent: ' + info.response);
        return res.status(200).json({ resultado: 'Email enviando com sucesso' });
      })
    } catch (err) {
      return res.status(400).json({ erro: 'Erro ao enviar, por favor tente mais tarde' });
    }

  },
}