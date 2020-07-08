function solve(input) {
    let line=input.shift();
    let comand,first,second;
    while (comand!="Complete") {
        comand=input.shift().split(" ");
        //console.log(comand)
        if(comand[1]==="Upper"){
            line=line.toUpperCase();
            console.log(line.toUpperCase());
        }
        if(comand[1]==="Lower"){
            line=line.toLowerCase();
            console.log(line.toLowerCase());
        }
        if(comand[0]==="GetDomain"){
            first=Number(comand[1]);
            console.log(line.substr(line.length-first,line.length))
        }
        if(comand[0]==="GetUsername"){
            if(line.includes("@")){
                second=line.split("@");
                console.log(second[0])
            }
            else{
                console.log(`The email ${line} doesn't contain the @ symbol.`);
            }
        }
        if(comand[0]==="Replace"){
            first=comand[1];
            for (let i = 0;  i< line.length; i++) {
               line= line.replace(first,"-");
                
            }
            console.log(line);
        }
        if(comand[0]==="Encrypt"){
            let arr=[];
            for (let i = 0; i < line.length; i++) {
                const element = line[i];
                arr.push(element.charCodeAt(0));
                
            }
            console.log(arr.join(" "));
        }

        

    }
}

solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    "Replace A",
    'Encrypt',
    'Complete'
  ]);