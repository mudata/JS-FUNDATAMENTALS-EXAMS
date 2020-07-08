function solve(arr) {
   
    let newarr=arr.shift().split(", ");
    //console.log(newarr);
    let comand=" ";
    let blackListedBR=0;
    let lost=0;
    while(comand!="Report"){
        comand=arr.shift().split(" ");
    let firstValue=comand[0];
    //console.log(firstValue);
    let secondValue=comand[1];
    //console.log(secondValue);
    let thirdValue=comand[2];
    //console.log(thirdValue);

switch (firstValue) {
    case "Blacklist":
        if(newarr.includes(secondValue)){
            let index= newarr.indexOf(secondValue);
            newarr[index]="Blacklisted";
            console.log(`${secondValue} was blacklisted.`);
            blackListedBR++;
        }
        else{console.log(`${secondValue} was not found.`);}
        //console.log(newarr)
    break;
    case "Error":
            secondValue=Number(secondValue);
            if(newarr[secondValue]!=="Blacklisted"&&newarr[secondValue]!=="Lost"){
            console.log(`${newarr[secondValue]} was lost due to an error.`);
            newarr[secondValue]="Lost";
            lost++;
            }
            //console.log(newarr)
        
    break;
    case "Change":
    secondValue=Number(secondValue);
    if(secondValue>=0&&secondValue<newarr.length){
        console.log(`${newarr[secondValue]} changed his username to ${thirdValue}. `);
        newarr[secondValue]=thirdValue;
    }    
    //console.log(newarr);
    break;

    default:
        break;
}


    }
    console.log(`Blacklisted names: ${blackListedBR} `);
    console.log(`Lost names: ${lost} `);
    console.log(newarr.join(" "));
}

solve([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
  ]);