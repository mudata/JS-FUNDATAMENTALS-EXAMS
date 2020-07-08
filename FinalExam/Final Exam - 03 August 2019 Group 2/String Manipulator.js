function solve(input) {
    let str=input.shift();
    //console.log(str)
    let comand=input.shift().split(" ");
    while (comand[0]!=="Done") {
        if(comand[0]==="Change"){
            for (let i = 0; i < str.length; i++) {
                str=str.replace(comand[1],comand[2])
                
            }
            console.log(str)
        }
        if(comand[0]==="Includes"){
            if(str.includes(comand[1]))console.log("True");
            else{console.log("False");}
        }
        if(comand[0]==="End"){
            if(str.endsWith(comand[1])){
            console.log("True");
            }
            else{console.log("False");}
        }
        if(comand[0]==="Uppercase"){
            str=str.toUpperCase();
            console.log(str)
        }
        if(comand[0]==="FindIndex"){
            let x=str.indexOf(comand[1]);
            console.log(x)
        }
        if (comand[0]==="Cut") {
            let subst=str.substr(comand[1],comand[2]);
            console.log(subst)
        }
        comand=input.shift().split(" ");
    }
   // console.log(str)
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
  ]
  );