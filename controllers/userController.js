let datos = require('../datos')


const getUser = (req,res) =>{
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
    
    const newUser = {id: datos.length + 1 , ...req.body}
    datos.push(newUser)
    res.send(newUser)
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