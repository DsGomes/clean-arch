# Cenário

Vamos implementar um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado.

## Testes

1 - Não deve criar um pedido com cpf inválido - OK
2 - Deve criar um pedido com 3 itens (com descrição, preço e quantidade) - OK
3 - Ao fazer um pedido, a quantidade de um item não pode ser negativa - OK
4 - Ao fazer um pedido, o mesmo item não pode ser informado mais de uma vez
5 - Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)
6 - Não deve aplicar cupom de desconto expirado
7 - Nenhuma dimensão do item pode ser negativa
8 - O peso do item não pode ser negativo
9 - Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)
10 - Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado

## Considere

Refatorar o algoritmo de validação de cpf: https://github.com/rodrigobranas/cccat7_refactoring/blob/master/src/example2/cpfBefore.ts

## Considere 2

O valor mínimo é de R$10,00
Por enquanto, como não temos uma forma de calcular a distância entre o CEP de origem e destino, será de 1000 km (fixo)
Utilize a fórmula abaixo para calcular o valor do frete

### Fórmula de Cálculo do Frete

Valor do Frete = distância (km) * volume (m3) * (densidade/100)

Exemplos de volume ocupado (cubagem)

Camera: 20cm x 15 cm x 10 cm = 0,003 m3
Guitarra: 100cm x 30cm x 10cm = 0,03 m3
Geladeira: 200cm x 100cm x 50cm = 1 m3

Exemplos de densidade

Camera: 1kg / 0,003 m3 = 333kg/m3
Guitarra: 3kg / 0,03 m3 = 100kg/m3
Geladeira: 40kg / 1 m3 = 40kg/m3

Exemplos

produto: Camera
distância: 1000 (fixo)
volume: 0,003
densidade: 333
preço: R$9,90 (1000 * 0,003 * (333/100))
preço mínimo: R$10,00

produto: Guitarra
distância: 1000 (fixo)
volume: 0,03
densidade: 100
preço: R$30,00 (1000 * 0,03 * (100/100))

produto: Geladeira
distância: 1000 (fixo)
volume: 1
densidade: 40
preço: R$400,00 (1000 * 1 * (40/100))

## Sugestões

Utilize a sua linguagem e biblioteca de teste de sua preferência
Faça a modelagem da forma que desejar e não se preocupe por enquanto, vamos implementar juntos na aula seguinte com influências de DDD e Clean Architecture

## Dicas

Devem existir no mínimo 2 arquivos, um de teste e outro que implementa os cenários propostos
Tente seguir com disciplina, criando primeiro um teste que falha, depois fazendo e teste passar e refatorando.

https://www.macoratti.net/alg_cpf.htm
