<h1> :red_car: Oficina mecânica</h1>
Api Rest para gerenciamento de Oficina Mecânica, podendo manter o controle de clientes, funcionarios, peças, fornecedores, seguro e vendas realizadas,
assim tendo um controle melhor do estabelecimento.

<h2>:computer: Tecnologias Utilizadas<h2>
<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>Sqlite3</li>
    <li>Sequelize</li>
</ul>

<h2>:hammer: Iniciando o projeto</h2>
<li>Para instalar dependências do projeto:</li>
    
```  
npm install
```
    
<li>Para iniciar projeto em desenvolvimento:</li>
    
```  
npm start
```  
    
<h2>:key: Entidades do Projeto</h2>
    <p><b>Peças</b></p>
    
    id - PK
    nome - required
    preço - required
    categoria
    quantidade
    marca
    quantidade