function isPalindrome(str){
    conversao =  str.replace(/\s/g,'').toUpperCase()
    contrario = conversao.split('').reverse().join('')
    palindromo = ''
    for(let i = 0;i < conversao.length;i++){
        if(conversao[i] == contrario[i]){
            palindromo += conversao[i]
        }
    }
    if(conversao === palindromo){
        return true
    }
    return false
}

function arrayMaxMin(arr){
    newArr = []
    maior = 0
    menor = 1000000000000000
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > maior){
            maior = arr[i]
        }
        if(arr[i] < menor){
            menor = arr[i]
        }
    }
    newArr.push(maior)
    newArr.unshift(menor)
    return newArr
}

