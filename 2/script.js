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
