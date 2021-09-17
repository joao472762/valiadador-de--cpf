# Como validar um cpf:


## Sumário

## Qual é o método

atualmente a validação de um cpf ocorre pelo seus **últimos  dois dígitos** ou seja vamos fazer alguns processos para saber se o cpf é válido

o cpf que iremos usar

123.456.789 - **(09)** 

## Que contas são essas ?

basicamente para verificarmos  se os **dois últimos** dígitos são verdadeiros temos que usar um  método que é usado pelo governo 

## Verificando o penúltimo dígito

primeiro você irá colocar os primeiros 9 dígitos  do cpf   e multiplicar  polos decrescentes de 10 incluindo o 10  até chegar no 2 

 

### Multiplicando

 1    2    3    4    5    6    7    8   9  os nove primeiro dígitos do cpf do usuário

10   9    8    7    6    5    4    3   2  os decrescente de 10 incluindo o 10 até chegar no 2

10  18  24  28  30  30  28  24 18   o resultado dessa multiplicação

### Somando

agora somaremos o resultado da multiplicação  anterior

- multiplicação anterior

     1    2    3    4    5    6    7    8   9  os nove primeiro dígitos do cpf do usuário

    10   9    8    7    6    5    4    3   2  os decrescentes de 10 incluindo o 10 até chegar no 2

    10  18  24  28  30  30  28  24 18   o resultado dessa multiplicação

10  + 18  + 24  + 28  +30  +30 +28  +24 +18 = 210 ( a soma de todos os números da multiplicação anterior)

a soma é igual a 210

### Resto da divisão

agora vamos pegar o resultado da soma que é 210  e vamos multiplicar  por 10

210 * 10  = 2100

e agora queremos o resto da divisão por 11 então

2100 % 11 = 10 

obs:   o resto de divisão são os números depois da vírgula ou depois das  casas decimais

exemplo:

3 dividido por 2

3 / 2 = 1,5

o resto é 5

### Validação fianal:

se o resto da divsão for igual a 10 ou 11 esse resto vira 0

resto = 10

`if (resto === 10 || 11){resto = 0}`

agra está na hora de comparar o resto(resto = 0) com  com o penúltimo número do cpf. Se eles forem iguais você pode continuar a confirmação e se forem diferentes o cpf não é válido

o penúmtimo número vai estar em **azul** 

cfp = 123.456.789 - (0)9

se você reparar o resto que ( 0 ) é o mesmo valor do penúltimo digito do cpf, significa que o cpf é válido

## Verificando o ultimo dígito

primeiro você irá colocar os primeiros 10 dígitos  do cpf   e multiplicar  por os decrescentes de 11 incluindo o 11  até chegar no 2 

 

### Multiplicando

 1    2     3    4    5    6    7    8   9    0  os dez  primeiros dígitos do cpf do usuário

11  10    9    8    7    6    5    4    3   2  os decrescentes de 10 incluindo o 10 até chegar no 2

11  20   27  32  35   36  35  32  27  0  o resultado dessa multiplicação

### Somando

agora somaremos o resultado da multiplicação anterior

- multiplicação anterior

     1    2     3    4    5    6    7    8   9    0  os dez  primeiros dígitos do cpf do usuário

    11  10    9    8    7    6    5    4    3   2  os decrescentes de 10 incluindo o 10 até chegar no 2

    11  20   27  32  35   36  35  32  27  0  o resultado dessa multiplicação

11  20   27  32  35   36  35  32  27  0 = 255  ( a soma de todos os números da multiplicação anterior)

a soma é igual a 255

### Resto da divisão

agora vamos pegar o resultado da soma que é 255  e vamos multiplicar por 10

255 * 10  = 2550

e agora queremos o resto da divisão por 11 então

2550 % 11 = 9

obs:   o resto de divisão são os números depois da vírgula ou depois das  casas decimais

exemplo:

4 dividido por 3

4/ 3 = 1,3

o resto é 3

### Validação fianal:

se o resto da divsão for igual a 10 ou 11 esse resto vira 0

resto = 10

`if (resto === 10 || 11){resto = 0}`

agora compare  o resto(resto = 9) com  com o ultimo número do cpf  e se eles forem iguais  o cpf é válido

o ultimo número vai estar em  **azul** 

cfp = 123.456.789 - 0 ( 9 )

se você reparar o resto que 9 é o mesmo valor do ultiomo digito do cpf, siginifica que o cpf é válido

## O Código completo

```jsx
let cpf = [1,2,3,4,5,6,7,8,9,0,9]

function validCpf(cpf){
    let position = 0
    let count = 10 
    
    /*a função abaixo se chama lidar com a
     verifiação do primerio digito poruque o cpf é válidado
     pelos dois ultimos digitos */
    function handleVerifiedFirstDigit(){
        let verifiedCpf = []
        
        do{
            verifiedCpf.push(cpf[position] * count--)
            position++
        }while(position < 9)
        
        
        let total = verifiedCpf.reduce((total,number ) => total+ number,0)
        let rest = (total*10) % 11
        
        
        if(rest == 10 || rest === 11){
            rest = 0
        }
        if(cpf[9] != rest){
            console.log('esse cpf é iválido')
            return
        }

    }
    function handleVerifiedSecondDigit(){
        let verifiedCpf = []
    
        position = 0
        count = 11
    
        do{
            
            verifiedCpf.push(cpf[position] * count--)
            position++
    
        }while(position < 10)
       
    
       let total = verifiedCpf.reduce((total,number)=> total + number, 0)
       let  rest = (total * 10 ) % 11
      
    
        if(rest == 10 || rest === 11){
            rest = 0
        }
    
        if(cpf[10] != rest ){
            console.log('cpf inválido, veja se digitou certo')
            return
        }
    
        console.log('este cpf é válido')
        
    }
    handleVerifiedFirstDigit()
    handleVerifiedSecondDigit()

}

validCpf(cpf)
```
