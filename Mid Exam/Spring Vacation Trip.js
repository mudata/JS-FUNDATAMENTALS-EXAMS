function solve(arr) {
    
let days=arr.shift();//7
let budget=arr.shift();//12000
let people=arr.shift();//5
let pricePerKilo=arr.shift();//1.5
let foodPerPersonDay=arr.shift();//10
let room=arr.shift();//20;
let value=0;
let foodExpenses=foodPerPersonDay*days*people;
let hotel=room*days*people;
value=foodExpenses+hotel;
console.log(value)
for (let i = 1; i <= arr.length; i++) {
    const element =Number(arr[i-1]);
    let currentValue=element*Number(pricePerKilo);
    value+=currentValue;
    if(i%3===0||i%5===0){

        value+=currentValue+(value*0.4);
    }
    if(i%7===0){
        
        value-=(currentValue/(Number(people)));
        
        
    }
    
        
    
    console.log(value);
}




}

solve([
    '7',   '12000', '5',
    '1.5', '10',    '20',
    '512', '318',   '202',
    '154', '222',   '108',
    '123'
  ]);