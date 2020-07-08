function solve(arr) {
    let cost=Number(arr.shift());
    let months=Number(arr.shift());
    let save = 0;
    for (let i = 1; i <= months; i++) {
        if(i%2!==0&&i!==1){
            save=save-(0.16*save);
        }
        else if(i === 4) {
            save += 0.25 * save;
        }
        save += 0.25 * cost;
        //console.log(save)

    }
    let suvenirs=save-cost;
    if(cost<=save){
        console.log(`Bravo! You can go to Disneyland and you will have ${suvenirs.toFixed(2)}lv. for souvenirs.`);
    }
    if(suvenirs<0){
       console.log(`Sorry. You need ${Math.abs(suvenirs).toFixed(2)}lv. more.`) ;
    }
}

solve([ '1000', '4' ]);