import express from 'express'
import { listen } from 'node:quic';

const app = espress()

app.use(espress.json);

app.get("/api/matematica/:num2/:num2", (req, res) => {
    const num1 = Number(res.params.num1)
    const num2 = Number(res.params.num2)

    res.send({ menssage: num1 - num2 })
})

app.listen(3300 () =
  console.log("Rodando na porta localhost3000")
)