function solve(arr) {
 let weapons=arr.shift().split("|");
 let comand="";
 while(comand!="Done")
 {
comand=arr.shift().split(" ");
let index=comand[2];
    switch (comand[0]) {
        case "Move":
            move(index);
        break;

        case "Check":
            check();
        break;

    
        default:
            break;
    }
 }  







    function check() {
        let prnt = "";
        let print2="";
        for (let i = 0; i < weapons.length; i++) {
            const element = weapons[i];
            if (i % 2 !== 0) {
                prnt += element + " ";
            }
            else{print2+=element+" ";}
        }
        if(comand[1]=="Odd"){console.log(prnt);}
        else{console.log(print2);}
    }

    function move(index) {
        if (comand[1] == "Left") {
            if (index <= weapons.length && index >= 1) {
                if (index == 1) {
                    let cuurnum = weapons[1];
                    weapons[1] = weapons[0];
                    weapons[0] = cuurnum;
                }
                else if (index == weapons.length - 1) {
                    let cuurnum = weapons[weapons.length - 1];
                    weapons[weapons.length - 1] = weapons[weapons.length - 2];
                    weapons[weapons.length - 2] = cuurnum;
                }
                else {
                    weapons.splice(index - 1, 0, weapons[index]);
                    weapons = [...new Set(weapons)];
                }
            }
        }
        else if (comand[1] == "Right") {
            if (index <= weapons.length - 2 && index >= 0) {
                if (index == 0) {
                    let cuurnum = weapons[1];
                    weapons[1] = weapons[0];
                    weapons[0] = cuurnum;
                }
                else if (index == weapons.length - 2) {
                    let cuurnum = weapons[weapons.length - 2];
                    weapons[weapons.length - 2] = weapons[weapons.length - 1];
                    weapons[weapons.length - 1] = cuurnum;
                }
                else {
                    weapons.splice(index + 1, 0, weapons[index]);
                    weapons = [...new Set(weapons)];
                }
            }
        }
    }

    console.log(`You crafted ${weapons.join("")}!`)
}

solve([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
  ]);