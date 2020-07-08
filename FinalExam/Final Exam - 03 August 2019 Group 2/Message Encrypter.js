function solve(input) {
    let patern=/([*|@])(?<name>[A-Z][a-z]{2,})\1: [\[](?<first>\w)[\]][\|][\[](?<second>\w)[\]][\|][\[](?<third>\w)[\]][\|]/;
//let x=new RegExp("([*|@])(?<name>[A-Z][a-z]{2,})\1: [\[](?<first>\w)[\]][\|][\[](?<second>\w)[\]][\|][\[](?<third>\w)[\]][\|]","g")
let nums=+input.shift();
for (let i = 0; i < nums; i++) {
    let line=input.shift();
    let matches=line.match(patern)
    if(matches!==null){
        let name=matches[2];
        let first=matches[3];
        let second=matches[4];
        let third=matches[5]
        let x=first.charCodeAt()
        let y=second.charCodeAt()
        let z=third.charCodeAt();
        console.log(name+": "+ x,y,z)

    }    
    else{console.log("Valid message not found!")}
    //console.log(matches)
    
}

//console.log(matches)
}

solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ]);