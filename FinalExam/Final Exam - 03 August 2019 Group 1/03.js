function solve(input) {
    let capacity=+input.shift();
    let users={};
    let comand=input.shift().split("=");
    while (comand[0]!=="Statistics") {
        if(comand[0]==="Add"){
            if(!users.hasOwnProperty(comand[1])){
                users[comand[1]]={
                    send:Number(comand[2]),
                    reveived:Number(comand[3])
                }
            }
        }
        if(comand[0]==="Message"){
            if(users.hasOwnProperty(comand[1])&&users.hasOwnProperty(comand[2])){
                users[comand[1]].send+=1;
                users[comand[2]].reveived+=1;
                if(users[comand[1]].send===capacity){
                    console.log(`${comand[1]} reached the capacity!`);
                    delete users[comand[1]];
                }
                if(users[comand[2]].reveived===capacity){
                    console.log(`${comand[2]} reached the capacity!`);
                    delete users[comand[2]];
                }
            }
        }
        if(comand[0]==="Empty"){
            if(users.hasOwnProperty(comand[1])){
                delete users[comand[1]];
            }
            if(comand[1]==="All"){users={};}
        }
        comand=input.shift().split("=");
    }
    let length=Object.keys(users).length;
    console.log("Users count: "+length)
    let x=Object.entries(users);
    x.sort((a,b)=>{
        return b[1].reveived-a[1].reveived||b[0].localeCompare(a[0]);
    });
    // x.sort((a,b)=>{
    // return b[0].localeCompare(a[0]);
    // });
    //console.log(x)
    for (const iterator of x) {
        console.log(iterator[0]+" - "+(iterator[1].reveived+iterator[1].send))
    }
    //console.log(users)
}

solve([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
  ]
  );