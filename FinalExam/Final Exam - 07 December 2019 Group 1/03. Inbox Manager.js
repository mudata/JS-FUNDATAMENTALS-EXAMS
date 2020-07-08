function solve(input) {

    let info = {}
    let comand, username, email;
    let count=0;
    while (comand != "Statistics") {
        comand = input.shift().split("->");
        username = comand[1];
        email = comand[2];
        if (comand[0] === "Add") {
            if (!info.hasOwnProperty(username)) {
                count++;
                info[username] = new Set();
            }
            else {
                console.log(`${username} is already registered`);
            }
        }
        if (comand[0] === "Send") {
            info[username].add(email);
        }
        if (comand[0] === "Delete") {
            if (info.hasOwnProperty(username)) {
                delete info[username];
                count--;
            }
            else{
                console.log(`${username} not found!`)
            }
        }

    }
    let splited=Object.entries(info);
    splited.sort((a,b)=>{
        return b[1].size - a[1].size;
    });
    splited.sort((a,b)=>{
        return a[0].localeCompare(b[0])
    });
    console.log(`Users count: ${count}`)
for (const iterator of splited) {
    console.log(iterator[0]);
    let x=Array.from(iterator[1]);
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        console.log(" - "+element)
    }
}
    //console.log(splited)
}
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]
);