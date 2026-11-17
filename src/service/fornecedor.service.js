import fornecedorRepository from "../repository/fornecedor.repository.js";

async function createFornecedorService(novoFornecedor) {
    const fornecedor = await fornecedorRepository.createFornecedorRepository(novoFornecedor);
    if (!fornecedor) {
        throw new Error('Erro na criação do fornecedor!');
    }
    return fornecedor;
}

export default {
    createFornecedorService,
};