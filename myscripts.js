let påskafton = 'varierar'

//deklarera en funktion
function patrik () {
    console.log('hej')
    console.log('hej igen')
    console.log('påskafton', påskafton)
}



patrik()
patrik()


function lennart (djur, färg) {
    console.log(djur)
    console.log(färg)
}

lennart('katt', 'vit')
lennart('hund', 'brun')

function nils (first, second) {
    return first + second
}

let fromInput = prompt("fråga")
fromInput = parseInt(fromInput)
console.log('fromInput', typeof fromInput)

let fromAddFunction = nils(fromInput, 2)
console.log('fromAddFunction', fromAddFunction)