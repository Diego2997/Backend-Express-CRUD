const fibb = (num) => {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const fibonnacci = (req, res, next) => {
  const resultado = Number(req.query.num);

  if (!resultado) {
    const resultadoFib = fibb(20);
    return res.status(400).send(resultadoFib);
  }
  const paramsGood = fibb(resultado);
  res.status(200).json(paramsGood);
  next();
};

module.exports = {
  fibonnacci,
};
