function solve(input) {
    
    let string1=input.shift();
    //console.log(string1);
    let first,second,third,substr;
    while(first!="Finish"){
        [first,second,third]=input.shift().split(" ");
        if(first==="Finish")break;
        if(first==="Replace"){
            for (let i = 0; i < string1.length; i++) {
                string1=string1.replace(second,third);
                
            }
        console.log(string1)
        }
        if(first==="Cut"){
            if(Number(second)>=0&&Number(third)<string1.length){
                string1=string1.substring(0,Number(second))+string1.substring(Number(third)+1,string1.length);
                console.log(string1)
            }
            else{console.log("Invalid indexes!");}
        }
        if(first==="Make"){
            if(second==="Lower"){
                string1= string1.toLowerCase();
                console.log(string1);
            }
            if(second==="Upper"){
                string1=string1.toUpperCase();
                console.log(string1);
            }
        }
        if(first==="Check"){
            if(string1.includes(second)){
                console.log(`Message contains ${second}`)
            }
            else{
                console.log(`Message doesn't contain ${second}`)
            }
        }
        if(first==="Sum"){
            if(Number(second)>=0&&Number(third)<string1.length){
            let sum=0;
            substr=string1.substring(Number(second),Number(third)+1);
            for (let i = 0; i < substr.length; i++) {
                const element = substr[i];
                sum+=element.charCodeAt(0);
            }
            console.log(sum)
            }
            else{
                console.log("Invalid indexes!");
            }
        }
    }
    //console.log(string)
}

solve([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
  ]
  );