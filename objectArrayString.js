// Ett objekt som heter torsten. Objekt kan innehålla olika typer av data
let torsten = {
    ålder: 12,
    cm: 160,
    exempelFunktion: function vadsomhelst (sång) {
        console.log('idag ska jag sjunga:', sång)
    }
}

// Det går att ändra värdet i ett objekt
console.log(torsten.cm)
torsten.längd = 260
console.log('torsten.cm ändrat antal cm', torsten.cm)

// Det går att lägga till värden i ett objekt
torsten.humör = 'sur'
console.log('torsten', torsten)

torsten.exempelFunktion('bä bä vita lamm')


//Array
let martinsDjur = ['katt', 'hund', 'sköldpadda', { djur: 'kanariefågel', färg: 'blå'}]

//här byts hund ut mot hamster
martinsDjur[1] = 'hamster'

//Den här koden lägger till bäver sist i array martinsDjur
martinsDjur.push('bäver')

// Arrayer lämpar sig bra för att loopa igenom eftersom loopens längd kan matchas med arrayens via martinsDjur.length
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