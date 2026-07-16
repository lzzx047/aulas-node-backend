import express from 'express'

const router = express.Router()

router.post("/somar", (req, res) => {
    //const num1 = req.query.num1
    //const num2 = req.query.num2
    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({
         message: resultado
     })
    //res.send({ message: resultado})
})


export default router