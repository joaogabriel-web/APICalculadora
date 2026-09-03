import express from 'express'
import { listen } from 'node:quic';

const app = express()

app.use(express.json);

app.get("/api/matematica/:num2/:num2", (req, res) => {
    
    res.send({ menssage: "Operaçoes: Subtraçao, soma, multiplicaçao, divisao, raiz e potencia" });
})

app.post("/api/opracoes/num1/num2", (req, res) => {
    const num1 = res.body.num1
    const num2 = res.body.num2

    const resp1 = num1 - num2
    const resp2 = num1 + num2
    const resp3 = num1 * num2
    const resp4 = num1 / num2
    const resp5 = num1^2
    

    res.send({ menssage: resp1,
        menssage: resp2,
        menssage: resp3,
        menssage: resp4
    })
})

app.listen(3000, () => { 
  console.log("Rodando na porta localhost3000")
});