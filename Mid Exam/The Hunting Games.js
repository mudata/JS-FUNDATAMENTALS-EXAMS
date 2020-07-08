function solve(arr){
    
    let days=arr.shift();
    let countOfPlayers=arr.shift();
    let energy=arr.shift();
    let waterPerDay=arr.shift();
    let foodPerDay=arr.shift();
    let energyLoss=arr.shift();

    let  watersupplies=(waterPerDay*countOfPlayers)*days;
    let  foodsupplies=(foodPerDay*countOfPlayers)*days;
 
    let bool=true;

while(energy>=0&&arr.length>0&&bool){
    for (let i = 1; i <= days; i++) {
        if(energy-energyLoss<0){
            bool=false;
            console.log(`You will run out of energy. You will be left with ${foodsupplies.toFixed(2)} food and ${watersupplies.toFixed(2)} water.`);
            break;
            }
        energy-=energyLoss;
        
        if(i%2===0){
            energy*=1.05;
            watersupplies=watersupplies-0.3*watersupplies;
        }
        if(i%3===0){
            energy*=1.10;
            foodsupplies=foodsupplies- foodsupplies/countOfPlayers;
        }
        
        energyLoss=arr.shift();
    }
    
   
}
if(bool){console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)}
}
solve([12,
    6,
    4430,
    9.8,
    5.5,
    620.3,
    840.2,
    960.1,
    220,
    340,
    674,
    365,
    345.5,
    212,
    412.12,
    258,
    496]);