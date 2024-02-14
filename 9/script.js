function vurmaCedveliniYarat() {
    for (let i = 1; i <= 10; i++) {
        let setir = ""
        for (let j = 1; j <= 10; j++) {
            let hasil = i * j

            setir += i + " * " + j + " = " + hasil + "\n"
        }

        console.log(setir)
    }
}

vurmaCedveliniYarat()