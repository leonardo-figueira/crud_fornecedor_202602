import express from 'express';
import fornecedorRouters from './src/route/fornecedor.routes.js';

const app = express();

app.use(express.json());
app.use(fornecedorRouters);

app.listen(3000, () => {
    console.log('Servidor ligado na porta 3000.');  
});
