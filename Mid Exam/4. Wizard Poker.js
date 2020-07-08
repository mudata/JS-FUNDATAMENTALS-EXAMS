function solve(arr) {
let allCards=arr.shift().split(":");
let newarr=[];
comand="";
while (comand!="Ready") {
comand=arr.shift().split(" ");
let firstValue=comand[1];
let secondeValue=comand[2];



switch (comand[0]) {
    case "Add":
        functionAdd(firstValue);
    break;
    case "Insert":
        functionInsert(secondeValue, firstValue);
    break;
    case"Remove":
    functionRemove(firstValue);
    break;
    case "Swap":
    functionSwap(firstValue, secondeValue);
    break;
    case "Shuffle":
        allCards.reverse();
    break;
    default:
        break;
}
    
}


    function functionSwap(firstValue, secondeValue) {
        let cuur = newarr.indexOf(firstValue);
        let cuur1 = newarr.indexOf(secondeValue);
        let proba = newarr[cuur];
        newarr[cuur] = newarr[cuur1];
        newarr[cuur1] = proba;
    }

    function functionRemove(firstValue) {
        if (newarr.includes(firstValue)) {
            let index = newarr.indexOf(firstValue);
            newarr.splice(index, 1);
        }
        else {
            console.log("Card not found.");
        }
    }

    function functionInsert(secondeValue, firstValue) {
        if (secondeValue >= 0 && secondeValue <= allCards.length - 1 && allCards.includes(firstValue)) {
            //let index = allCards.indexOf(firstValue);
            newarr.splice(secondeValue, 0,firstValue);
            //allCards.splice(Number(secondeValue), 1, firstValue);
        }
        else {
            console.log("Error!");
        }
    }

    function functionAdd(firstValue) {
        if (allCards.includes(firstValue)) {
            //let index = allCards.indexOf(firstValue);
            newarr.push(firstValue);
            //allCards.splice(index, 1);
        }
        else {
            console.log("Card not found.");
        }
    }



    console.log(newarr.join(" "));
}

solve([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
'Add Moonfire',
'Add Pounce',
'Add Bite',
'Add Wrath',
'Insert Claw 0',
'Swap Claw Moonfire',
'Remove Bite',
'Shuffle deck',
'Ready'
  ]);