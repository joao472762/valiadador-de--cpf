

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
