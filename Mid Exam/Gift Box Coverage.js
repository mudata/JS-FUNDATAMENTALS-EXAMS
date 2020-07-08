function solve(arr) {
    let  sizeofaside=Number(arr.shift());
    let  number=Number(arr.shift());
    let   areaCovers=Number(arr.shift());
    let area=sizeofaside*sizeofaside*6;
    let percets=0;
    for (let i = 1; i <= number; i++) {
        if(i%3==0){percets=percets+(areaCovers/4)}
        else{percets+=areaCovers}
        
    }
    console.log(`You can cover ${(percets/area*100).toFixed(2)}% of the box.`);

}

solve([ '5', '30', '4' ]);