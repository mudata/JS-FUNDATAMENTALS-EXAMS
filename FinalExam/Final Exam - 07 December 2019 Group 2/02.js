function solve(input) {
    let count = +input.shift();
    for (let i = 0; i < count; i++) {
        let line = input.shift();
        let first, second;
        let b=false;
        let v=false;
        let [firstPart, secondPart] = line.split(":")
        //console.log(firstPart,secondPart)
        if (firstPart.startsWith("!") && firstPart.endsWith("!")) {
            let midd = firstPart.split("!");
            first = midd[1];
            if (midd[1].length >= 3 && midd[1][0] === midd[1][0].toUpperCase()) {
                let substr = midd[1].substring(1, midd[1].length);
                if (substr === substr.toLowerCase()) {
                    
                    b=true;
                }

            }
        }
        if (secondPart.startsWith("[") && secondPart.endsWith("]")) {
            let mid = secondPart.substring(1, secondPart.length - 1);
            second = mid;
            if (/^[a-zA-Z]+$/.test(mid) && mid.length >= 8) {
                
                v=true
            }
        }
        if (b&&v) {
            let arr=[];
            for (let i = 0; i < second.length; i++) {
                const element = second[i];
               arr.push(element.charCodeAt(0));
                
            }
            console.log(`${first}: ${arr.join(" ")}`)
        }
        else{console.log("The message is invalid")}
    }
    
}

solve([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
  ]
  );