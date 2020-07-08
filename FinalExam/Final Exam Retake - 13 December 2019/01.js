function solve(input) {
    let str=input.shift();
    let line,index,letter,substring,secondSubstring,newarr;
    
    while (line!=='For Azeroth') {
        line=input.shift();
        if(line==='GladiatorStance'){
            str=str.toUpperCase();
            console.log(str.toUpperCase());
        }
        else if(line==="DefensiveStance"){
            str=str.toLowerCase();
            console.log(str.toLowerCase());
        }
        else if(line==='For Azeroth'){
            break;
        }
        else{
            let comand=line.split(" ");
            //console.log(comand)
            if(comand[0]==='Dispel'){
                index=Number(comand[1]);
                letter=comand[2];
                if(index>=0&&index<str.length){
                    str = str.substring(0, index) + letter + str.substring(index + 1);
                console.log("Success!");
                }
                else{
                    console.log("Dispel too weak.");
                }
            }
            else if(comand[0]==="Target"&&comand[1]==="Change"){
            substring=comand[2];
            secondSubstring=comand[3];
                if(str.includes(substring)){
                    str=str.replace(substring,secondSubstring);
                    console.log(str)
                }
                
            }
            else if(comand[0]==="Target"&&comand[1]==="Remove"){
                    substring=comand[2];
                
                    let startIndex=str.indexOf(substring);
                    //console.log(startIndex,lastIndex)
                    str=str.substring(0,startIndex)+str.substring(startIndex+substring.length);
                    console.log(str)
                
            }
            else{console.log("Command doesn't exist!")}
        }
        //console.log(line)
        
    }
    //console.log(str)
}

solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ]
  );