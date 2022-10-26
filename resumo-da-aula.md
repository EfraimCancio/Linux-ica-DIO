# Integração do app PokedEfras com a API do pokemon

## O que é uma API
É um web-server, onde dados são fornecidos para um cliente através de um servidor. O JSON é um formato muito ultilizado como padrão para esse tranferêcia.

## O que é o protocolo HTTP
HTTP é o protocolo usado para realizar a tranferencia de dados entre cliente e servidor. O cliente (No nosso caso o browser) faz uma solicitação ao servidor através dos métodos HTTP(GET, POST, DELET, PUSH, PACH,...).

## Composição da URL:
A URL é o endereço de cada conteúdo disponivel na rede. Ela é composta por duas partes principáis. 
1. **Endereço:** O **IP**  ou o dominio da página. 
2. **Path:** O caminho de **identificação** do recurço. 

## Meios de transferencia de dados cliente/servidor
Uma requisição HTTP, independente do método, ultiliza 3 formas de organizar os dados trocados entre o cliente e o servidor. Os path params, os headers e o body.

1. **Querry Strings e Path params:** 
São os parametros passado pela URL ao servidor. Eles vem logo após a declaração do path, iniciados pelo sinal de "?". Exemplo: https://pokeapi.co/api/v2/pokemon?type=fire&id=2. Onde tudo que vem após o sinal de "?" (type=fire&id=2) são parametros/valores concatenados com o simbolo "&" passados para o servidor como filtros da requisição.

2. **Header global, Header Request, Header Response:**
São os cabeçalhos de configuração da API e contem informações de idiomas primordiais, tipos de arquivos suportados, método da requisição, status da requisição, IPS do cliente e do servidor, etc...

3. **Body (Corpo da requisição):** 
Excluindo o méto GET, todas as requisições em que o cliente enviará dados que modificaram o banco de dados do servidor possuem um corpo contendo a forma e o conteudo desse dados.

## Status Code
O código de status HTTP, indica para o cliente qual a consição atual sobre o processamento de sua requisição, sendo cada centena referente a uma categoria de status. 
* **100 à 199 -> Status Informal:** Indica que o servidor ainda está processando a requisição de alguma forma. 
* **200 à 299 -> Status Success:** A requisição foi completamente processanda e o servidor entregou ao cliente o serviço esperado. 
* **300 à 399 -> Status Redirection:** A requisição foi recebida mas o servidor precisou realizar algum tipo de redirecionamento.
* **400 à 499 -> Status Client Erros:** A requisição não foi procesada por completo devido à algum erro nas informações enviadas pelo cliente.
* **500 à 599 -> Status Server Erros:**  A requisição não pode ser processada devido à algum erro no servidor.

   