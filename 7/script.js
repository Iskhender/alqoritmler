let x = parseInt(prompt("x ededini daxil edin"))
let y = parseInt(prompt("y ededini daxil edin"))
let ilkIfade = 4 * x + 2 * y + 4;
let ikinciIfade = 2 * x - y + 3;
let ucuncuIfade = 3 * x + 4 * y + 3;


if (x > 0 && y < 0) {
    console.log(ilkIfade)
} else if (x > 0 && y === 0) {
    console.log(ikinciIfade)
} else if (0 > x && y > 0) {
    console.log(ucuncuIfade)
} else {
    console.log('verdiyiviz ededler teleb olunan sertlere uygun deyil')
}
