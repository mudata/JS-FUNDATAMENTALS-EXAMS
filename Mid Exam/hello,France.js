function solve(arr) {
    let budget =arr.pop();
    let splitedarr=arr.shift().split("|");
    let newPrices=[];
    
    for (let i = 0; i < splitedarr.length; i++) {
        const element = splitedarr[i];
        let first=element.split("->");
        let type=first[0];
        let price=Number(first[1]);
        if(type==="Clothes"&&price<=50||type==="Shoes"&&price<=35.00||type==="Accessories"&&price<=20.50){
                if(price<=budget){//buy
                budget-=price;
                newPrices.push((price*1.4).toFixed(2));
                }
                
            }
        }

    console.log(newPrices.join(" "));
    let sumWithProfit = 0;
    for (let el of newPrices) {
        sumWithProfit += +el;
    }
    let profit = (sumWithProfit - sumWithProfit / 1.4).toFixed(2);
    let sum = budget + sumWithProfit;
    console.log(`Profit: ${profit}`);
    if(sum>=150){
        console.log("Hello, France!")
    }
    else{console.log( "Time to go.")}
}

solve([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
  ]);