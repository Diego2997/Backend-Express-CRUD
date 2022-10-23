let datos = require('../datos')


const getUser = (req,res) =>{

    const queryUser = datos.find(el => el.nombre === req.query.nombre)
    if(!queryUser){
       return res.status(404).json({message:"User not found"})
    }
    if(queryUser){
        return res.status(200).json(queryUser)
    }

    res.status(200).json(datos)

}


const getOneUser = (req,res) =>{
    
   
    const oneUser = datos.find(el => el.id === Number(req.params.id))
    if(!oneUser){
        return res.status(404).json({message:"User not found"})
    }
   
    
    res.json(oneUser)
}

const createUser = (req,res) =>{
    const data = req.body
    if(!data || !data.nombre || !data.apellido || !data.dni){
        return res.status(400).json({
            message:"parameters were not sent"
        })
}
const ids = datos.map(dato => dato.id)
const maxId = Math.max(...ids)

const newUser = {
    id: maxId + 1,
    nombre: data.nombre,
    apellido: data.apellido,
    dni : data.dni
    }

    datos.push(newUser)
    res.status(201).send(newUser)
   
}
const updateUser = (req,res) =>{
    const update = req.body
    const oneUser = datos.find(el => el.id === Number(req.params.id))

    if(!oneUser){
        return res.status(404).json({message:"User not found"})
    }

    datos = datos.map(user => user.id === Number(req.params.id) ? {...user, ...update} : user)
    console.log(datos)
    res.json(datos)
}
const deleteUser = (req,res) =>{
    const oneUser = datos.find(el => el.id === Number(req.params.id))

    if(!oneUser){
        return res.status(404).json({message:"User not found"})
    }

    datos = datos.filter(user => user.id !== Number(req.params.id))

    res.sendStatus(204)
}

module.exports = {
    getUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}