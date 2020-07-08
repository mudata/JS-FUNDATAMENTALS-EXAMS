function solve(arr) {
    
let neededExp=Number(arr.shift());
//console.log(neededExp);
let countBattles=Number(arr.shift());
//console.log(countBattles);
let currentExp=0;
let br=0;
for (let i = 1; i <= countBattles; i++) {
    br++;
    let earnedExp=Number(arr.shift());
    currentExp+=earnedExp;
    if(i%3==0){currentExp+=(earnedExp*0.15);}
    if(i%5==0){currentExp-=(earnedExp*0.10);}
    if(currentExp>=neededExp){break;}
    
    //console.log(currentExp);
}
    //console.log(neededExp);
   // console.log(currentExp);
if(currentExp>=neededExp){
    console.log(`Player successfully collected his needed experience for ${br} battles.`)
}
else{
    console.log(`Player was not able to collect the needed experience, ${(neededExp-currentExp).toFixed(2)} more needed.`);
}


}

solve([
    '400',
    '5',
    '50',
    '100',
    '200',
    '100',
    '20'
  ]
  );