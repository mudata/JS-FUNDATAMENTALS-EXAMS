function solve(string1) {
    let string=string1.shift().split(" ");
   // console.log(string)
    let comand="";

    while (comand!="Stop") {
        comand=string1.shift().split(" ");
        let first=comand[0];
        //console.log(string.length);
        switch (first) {
            case "Swap":
                //console.log(string);
                if(string.includes(comand[1])&&string.includes(comand[1])){
                    for (let i = 0; i < string.length; i++) {
                        const element = string[i];
                        if(element==comand[1]){string[i]=comand[2];}
                        if(element==comand[2]){string[i]=comand[1];}
                        
                    }
                }
                //console.log(string);
                break;
                case "Delete":  
                
                   // if(comand[1]>0&&comand[1]<string.length){
                    comand[1]=Number(comand[1]);
                    //console.log(comand[1]);
                       for (let j = 1; j <= string.length; j++) {
                           const element = string[j];
                           if(j==comand[1]){
                            string.splice(comand[1]+1,1) ;}
                           
                       }
                    //}
                    //if(comand[1]==0){string.shift();}
                    //if(comand[1]==string.length-1){string.pop();}

                break;
                case "Put":
                    if(comand[2]>1&&comand[2]<string.length){
                        comand[2]=Number(comand[2]);
                        string.splice(comand[2]-1, 0, comand[1]);
                      
                    }
                    if(comand[2]==string.length){string.push(comand[1]);}
                    if(comand[2]==1){string.unshift(comand[1]);}
                break;
                case "Sort":
                    string.sort((a,b)=>{return b.length-a.length;});
                    break;
        case "Replace":
            comand[2]=comand[2].toString();
            //console.log(comand[2]);
            if(string.includes(comand[2])){
                for (let i = 0; i < string.length; i++) {
                    const element = string[i];
                    if(element==comand[2]){
                        string[i]=comand[1];}
                    }
            }
            //console.log(string);
        break;
            default:
            break;
        }
    }
    console.log(string.join(" "));
}

solve([
    'Congratulations! You last also through the have challenge!',
'Swap have last',
'Replace made have',
'Delete 2',
'Put it 4',
    'Stop',
    ''
  ]
  
);