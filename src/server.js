import { app } from "./app.js"

/** 
 * Porta do serviço 
 */
const port = 3000

/** Aplicativo executando na porta definida
 * na variável port
 */
app.listen(port, (req, res) => {
    console.log(`Server rodando na porta ${port}`);
})