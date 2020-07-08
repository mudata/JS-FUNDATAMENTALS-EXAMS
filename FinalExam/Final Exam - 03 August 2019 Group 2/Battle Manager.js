function solve(input) {
    let peoples = {};
    let line = input.shift().split(":");
    while (line[0] !== "Results") {
        //console.log(line)
        if (line[0] === "Add") {
            line[2]=Number(line[2]);
            line[3]=Number(line[3]);
            if (!peoples.hasOwnProperty(line[1])) {
                peoples[line[1]] = {
                    health: line[2],
                    energy: line[3]
                };
            }
            else{
                peoples[line[1]].health+=line[2];
            }
        }
        if(line[0]==="Attack"){
            line[3]=Number(line[3])
            if(peoples.hasOwnProperty(line[1])&&peoples.hasOwnProperty(line[2])){
                peoples[line[2]].health-=line[3];
                peoples[line[1]].energy-=1;
                if(peoples[line[2]].health<=0){
                    delete peoples[line[2]]
                    console.log(`${line[2]} was disqualified!`);
                }
                if(peoples[line[1]].energy===0){
                    delete peoples[line[1]];
                    console.log(`${line[1]} was disqualified!`)
                }
            }
        }
        if(line[0]==="Delete"){
            if(line[1]==="All"){
                peoples={};
            }
            else{
                if( peoples.hasOwnProperty(line[1])){
                delete peoples[line[1]];
                }
            }
        }
        line = input.shift().split(":");
    }
    let x=Object.entries(peoples);
    //console.log(x)
    x.sort((a,b)=>{
    return b[1].health-a[1].health&&b[0].localeCompare(a[0]);
    });
    
let leng=Object.keys(peoples);
//console.log(peoples)
    console.log("People count: "+leng.length);
    for (const iterator of x) {
        console.log(iterator[0]+" - "+iterator[1].health+" - "+iterator[1].energy)
    }
    //console.log(peoples)
}

solve([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:1000',
    'Results'
  ]
  
);