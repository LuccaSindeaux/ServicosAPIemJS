function realizalog(req, res, next){
    let requestTime = Date.now();
    console.log("Rota acessada: " + req.method + " " + req.path);
    next();
    console.log(res.statusCode);
    let tempoExec = Date.now() - requestTime;
    console.log("Tempo de execução: ", tempoExec);
}

module.exports = {
    realizalog
}