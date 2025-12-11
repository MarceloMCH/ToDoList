const Task = require("../models/Task");
let message = "";
let type = "";

const getALlTasks = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
    }, 2000);
    const taskList = await Task.find();
    return res.render("index", {
      taskList,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const createTask = async (req, res) => {
  const task = req.body;
  if (!task.task) {
    message = "insira um texto antes de adicionar a tarefa!";
    type = "Danger";
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    message = "Tarefa criada com sucesso";
    type = "success";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const getById = async (req, res) => {
  try {
    const taskList = await Task.find();
    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskDelete: null, taskListm, message, type });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskDelete, taskList, message, type });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    message = "Tarefa atualizada com sucesso";
    type = "sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const deleteOneTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Task.deleteOne({ _id: req.params.id });
    message = "Tarefa apagada com sucesso";
    type = "sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getALlTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
};
