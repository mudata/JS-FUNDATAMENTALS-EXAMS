function solve(input) {
    let comand=input.shift().split("->");
    let peoples={};
    let count=0;
    while (comand[0]!=="Statistics") {
        if(comand[0]==="Add"){
            if(!peoples.hasOwnProperty(comand[1])){
                peoples[comand[1]]=[];
                count++;
            }
            else{
                console.log(`${comand[1]} is already registered`);
            }
        }
        if (comand[0]==="Send") {
            if(peoples.hasOwnProperty(comand[1])){
                peoples[comand[1]].push(comand[2]);
            }
        }
        if(comand[0]==="Delete"){
            if(peoples.hasOwnProperty(comand[1])){
                delete peoples[comand[1]];
                count--;
            }
            else{
                console.log("Peter not found!")
            }
        }
        comand=input.shift().split("->");
    }
console.log("Users count: "+count);
let x=Object.entries(peoples);
//console.log(x)
x.sort((a,b)=>{
return b[1].length-a[1].length||a[0].localeCompare(b[0])
});
//console.log(x)
for (const iterator of x) {
    console.log(iterator[0])
    iterator[1].forEach(element => {
        console.log(" - "+element)
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