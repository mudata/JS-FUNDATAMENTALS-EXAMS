function solve(arr) {
    let newarr=arr.shift().split(", ");

    let comand=""
    while(comand!="Craft!")
    { 
        comand=arr.shift().split(" - ")
        if(comand[0]==="Craft!"){
            break;
        }
        if(comand[0]==="Collect"){
            if(!newarr.includes(comand[1])){
                newarr.push(comand[1]);
            }
        }
        if(comand[0]==="Drop"){
            if(newarr.includes(comand[1])){
                let index=newarr.indexOf(comand[1]);
                newarr.splice(index,1);
            }
        }
        if(comand[0]==="Combine Items"){
            let firstItem=comand[1].split(":")
        //console.log("firstItem[0]");
        //console.log(firstItem[1])
        //console.log(newarr)
        if(newarr.includes(firstItem[0]))
        {
            let x=newarr.indexOf(firstItem[0]);
            newarr.splice(x+1, 0, firstItem[1]);
// inserts at index 1
        }
        //console.log(newarr)
        }
        if(comand[0]==="Renew"){
            if(newarr.includes(comand[1])){
                let j=newarr.indexOf(comand[1]);
                let name=comand[1];
                newarr.splice(j,1);
                newarr.push(name);
            }
        }
    }
    console.log(newarr.join(", "))
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]);