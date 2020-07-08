function solve(input) {
    let numbers=Number(input.shift());
    let y,k;
    for (let i = 0; i < numbers; i++) {
        
        let line=input.shift()
        if(line.includes(":")){
            line=line.split(":")

            let name=line[0];
            let title=line[1];
            //console.log(line);
            //console.log(title);
            let n=false;
            let t=false;
            if(name.startsWith("|")&&name.endsWith("|")){
                y=name.substring(1,name.length-1);
                //console.log(y)
                if(y===y.toUpperCase()){
                    if(name.length>=4){
                        n=true;
                    }
                }
            }
            if(title.startsWith("#")&&title.endsWith("#")){
                let spliteed=title.split("#");
                //console.log(spliteed)
                k=spliteed[1];
                let newsplit=spliteed[1].split(" ");
                if(newsplit.length===2){
                    if (!/[^a-zA-Z]/.test(newsplit[0])&&!/[^a-zA-Z]/.test(newsplit[1])){
                        t=true;
                    }
                }
    
            }
            if(n&&t){
               
                    console.log(`${y}, The ${k}`)
                    console.log(`>> Strength: ${y.length}`);
                    console.log(`>> Armour: ${k.length}`)
                
            }
            else{
        console.log("Access denied!");
            }
            



        }
        else{console.log("Access denied!");}
        
    }
}

solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
  ]);