import express from "express"

const router = express.Router()

//somar 
router.post("/api/v1/somar", (req, res) => {
    //const num1 = req.query.num1
    //const num2 = req.query.num2
    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({ message: resultado })
    //res.send({ message: resultado})
})


//subtrair
router.post("/api/v1/subtrair", (req, res) => {
    const {num1, num2 } = req.body
    const resultado = Number(num1) - Number(num2)

    res.status(200).send({ message: resultado })
})


//mult
router.get("/api/v1/multiplicar", (req, res) => {
    const {num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2)

    res.status(200).send({ message: resultado })
})
//div
router.get("/api/v1/divisao", (req, res) => {
    const {num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2)

    res.status(200).send({ message: resultado })
})

 

router.post("/1", (req, res) => {
    const {num1, num2} = req.body
const resultado = Number(num1) + Number(num2)
 
res.status(200).send({message: resultado})
})
 
router.post("/3", (req, res) =>{
const {p1, p2, p3, p4, p5, peso} = req.body
const resultado = Number(p1 + p2 + p3 + p4 + p5) / Number(peso)
 
res.status(200).send({message: resultado})
})
 
router.post("/2", (req, res) => {
    const {hora, salario} = req.body
    const resultado = Number(hora) * Number(salario)
 
    res.send({message: resultado})
})
router.post("/4", (req, res) => {
    const {celsius} = req.body
    const fahrenheit = Number((9 * (celsius) + 160) / 5)
 
    res.send({message: fahrenheit})
 
})
// não entendi
    router.get("/5", (req, res) =>{
const {milhas} = req.query
const quilometro = milhas * Number(1.60934)
 
res.status(200).send({message: quilometro})
})
 
// router.get("/6", (req, res) => {
//    const {evento} = req.query
//    const segundo, minutos, horas =

 
// res.status(200).send({})    
// })
 
router.get("/7", (req, res) => {
    const { quilometros } = req.query;
    const km = Number(quilometros);

    const metros = km * 1000;
    const centimetros = km * 100000;

    res.status(200).send({
        message : `Distancia: ${metros} metros e ${centimetros} centimetros.`
    });
});

router.post("/8", (req, res) => {
    const { numero } = req.body;
    
    // Converte a entrada para número inteiro
    const num = parseInt(numero);
    
    // Cria um array para armazenar a tabuada
    const tabuada = [];
    
    // Calcula do 0 ao 10
    for (let i = 0; i <= 10; i++) {
        tabuada.push(`${num} x ${i} = ${num * i}`);
    }
    
    // Retorna o resultado
    res.status(200).send({ message: tabuada });
});

router.post("/9", (req, res) => {
    const { nota1, nota2, nota3 } = req.body;
    
    // Converte as entradas para número
    const n1 = Number(nota1);
    const n2 = Number(nota2);
    const n3 = Number(nota3);
    
    // Calcula a média
    const media = (n1 + n2 + n3) / 3;
    let status = "";
    
    // Verifica as condições de aprovação
    if (media >= 7) {
        status = "Aprovado";
    } else if (media >= 5 && media < 7) {
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }
    
    // Retorna o resultado arredondando a média para 2 casas decimais
    res.status(200).send({ 
        message: `Média: ${media.toFixed(2)} - Situação: ${status}` 
    });
});

router.post("/10", (req, res) => {
    const { sexo, altura } = req.body;
    
    // Converte a altura para número e padroniza o sexo para maiúsculo
    const h = Number(altura);
    const genero = sexo.toUpperCase();
    
    let pesoIdeal = 0;
    
    // Calcula o peso ideal dependendo do sexo
    if (genero === "H") {
        pesoIdeal = (72.7 * h) - 58;
    } else if (genero === "M") {
        pesoIdeal = (62.1 * h) - 44.7;
    } else {
        // Retorna erro se o usuário mandar uma letra diferente de H ou M
        return res.status(400).send({ 
            message: "Sexo inválido. Por favor, use 'H' para homem ou 'M' para mulher." 
        });
    }
    
    // Retorna o resultado arredondado
    res.status(200).send({ 
        message: `Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg` 
    });
});

export default router
 

