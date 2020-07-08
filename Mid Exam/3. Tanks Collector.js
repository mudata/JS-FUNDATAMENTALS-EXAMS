function solve(arr) {
    
    let currArr=arr.shift().split(", ");
    let numComands=Number(arr.shift());
    let tankName="";
    let index;
    for (let i = 0; i < numComands; i++) {
        let comand=arr.shift().split(", ");
        //console.log(comand);
        switch (comand[0]) {
            case "Add":
                tankName=comand[1];
                if(currArr.includes(tankName)){
                    console.log("Tank is already bought");
                }
                else{
                    console.log("Tank successfully bought");
                    currArr.push(tankName);
                }
              // console.log(currArr)
            break;
            case "Remove":
                tankName=comand[1];
                index=currArr.indexOf(tankName);
                if(currArr.includes(tankName)){
                    console.log("Tank successfully sold");
                    currArr.splice(index,1);
                }
                else{
                    console.log("Tank not found");
                }
                //console.log(currArr)
            break;
            case "Remove At":
                index=comand[1];
                if(index>0&&index<currArr.length){
                currArr.splice(index,1);
                console.log("Tank successfully sold")
                }
                else{
                    console.log("Index out of range");
                }
            break;
            case "Insert":
                index=comand[1];
                tankName=comand[2];
                if(index>0&&index<currArr.length){
                    if(ifExsict(currArr,tankName)==true){console.log("Tank is already bought");}
                    else{
                        currArr.splice(index, 0, tankName);
                        console.log("Tank successfully bought");
                    }
                }
                else{console.log("Index out of range")}
            break;
        
            default:
                break;
        }
        
    }
    console.log(currArr.join(", "));



function ifExsict(currArr,tankName)
{
if(currArr.includes(tankName)){return true;}
else{return false;}
}

}

solve([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 2, STG',
    'Remove, T-34-85 Rudy'
  ]
  );