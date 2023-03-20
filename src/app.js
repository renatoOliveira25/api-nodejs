import express from 'express';
import { router } from "./routes.js"

/** 
 * Criando um servidor com a API express
 * e definindo a porta de acesso para 3000 
 * */ 
const app = express();

/** 
 * Constante utilizada para aramzenar as rotas 
 */
const rotas = router;

/** 
 * Definindo o uso da biblioteca JSON pelo servidor
 */
app.use(express.json());

/** 
 * Definindo o uso das rotas no app 
*/
app.use(rotas);

/** 
 * Exportando o app 
 */
export { app }