function solve(input) {
    let users = {};
    let line = input.shift().split("->");
    while (line[0] !== "Statistics") {
        if (line[0] == "Add") {
            if (users.hasOwnProperty(line[1])) {
                console.log(`${line[1]} is already registered`)
            }
            else {
                users[line[1]] = [];
            }
        }
        if (line[0] == "Send") {
            users[line[1]].push(line[2])
        }
        if (line[0] == "Delete") {
            if (users.hasOwnProperty(line[1])) {
                delete users[line[1]];
            }
            else {
                console.log(`${line[1]} not found!`);
            }
        }



        line = input.shift().split("->");
    }

    let x = Object.entries(users)
    console.log("Users count: "+x.length)
    x.sort((a, b) => {
        return b[1].length - a[1].length ||
            a[0].localeCompare(b[0]);
    });

    for (const iterator of x) {
        console.log(iterator[0]);
        iterator[1].forEach(element => {
            console.log(" - "+element);
        });
    }
}

solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
  ]
  
);