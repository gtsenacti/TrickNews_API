function cadastroRoutes(app, db) {

    //rota de listagem de cadastros
    app.get("/cadastros", (req, res) => {

        const sql = "SELECT idCadastros, email, senha FROM cadastros";

        db.all(sql, [], (err, rows) => {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }
            res.json(rows);
        });
    });

    //rota de criação de cadastro
    app.post("/cadastros", (req, res) => {

        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                erro: "Email e senha são obrigatórios"
            });
        }

        const sql = "INSERT INTO cadastros (email, senha) VALUES (?, ?)";

        db.run(sql, [email, senha], function (err) {
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }
            res.status(201).json({
                idCadastros: this.lastID,
                email,
                senha
            });
        });
    });

    //rota de atualização de cadastro
    app.put("/cadastros/:id", (req, res) => {

        const id = Number(req.params.id);
    
        const { email, senha } = req.body;
    
        if (!email || !senha) {
            return res.status(400).json({
                erro: "Email e senha são obrigatórios"
            });
        }
    
        const sql = `
            UPDATE cadastros
            SET email = ?, senha = ?
            WHERE idCadastros = ?
        `;
    
        db.run(sql, [email, senha, id], function (err) {
    
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }
    
            if (this.changes === 0) {
                return res.status(404).json({
                    erro: "Cadastro não encontrado"
                });
            }
    
            res.json({
                mensagem: "Cadastro atualizado com sucesso",
                idCadastros: id,
                email,
                senha
            });
        });
    });

    //rota de exclusão de cadastro  
    app.delete("/cadastros/:id", (req, res) => {

        const id = Number(req.params.id);
    
        const sql = "DELETE FROM cadastros WHERE idCadastros = ?";
    
        db.run(sql, [id], function (err) {
    
            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }
    
            if (this.changes === 0) {
                return res.status(404).json({
                    erro: "Cadastro não encontrado"
                });
            }
    
            res.json({
                mensagem: "Cadastro excluído com sucesso"
            });
        });
    });
}

//exportação das rotas de cadastro
module.exports = cadastroRoutes;

