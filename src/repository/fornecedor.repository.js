import db from '../config/database.js';

db.run(`
CREATE TABLE IF NOT EXISTS fornecedor (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    cnpj  TEXT UNIQUE NOT NULL,
    nome  TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);`);

function createFornecedorRepository(novoFornecedor) {
    return new Promise((resolve, reject) => {
        const { 
            cnpj, 
            nome, 
            email 
        } = novoFornecedor;
        db.run(
            `INSERT INTO fornecedor (cnpj, nome, email)
            VALUES (?, ?, ?)`,
            [cnpj, nome, email],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ 
                        id: this.lastID 
                    });
                }
            }
        );
    });
}

export default {
    createFornecedorRepository,
};  