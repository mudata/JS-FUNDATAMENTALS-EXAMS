function solve(input) {
    let regx=/^(.+)>(?<x>\d{3})\|(?<first>[a-z]{3})\|(?<second>[A-Z]{3})\|(?<third>[^\<\>]{3})<\1$/gm;
let nums=Number(input.shift());
for (let i = 0; i < nums; i++) {
    let line=input.shift();

    let matches=regx.exec(line);
    if(matches!==null){
        //console.log(matches)
        let first=matches[2];
        let second=matches[3];
        let third=matches[4];
        let fy=matches[5]
        console.log("Password: "+first+second+third+fy)
    }
    else{
        console.log("Try another password!")
    }
    
}
}

solve([
  '3',
  '##>00|no|NO|!!!?<###',
  '##>123|yes|YES|!!!<##',
  '$$<111|noo|NOPE|<<>$$'
]);