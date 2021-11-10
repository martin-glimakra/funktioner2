// let påskafton = 'varierar'

// //deklarera en funktion
// function patrik () {
//     console.log('hej')
//     console.log('hej igen')
//     console.log('påskafton', påskafton)
// }



// patrik()
// patrik()


// function lennart (djur, färg) {
//     console.log(djur)
//     console.log(färg)
// }

// lennart('katt', 'vit')
// lennart('hund', 'brun')

// function nils (first, second) {
//     return first + second
// }

// let fromInput = prompt("fråga")
// fromInput = parseInt(fromInput)
// console.log('fromInput', typeof fromInput)

// let fromAddFunction = nils(fromInput, 2)
// console.log('fromAddFunction', fromAddFunction)


// console.log('början')
// let martinsDjur = ['hund', 'katt', 'sköldpadda']
// console.log('djur', martinsDjur[0])

// for (let i = 0; i < 5; i++){
//     console.log(i)
//     console.log('djur i loop', martinsDjur[i])

// }

//   console.log('slut')

let torsten = {
        age: 12,
        height: 160,
        exempelFunktion: function vadsomhelst (song) {
            console.log('idag ska jag sjunga:', song)
        }
    }

    console.log(torsten.height)
    torsten.height = 260
    console.log('ändrad längd', torsten.height)

    torsten.exempelFunktion('bä bä vita lamm')

    let martinsDjur = ['katt', 'hund', 'sköldpadda', { djur: 'kanariefågel', färg: 'blå'}]

    martinsDjur.push('bäver')

    // arrayer lämpar sig bra för att loopa
    console.log(martinsDjur.length)

    function harMartinDetHarDjuret (djurParameter) {
        for (let i = 0; i < martinsDjur.length; i++) {
            console.log(i)
            console.log(martinsDjur[i])
            if (djurParameter === martinsDjur[i]) {
                console.log('Martin har en', djurParameter)
            }
        }
    }
harMartinDetHarDjuret(prompt('har Martin det här djuret?'))

    // console.log = function nagotAnnat (input) {
    //     prompt(input)
    // }
    // console.log(console)
    // console.error('allt är trasigt')