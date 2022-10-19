const fibonnacci = (req,res,next) =>{
    console.log(typeof req.query.fibo)
    if(req.query.fibo === "" || req.query === null || req.query !== Number){
        req.query.fibo = 20
       return res.send('no mandaste parametros')
    }
    let fib = [0,1]
    for (let i = 2; i < Number(req.query.fibo); i++) {
        fib[i] = fib[i-1] + fib[i - 2 ]
    }
    res.send(fib)
    next()
}
module.exports = fibonnacci