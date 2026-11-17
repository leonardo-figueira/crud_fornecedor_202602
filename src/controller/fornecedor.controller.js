import fornecedorService from '../service/fornecedor.service.js';
import { response } from 'express';

async function createFornecedorController(request, response) {
    const novoFornecedor = request.body;
    try {
        const fornecedor = await fornecedorService.createFornecedorService(novoFornecedor);
        response.status(201).send(fornecedor);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

export default {
    createFornecedorController
}