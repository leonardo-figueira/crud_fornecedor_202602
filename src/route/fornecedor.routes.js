import fornecedorController from '../controller/fornecedor.controller.js';
import { Router } from 'express';

const fornecedorRouter = Router();

fornecedorRouter.post('/fornecedor', fornecedorController.createFornecedorController);

export default fornecedorRouter;