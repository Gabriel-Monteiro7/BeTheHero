const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    try {

      const ong = await connection('ongs')
        .where('id', ong_id)
        .select('name')
        .first();

      if (!ong) {
        return res.status(404).json({ error: 'Não existe ongs com esse ID' })
      }

      await connection('incidents').insert({
        title, description, value, ong_id
      })

      return res.status(201).json({ title, description, value, ong_id })

    } catch (err) {
      return res.status(400).json({ erro: "Erro ao cadastrar" })
    }

  },

  async index(req, res) {
    const { page = 1 } = req.query;
    try {

      const count = await connection('incidents').count('id', { as: 'number' }).first();
      console.log(count.number)

      const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])

      res.header('X-Total-Count', count.number);

      if (incidents.length == 0) {
        return res.status(200).json({ erro: "Nenhum incidente cadastrado" })
      }

      return res.status(200).json(incidents)
    } catch (err) {
      return res.status(400).json({ erro: "Erro ao listar" })
    }


  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    try {
      const incident = await connection('incidents')
        .where('id', id)
        .select('id', 'ong_id')
        .first();

      if (incident.ong_id != ong_id) {
        return res.status(401).json({ error: 'Operação não permitida' })
      }

      await connection('incidents').where('id', id).delete();
      return res.status(204).json()

    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar" })
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    let newIncident = req.body;

    try {
      if (newIncident = []) {
        return res.status(400).json({ error: 'Não possui dados pra atualizar' })
      }
      const incident = await connection('incidents')
        .where('id', id)
        .select('id', 'ong_id')
        .first();

      if (incident.ong_id != ong_id) {
        return res.status(401).json({ error: 'Operação não permitida' })
      }

      await connection('incidents').where('id', id).update(
        newIncident)

      return res.status(201).json({ newIncident })
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar" })
    }

  },
}