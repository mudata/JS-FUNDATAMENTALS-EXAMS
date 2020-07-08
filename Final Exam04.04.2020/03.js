function solve(input) {
    let citys = {};
    let comand = input.shift().split("||");
    while (comand[0] !== "Sail") {
        if (citys.hasOwnProperty(comand[0])) {
            citys[comand[0]].people += Number(comand[1]);
            citys[comand[0]].gold += Number(comand[2]);
        }
        if(!citys.hasOwnProperty(comand[0])) {
            citys[comand[0]] = {
                name: comand[0],
                people: Number(comand[1]),
                gold: Number(comand[2])
            }
        }
        //console.log(comand[0])
        comand = input.shift().split("||");
    }
    //console.log(citys)
    let line = input.shift().split("=>");
    while (line[0] !== "End") {
        if (line[0] === "Plunder") {
            if (citys.hasOwnProperty(line[1])) {
                citys[line[1]].people -= Number(line[2]);
                citys[line[1]].gold -= Number(line[3]);
                console.log(`${line[1]} plundered! ${Number(line[3])} gold stolen, ${Number(line[2])} citizens killed.`)
                if (citys[line[1]].people === 0 || citys[line[1]].gold === 0) {
                    delete citys[line[1]];
                    console.log(`${line[1]} has been wiped off the map!`)
                }
            }
        }
        if (line[0] === "Prosper") {
            if (citys.hasOwnProperty(line[1])) {
                if (Number(line[2]) < 0) {
                    console.log("Gold added cannot be a negative number!");
                }
                else {
                    citys[line[1]].gold += Number(line[2]);
                    console.log(`${Number(line[2])} gold added to the city treasury. ${citys[line[1]].name} now has ${citys[line[1]].gold} gold.`)
                }
            }
        }
        line = input.shift().split("=>");
        //console.log(citys)
    }

    let x = Object.entries(citys);
    if (x.length > 0) {
        console.log(`Ahoy, Captain! There are ${x.length} wealthy settlements to go to:`);
        x.sort((a, b) => {
            return b[1].gold - a[1].gold ||
                a[1].name.localeCompare(b[1].name);
        });
        //console.log(x)
        for (const iterator of x) {
            console.log(`${iterator[1].name} -> Population: ${iterator[1].people} citizens, Gold: ${iterator[1].gold} kg`)
        }
    }
    else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }

}

solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]
);