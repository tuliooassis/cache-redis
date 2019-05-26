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
[Acessar Postman Collection](https://www.getpostman.com/collections/af3d27a481cf00e24a1b)

#### Cache
- **<code>GET</code> cache/:id**
Verifica se o usuário pode ou não ser impactado por uma pesquisa.

##### Exemplo
GET /cache/01234567890
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

- **<code>GET</code> cache**
Retorna todos os usuários presentes na cache, ou seja, todos os usuários que não devem ser impactados pela pesquisa.
##### Exemplo
GET /cache
##### Retorno
````
{
    "success": true,
    "result": [
        "01234567890"
    ]
}
````

- **<code>DEL</code> cache/:id**
Deleta o usuário da cache, permitindo que ele seja impactado pela pesquisa.
##### Exemplo
DEL /cache/01234567890
##### Retorno
````
{
    "success": true,
    "result": 1
}
````
