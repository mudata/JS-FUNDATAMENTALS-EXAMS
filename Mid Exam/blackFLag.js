function solve(arr) {
    let days=Number(arr.shift());
    let dailyPlunder=Number(arr.shift());
    let expectedPlunder=Number(arr.shift());
    let current=0;
    for (let i = 1; i <= days;i++) {
        current+=dailyPlunder;
        if(i%3===0){
            current+=0.5*dailyPlunder;
        }
            if(i%5==0){
                current=current-(current*0.3);
            }
    }
    if(current>expectedPlunder){
        console.log(`Ahoy! ${current.toFixed(2)} plunder gained.`)
    }
    else{
        console.log(`Collected only ${(current/expectedPlunder*100).toFixed(2)}% of the plunder.`)
    }

}

solve([ '10', '20', '380' ]);