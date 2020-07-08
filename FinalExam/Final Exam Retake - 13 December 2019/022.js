function solve(input) {
    let reg1=/[|](?<n>[A-Z]+)[|][:][#](?<name2>\w+[ ]\w+)[#]/gm;
let reg=new RegExp("[|](?<name>[A-Z]+)[|]:[#](?<title>[A-Za-z]+ [A-Za-z]+)[#]","gm");
    let nums=+input.shift();
for (let i = 0; i < nums; i++) {
    let line=input.shift();
    let matches=line.match(reg1)
    if(matches!==null){
    let na=matches[0];
console.log(na)
    }
    
    
}
}

solve([
  '3',
  '|GEORGI|:#Lead architect#',
  '|Hristo|:#High Overseer#',
  '|STEFAN|:#Assistant Game Developer#'
]);