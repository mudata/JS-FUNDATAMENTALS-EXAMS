function solve(input) {
    let reg=/!(?<first>[A-Z][a-z]{2,})!:\[(?<second>[a-zA-Z]{8,})\]/gm
let nums=+input.shift();
for (let i = 0; i < nums; i++) {
    let line=input.shift()
    let matches=reg.exec(line)
    if(matches!==null){
        //console.log(matches)
        
        let leters=matches[2];
        let arr=[];
        //console.log(leters)
        for (let j = 0; j < leters.length; j++) {
            let n=leters[j].charCodeAt();
            //console.log(n)
            arr.push(n)
            
        }
        console.log(matches[1]+": "+ arr.join(" "))
    }
    else{
        console.log("The message is invalid")
    }
    
}





}


solve([ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ]
);