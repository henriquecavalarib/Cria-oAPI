const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Usamos const aqui porque a referência do array não muda, 
// mesmo que a gente adicione itens dentro dele.
const usuarios = [];

app.get('/', (req, res) => {
    res.json({
        mensagem: "Minha primeira API",
        status: "sucesso",
        timestamp: new Date().toISOString()
    });
});

app.get('/info', (req, res) => {
    res.json({
        nome: 'Minha API rest',
        version: '1.1.0',
        autor: 'Henrique Cavalari'
    });
});

app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;

    // Validação básica de campos vazios ou apenas espaços
    if (!nome || !nome.trim() || !email || !email.trim()) {
        return res.status(400).json({ 
            erro: "Campos obrigatórios ausentes!",
            detalhe: "Certifique-se de enviar nome e email corretamente."
        });
    }

    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome.trim(),
        email: email.trim().toLowerCase() // Padroniza e-mail para minúsculo
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.get('/usuarios', (req, res) => {
    res.json({
        total: usuarios.length,
        dados: usuarios
    });
});

app.listen(PORT, () => {
    console.log(`[OK] Servidor ativo em: http://localhost:${PORT}`);
});