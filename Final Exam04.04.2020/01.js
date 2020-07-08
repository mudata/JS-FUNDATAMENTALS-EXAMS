function solve(input) {
    let reg=/([a-zA-Z0-9]+)/gm;
    let line=input.shift();
    let matches=reg.exec(line);
    if(matches!==null){
        let comand=input.shift().split(">>>");
        while (comand[0]!=="Generate") {
            if(comand[0]==="Contains"){
                if(line.includes(comand[1])){
                    console.log(`${line} contains ${comand[1]}`)
                }
                else{
                    console.log("Substring not found!");
                }
            }
            if(comand[0]==="Flip"){
                let startIndex=Number(comand[2]);
                let lastIndex=Number(comand[3]);
                if(comand[1]==="Upper"){
                    //console.log(startIndex)
                    //console.log(lastIndex)
                    //console.log(line)
                    line=line.substr(0,startIndex)+line.substr(startIndex,lastIndex-startIndex).toUpperCase()+line.substr(lastIndex,);
                    console.log(line)
                }
                if(comand[1]==="Lower"){
                    //console.log(startIndex,lastIndex)
                    line=line.substr(0,startIndex)+line.substr(startIndex,lastIndex-startIndex).toLowerCase()+line.substr(lastIndex,);
                    console.log(line)
                }
            }
            if(comand[0]==="Slice"){
            let x=Number(comand[1]);
            let y=Number(comand[2]);
            line=line.substr(0,x)+line.substr(y,)
            //console.log(line.substr(x,y-2))   
            console.log(line) 
            }


            comand=input.shift().split(">>>");
        }
    }
console.log(`Your activation key is: ${line}`)
}

solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]
  
  );