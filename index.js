// Configura uma rota para o metodo HTTP GET na raiz ("/") do aplicativo.
import express from 'express'

//server ou app
const app = express()

app.get("/api/v1/somar", (req, res) => {
    // Retorna uma resposta JSON contendo uma mensagem "Hello World"
    const num1 = Number(req.query.batata)
    const num2 = Number(req.query.num2)
    const resultado = num1 + num2
    res.send({ resultado })
})
//Inicia o servidor Express na porta 3000 e define uma função de retorno de chamada
app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("Servidor ouvindo na porta 3000");
})