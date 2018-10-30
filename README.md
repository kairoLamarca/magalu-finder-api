# Magalu Finder API

API para consulta, inclusão, alteração e exclusão de dados de lojas e produtos do magalu

## Proposta do projeto
#### Descrição do desafio
Você precisa comprar um presente para a sua namorada, porém nenhum
e-commerce entrega no prazo que você precisa. Sendo assim você precisa
descobrir quais lojas do Magalu , que tenham o produto que sua namorada tanto
deseja, estão mais próximas. Para resolver este problema ,você decide criar uma
solução: magalu-finder

#### Problema que o magalu-finder resolverá
Ajudar os clientes do Magalu a encontrarem as lojas mais próximas que possuem o
produto desejado.

#### Funcionalidade 1: Gestor de lojas
Como administrador do magalu-finder, gostaria de registrar lojas do Magalu para ajudar os clientes encontrarem as lojas mais próximas
#### Detalhes:
 * As lojas devem ter uma descrição, um código (Número da filial) e um CEP

#### Funcionalidade 2: Gestor de produtos vendidos por lojas
Como administrador do magalu-finder
Gostaria de registrar os produtos que cada uma das lojas vendem no momento para ajudar os clientes a saberem qual loja vende o produto desejado
#### Detalhes:
* Os produtos vendidos em cada loja devem ter Código do produto, Descrição e Valor de venda

#### Funcionalidade 3: Prover lojas mais próximas que
possuem o produto
Como cliente do magalu-finder, gostaria de saber quais lojas, que tenham o produto que procuro, estão mais próximas, para que consiga receber meu produto rapidamente em mãos
#### Detalhes:
* O cliente deve fornecer o código ou a descrição do produto e sua posição geográfica ou CEP para conseguir pesquisar
* A pesquisa deve retornar lojas que estão mais próximas do cliente,
ordenadas em ordem crescente
* Deve ser possível visualizar as seguintes informações na pesquisa:
Descrições das lojas, códigos das lojas, preço do produto procurado e a
distância, em quilômetros, do cliente

## Instalação

### Dependências
Todas as dependências estão referenciadas no package.json

Para executar a aplicação localmente, execute os seguintes comandos na pasta do projeto:

``` javascript
> npm install
> cd bin
> node server
```
A aplicação estará rodando em [http://localhost:4000]

### Banco de dados
É necessário criar um banco de dados MySql com as seguintes definições:
* host: localhost
* user: root
* database: magalu_finder
* password: 1234

#### Scripts do banco de dados
Os scripts do banco de dados para criação das tabelas estão na raiz do diretório do projeto com o nome de **ScriptsBD.sql**

## Testes

Para executar os testes, execute os seguintes comandos na pasta raiz do projeto:

``` javascript
> npm --only=dev
> npm test
```

## Rotas

### admin/loja
**GET** http://localhost:4000/admin/loja/
##### Retorno
``` javascript
[
    {
        "filial": 1,
        "descricao": "Loja 1",
        "cep": 14405413,
        "cidade": "Franca",
        "estado": "SP",
        "endereco": "sdfsdfs",
        "bairro": "sdfsdfs",
        "numero": "32423"
    }
]
```

**GET** http://localhost:4000/admin/loja/1
##### Retorno
``` javascript
[
    {
        "filial": 1,
        "descricao": "Loja 1",
        "cep": 14405413,
        "cidade": "Franca",
        "estado": "SP",
        "endereco": "sdfsdfs",
        "bairro": "sdfsdfs",
        "numero": "32423"
    }
]
```

**POST** http://localhost:4000/admin/loja/
##### envio
``` javascript
{
	"filial": "6",
	"descricao": "Loja 6",
	"cep": "14456123",
	"cidade": "Franca",
	"estado": "SP",
	"endereco": "Rua do comércio",
	"bairro": "Centro",
	"numero": "1234"
}
```
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) inserido(s) com sucesso"
}
```

**PUT** http://localhost:4000/admin/loja/1
##### envio
``` javascript
{
	"descricao": "Loja 1",
	"cep": "14456123",
	"cidade": "Franca",
	"estado": "SP",
	"endereco": "Rua do comércio",
	"bairro": "Centro",
	"numero": "1234"
}
```
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) alterado(s) com sucesso"
}
```

**DELETE** http://localhost:4000/admin/loja/1
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) excluído(s) com sucesso"
}
```

### admin/produto
**GET** http://localhost:4000/admin/produto/
##### Retorno
``` javascript
[
    {
        "id": 1,
        "codigo": "ABCD",
        "descricao": "Produto teste",
        "valor": "1234.56"
    }
]
```

**GET** http://localhost:4000/admin/produto/1
##### Retorno
``` javascript
[
    {
        "id": 1,
        "codigo": "ABCD",
        "descricao": "Produto teste",
        "valor": "1234.56"
    }
]
```

**POST** http://localhost:4000/admin/produto/
##### envio
``` javascript
{
    "codigo": "ABC",
    "descricao": "Produto Teste",
    "valor": "123.12"
}

```
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) inserido(s) com sucesso"
}
```

**PUT** http://localhost:4000/admin/produto/1
##### envio
``` javascript
{
    "codigo": "ABC",
    "descricao": "Produto Teste",
    "valor": "123.12"
}

```
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) alterado(s) com sucesso"
}
```

**DELETE** http://localhost:4000/admin/produto/1
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) excluído(s) com sucesso"
}
```

### admin/produtoloja
**GET** http://localhost:4000/admin/produtoloja/
##### Retorno
``` javascript
[
    {
        "id": 1,
        "filial": 1,
        "loja": "loja 1",
        "produto": "Produto teste",
        "codigo_produto": "ABCD"
    }
]
```

**GET** http://localhost:4000/admin/produtoloja/1
##### Retorno
``` javascript
[
    {
        "id": 1,
        "filial": 1,
        "loja": "loja 1",
        "produto": "Produto teste",
        "codigo_produto": "ABCD"
    }
]
```

**POST** http://localhost:4000/admin/produtoloja/
##### envio
``` javascript
{
    "id_produto": "2",
    "filial": "1"
}

```
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) inserido(s) com sucesso"
}
```

**DELETE** http://localhost:4000/admin/produtoloja/1
##### Retorno
``` javascript
{
    "mensagem": "1 registro(s) excluído(s) com sucesso"
}
```

### Cliente


