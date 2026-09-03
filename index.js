import express from 'express'

const app = express()

app.use(express.json());

app.get("/api/calculadora", (req, res) => {
    
    res.send({ menssage: "Operaçoes: Subtraçao, soma, multiplicaçao, divisao, raiz e potencia" });
})

app.post("/api/calculadora/soma/num1/num2", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const resp1 = num1 + num2

    res.send({ menssage: resp1 })
})

app.post("/api/calculadora/sub/num1/num2", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const resp1 = num1 - num2

    res.send({ menssage: resp1 })
})

app.post("/api/calculadora/mult/num1/num2", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const resp1 = num1 * num2

    res.send({ menssage: resp1 })
})

app.post("/api/calculadora/div/num1/num2", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const resp1 = num1 / num2

    res.send({ menssage: resp1 })
})

app.post("/api/calculadora/raiz/num1/num2", (req, res) => {
    const num1 = req.body.num1

    const resp1 = (num1 ^ 2) / 3.14

    res.send({ menssage: resp1 })
})

app.listen(3000, () => { 
  console.log("Rodando na porta localhost3000")
});