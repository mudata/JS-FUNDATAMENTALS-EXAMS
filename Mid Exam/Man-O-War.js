function solve(arr) {
    let yes=false;
    let pirateShips1=arr.shift().split(">");
    let pirateShips=[];
    pirateShips1.forEach(element => {
        element=Number(element);
        pirateShips.push(element);
    });
    //console.log(pirateShips);
    let warShip1=arr.shift().split(">");
    let warShip=[];
    warShip1.forEach(element => {
        element=Number(element);
        warShip.push(element);
    });
    //console.log(warShip);
    let maxHealth=Number(arr.shift());
    //console.log(maxHealth);
    let index;
    let comand="";
    while (comand!="Retire") {
        comand=arr.shift().split(" ");
        let firstValue=Number(comand[1]);
        let secondValue=Number(comand[2]);
        let thirdValue=Number(comand[3]);
        switch (comand[0]) {
            case "Fire":
                //console.log("fire")
                //console.log(warShip);
                index=firstValue;
                let demage=secondValue;
                if(index>=0&&index<warShip.length){
                    if(warShip[index-1]-demage<=0){
                        warShip.splice(index-1,1);
                        console.log("You won! The enemy ship has sunken.");
                        yes=true;
                    }
                    else{warShip[index-1]-=demage;}
                    
                }
                //console.log(warShip);
            break;
        case "Defend":
            //console.log("defend");
            //console.log(pirateShips);
            let startIndex=firstValue;
            let endIndex=secondValue;
            let damage=thirdValue;
            if(startIndex>=0&&endIndex<pirateShips.length){
                for (let i = startIndex; i <= endIndex; i++) {
                    if(pirateShips[i]-damage<=0){
                        pirateShips.splice(i,1);
                        console.log("You lost! The pirate ship has sunken.");
                        yes=true;
                        break;
                    }
                    else{
                        pirateShips[i]-=damage;
                    }
                    
                }
            }
            //console.log(pirateShips)
        break;
        case "Repair":
            //console.log("repair")
            //console.log(pirateShips);
        index=firstValue;
        let health=secondValue;
        if(index>=0&&index<pirateShips.length){
            if(pirateShips[index]+health>=maxHealth){
                pirateShips[index]=maxHealth;
            }
            else{
                pirateShips[index]+=health;
            }
        }
        //console.log(pirateShips)
        break;
        case "Status":
            let count=0;
        for (let i = 0; i < pirateShips.length; i++) {
            const element = pirateShips[i];
            if(element<0.2*maxHealth){count++;}
            
        }
        console.log(`${count} sections need repair.`)
        break;
            default:
                break;
        }
    }
    if(yes==false){
    let pirate1=0;
    let war=0;
    pirateShips.forEach(element => {
        pirate1+=element;
    });
    warShip.forEach(element => {
        war+=element;
    });
    console.log(`Pirate ship status: ${pirate1}`);
    console.log(`Warship status: ${war}`);
    }
}
    solve([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
  ]
  );