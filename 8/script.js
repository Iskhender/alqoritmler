const girisbali = parseInt(prompt('girisbalinidaxilet'))
const imtahanbali = parseInt(prompt('imtahanbalinidaxiled'))
const umumibal = girisbali + imtahanbali

if (imtahanbali < 17) {
    console.log("Kesildin")
} else {
    if (umumibal >= 51) {
        console.log("kecdin")
    } else {
        console.log("kesildin")
    }
}

if (umumibal >= 51) {
    console.log('E aldin')
} else if (umumibal >= 61) {
    console.log('D aldin')
} else if (umumibal >= 71) {
    console.log('C aldin')
} else if (umumibal >= 81) {
    console.log('B aldin')
} else if (umumibal >= 91) {
    console.log('A aldin')
}