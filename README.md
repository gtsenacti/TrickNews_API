A) O MAPA DA APLICAÇÃO:

TRICKNEWS_API/
│
├── server.js
│
├── package.json
├── package-lock.json
│
├── node_modules/
│
├── conexao/
│   └── conectar.js
│
├── database/
│   └── trickNewsDB.db
│
└── endpoints/
    ├── cadastro.js
    └── login.js

B) INSTRUÇÕES:
OBSERVAÇÃO: sempre execute a API antes de executar a interface da aplicação!
1 - abra o arquivo server.js na IDE de preferência;
2 - abra o terminal e instale as dependências:
    npm init -y
    npm install express sqlite3 cors
3 - logo após, rode o comando: node server.js;
4 - tecle ENTER. Abrirá o local host do servidor. Copie e cole no navegador. Passe os endpoints;
5 - para parar o servidor, tecle ctrl + c no terminal.
