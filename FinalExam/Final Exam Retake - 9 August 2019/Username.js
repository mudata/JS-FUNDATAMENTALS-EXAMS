function solve(input) {
    let name = input.shift();
    //console.log(name)
    let first, comand, second, third;
    while (comand != "Sign") {
        comand = input.shift().split(" ");
        //console.log(comand)
        first = comand[0];
        second = comand[1];
        third = comand[2];
        if (comand[0] === "Sign") break;
        else if (first === "Case" && second === "lower") {
            name = name.toLowerCase();
            console.log(name);
        }
        else if (first === "Case" && second === "upper") {
            name = name.toUpperCase();
            console.log(name);
        }
        else if (first === "Reverse") {
            if (Number(second) >= 0 && Number(third) <= name.length&&Number(second)<Number(third)&&Number(second)<name.length) {
                let x = name.substr(second, third);
                x = Array.from(x);
                console.log(x.reverse().join(""));
            }

        }
        else if (first === "Cut") {
            if (name.includes(second)) {
                //console.log("s")
                let s = Number(name.indexOf(second));
                name = name.substr(0, s) + name.substr(s + second.length, name.length);
                console.log(name);
            }
            else {
                console.log(`The word ${name} doesn't contain ${second}.`)
            }
        }
    else if (first === "Replace") {
            for (let i = 0; i < name.length; i++) {
                name = name.replace(second, "*")
            }
            console.log(name)
        }
        else if (first === "Check") {
            if (name.includes(second)) {
                console.log("Valid");
            }
            else {
                console.log(`Your username must contain ${second}.`);
            }
        }
    }


}
solve(
    ['ThisIsMyString', 'Reverse 0 14', 'Replace i', 'Cut MyStr*ng', 'Sign up']);