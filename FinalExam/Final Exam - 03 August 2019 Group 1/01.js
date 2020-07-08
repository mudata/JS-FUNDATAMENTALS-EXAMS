function solve(input) {
    
    let str=input.shift();
    let comand=input.shift().split(" ");
    while (comand[0]!=='End') {
        if(comand[0]==="Translate"){
            for (let i = 0; i < str.length; i++) {
                str=str.replace(comand[1],comand[2]);
            }
            console.log(str)
        }if(comand[0]==="Includes"){
            if(str.includes(comand[1])){
                console.log("True")
            }
            else{console.log("False");}
        }
        if(comand[0]==="Start"){
            if(str.startsWith(comand[1])){console.log("True");}
            else{console.log("False");}
            
        }
        if(comand[0]==="Lowercase"){
            str=str.toLowerCase();
            console.log(str)
        }
        if(comand[0]==="FindIndex"){
            let x=str.lastIndexOf(comand[1]);
            console.log(x);
        }
        if(comand[0]==="Remove"){
        str=str.substr(comand[1]+comand[2],)
        console.log(str)
        }
        comand=input.shift().split(" ");
    }
}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
  ]
  );