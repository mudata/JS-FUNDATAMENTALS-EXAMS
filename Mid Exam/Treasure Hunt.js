function solve(arr) {
    
    let chest=arr.shift().split("|");
    //console.log(chest);
    let comand="";
    while (comand!="Yohoho!") {
        comand=arr.shift().split();
        let first=comand[0].split(" ");
        //console.log(first)
        switch (first[0]) {
            case "Loot":
                //console.log("loot")
                first.shift();
                for (let i = 0; i < first.length; i++) {
                    const element = first[i];
                    if(!chest.includes(element)){chest.unshift(element);}
                    
                    
                    
                    
                }
                //console.log(chest)
            break;
            case "Drop":
                //console.log("drop")
                //console.log(chest)
                let index=Number(first[1]);
                if(index>=0&&index<chest.length){
                    let value=chest[index];
                    chest.splice(index,1);
                    chest.push(value)
                }
                //console.log(chest)
            break;
            case "Steal":
                //console.log(chest)
                let StealArray=[];
                let count=Number(first[1]);
                if(count<=chest.length){
                    for (let index = 0; index < count; index++) {
                        let el=chest.pop();
                        StealArray.unshift(el);
                        
                    }
                    //console.log(chest);
                    console.log(StealArray.join(", "))
                }
            break;
        
            default:
                break;
        }

        
    }
    //console.log(chest)
    let sum=0;
    for (let index = 0; index < chest.length; index++) {
        const element = chest[index];
        let value=element.length;
sum+=value;
        
    }
    //console.log(chest);
    
    if(chest.length==0){
        console.log("Failed treasure hunt.")
    }
    else{
        console.log(`Average treasure gain: ${(sum/chest.length).toFixed(2)} pirate credits.`);
    }
}

solve([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
  ]
  );