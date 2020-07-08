function solve(input) {
    let arr = [];
    let line = input[0];
    let str = input[1].split(" ");

    let reg = /(^[d-z#{}|]+)/gm;
    let matches = reg.exec(line)
    if (matches !== null) {
    for (let i = 0; i < line.length; i++) {
        const element = line[i];
        let x = line[i].charCodeAt(0)
        //console.log(x)
        x = x - 3;
        let y = String.fromCharCode(x);
        //console.log(y)
        arr.push(y)
    }
    let k=arr.join("")
        for (let i = 0; i < k.length; i++) {
            k = k.replace(str[0], str[1]);
        }
        console.log(k)
    }
    else {
        console.log("This is not the book you are looking for.")
    }

}

solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw', 'ec an']);