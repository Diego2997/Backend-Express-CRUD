const fibb = (limit = 20) =>{
    let fib = [0,1]
    for (let i = 2; i < limit; i++) {
        fib[i] = fib[i-1] + fib[i - 2 ]
    }
    return fib
}

 

 
 
const fibonnacci = (req,res,next) =>{
    const resultado = Number(req.query.num)
   
    if(!resultado || resultado !== Number){
        const resultadoFib = fibb()
        return res.status(400).send(`El parametro enviado no es un numero ${resultadoFib}`)
        
    }

    const paramsGood = fibb(resultado)
    res.status(200).send(paramsGood)
    next()
}
module.exports = fibonnacci