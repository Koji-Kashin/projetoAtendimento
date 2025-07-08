const atendimentoModel = require("../models/atendimentoModel");
class AtendimentoController {
  buscar(req, res) {
    const listaAtendimentos = atendimentoModel.listar();
    return listaAtendimentos
      .then((atendimentos) => res.status(200).json(atendimentos))
      .catch((error) => res.status(400).json(error.message));
  }
  criar(req, res) {
    const novoAtendimento = req.query;
    console.log("REQ QUERY:", novoAtendimento);
    const atendimento = atendimentoModel.criar(novoAtendimento);
    return atendimento
      .then((atendimentoCriado) => res.status(201).json(atendimentoCriado))
      .catch((error) => res.status(400).json(error.message))
  }
  atualizar(req, res) {
    const { id } = req.params;
    const atendimentoAtualizado = req.query
    const atendimento = atendimentoModel.atualizar(atendimentoAtualizado, id);
    return atendimento
      .then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado)
      )
      .catch((error) => res.status(400).json(error.message))

  }
  deletar(req, res) {
    const { id } = req.params;
    console.log(id);
    const atendimento = atendimentoModel.delete(id);
    return atendimento
      .then((resultAtendimentoDeletado) => res.status(200).json(resultAtendimentoDeletado))
      .catch((error) => res.status(400).json(error.message))
  }
}

module.exports = new AtendimentoController();