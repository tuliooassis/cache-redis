# tracksale-test
Aplicação desenvolvida para a 1ª etapa do processo de seleção da Tracksale.

## Introdução
Foi implementado uma aplicação com o uso de cache com ``redis`` e testes unitários com ``mocha``. 
A abordagem utilizada foi de manter o usuário na cache durante 90 dias. Assim, todos os presentes na cache não serão impactados.

## Pré-requisitos
É necessário ter o ``docker`` e o ``docker-compose`` instalados.

## Execução
- Clone este repositório
- Execute
``
docker-compose up
``
- Pronto

## Endpoints
[Acessar Postman Collection](https://www.getpostman.com/collections/afe5440f4e4176cc8107)

#### Customers
- **<code>GET</code> api/customers/:id**
Verifica se o usuário pode ou não ser impactado por uma pesquisa.

##### Exemplo
GET /api/customers/01234567890
##### Retorno
````
{
    "success": true,
    "result": {
        "send": true
    }
}
````
ou
````
{
    "success": true,
    "result": {
        "send": false
    }
}
````

- **<code>GET</code> api/customers**
Retorna todos os usuários presentes na cache, ou seja, todos os usuários que não devem ser impactados pela pesquisa.
##### Exemplo
GET /api/customers
##### Retorno
````
{
    "success": true,
    "result": [
        "01234567890"
    ]
}
````

- **<code>DEL</code> api/customers/:id**
Deleta o usuário da cache, permitindo que ele seja impactado pela pesquisa.
##### Exemplo
DEL /api/customers/01234567890
##### Retorno
````
{
    "success": true,
    "result": 1
}
````
