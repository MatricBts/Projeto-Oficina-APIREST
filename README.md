<h1> :red_car: Oficina mecânica</h1>
Api Rest para gerenciamento de Oficina Mecânica, podendo manter o controle de clientes, funcionarios, peças, fornecedores, seguro e vendas realizadas,
assim tendo um controle melhor do estabelecimento.

<h2>:computer: Tecnologias Utilizadas<h2>
<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>Sqlite3</li>
    <li>Sequelize</li>
    <li>Jest</li>
</ul>

<h2>:hammer: Iniciando o projeto localmente</h2>
<li>Para instalar dependências do projeto:</li>
    
```  
npm install
```
    
<li>Para iniciar projeto em desenvolvimento:</li>
    
```  
npm start
```  
    
    
<h2>:rocket: Para usar API sem precisar baixar - Hospedagem da API feita no Heroku </h2>
<li>Efetuando um cadastro:</li>
<p>Deve-se usar o metodo POST acessando o link com a entidade desejada passando o objeto com os atributos requeridos </p>
    
```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  
    
![cadastro](https://user-images.githubusercontent.com/55266551/165861783-1898301f-8c67-477c-8891-e3e126d9e2d7.png)


<li>Buscando todos os cadastros da entidade:</li>
<p>Deve-se usar o metodo GET acessando o link com a entidade desejada</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  


    
<li>Buscando buscando cadastro com o filtro:</li>
<p>Deve-se usar o metodo GET acessando o link com a entidade desejada e o filtro pelo body</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas/atributos   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  



![filtro-por-nome](https://user-images.githubusercontent.com/55266551/165861067-61b85e6e-97e8-4f71-81bf-c0c500aab465.png)

    
    
<li>Atualizando registro da entidade:</li>
<p>Deve-se usar o metodo PUT acessando o link com a entidade desejada e usando um atributo para busca e outro(s) que irão ser modificados</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  


![update](https://user-images.githubusercontent.com/55266551/165861114-ba1ee830-e1be-40bc-878a-952a141a4a7a.png)

    
    
<li>Deletando cadastro da entidade:</li>
<p>Deve-se usar o metodo Delete acessando o link com a entidade desejada e passando o atributo como filtro, para ir no cadastro certo</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  


![delete](https://user-images.githubusercontent.com/55266551/165861133-3e67cde6-4c38-4a52-b1ae-325bdc61a5e2.png)

    
    
    
<h2>:key: Entidades do Projeto</h2>
    <p><b>Peças</b></p>
    
    id - PK
    nome - required
    preço - required
    categoria
    quantidade
    marca
    garantia

<p><b>Funcionários</b></p>
    
    id - PK
    matrícula - required
    nome - required
    telefone - required
    admissão
    nCTPS
    PIS
    Cargo
    Salário
    CPF 
    RG 
    EstadoCivil
    Nascimento 
    Jornada Contratual 
    Endereço 
    CEP 
    Bairro
    E-mail 
    
    <p><b>Fornecedor</b></p>
    
    id - PK
    nome - required
    marca 
    pedido
    vencimento
    marca
    garantia

<p><b>Usuario</b></p>
    
    id - PK
    nome - required
    endereco 
    cidade
    estado
    email

<p><b>Vendas</b></p>
    
    id - PK
    Data - required
    Preço - required
    pedido
    qtd
    vencimento

