let datos = require("../mock");

const getUsers = (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(200).json(datos);
  } else {
    const oneUser = datos.find((el) => el.id === Number(id));
    if (!oneUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(oneUser);
  }
};

const createUser = (req, res) => {
  const { nombre, apellido, dni } = req.body;
  if (!nombre || !apellido || !dni) {
    return res.status(400).json({
      message: "parameters were not sent",
    });
  }
  const ids = datos.map((dato) => dato.id);
  const maxId = Math.max(...ids);
  const newUser = {
    id: maxId + 1,
    nombre: data.nombre,
    apellido: data.apellido,
    dni: data.dni,
  };
  datos.push(newUser);
  res.status(201).send(newUser);
};

const updateUser = (req, res) => {
  const update = req.body;
  const oneUser = datos.find((el) => el.id === Number(req.params.id));
  if (!oneUser) {
    return res.status(404).json({ message: "User not found" });
  }
  datos = datos.map((user) =>
    user.id === Number(req.params.id) ? { ...user, ...update } : user
  );
  res.json(datos);
};

const deleteUser = (req, res) => {
  const oneUser = datos.find((el) => el.id === Number(req.params.id));
  if (!oneUser) {
    return res.status(404).json({ message: "User not found" });
  }
  datos = datos.filter((user) => user.id !== Number(req.params.id));
  res.status(204);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
