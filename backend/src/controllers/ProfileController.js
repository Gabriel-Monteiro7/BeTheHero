const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    try {

      const ongs = await connection('ongs').where('id', ong_id).select('id').first()

      if (!ongs) {
        return res.status(404).json({ erro: "Nenhuma ong encontrada" })
      }

      const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

      if (incidents.length == 0) {
        return res.status(200).json({ erro: "Nenhum incident cadastrado a esse ID" })
      }

      return res.status(200).json(incidents)
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar incidents desta organização" })
    }

  }
}