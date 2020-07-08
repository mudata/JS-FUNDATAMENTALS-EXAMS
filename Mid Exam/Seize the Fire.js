function solve(arr) {
    arr = arr.shift().split("#");
    //console.log(arr);
    let sum=0;
    let array=[];
    let water=arr[1];
    while (arr.length > 0) {
        let newarr = arr.shift().split(" ");
        let levelOfFire = newarr[0];
        let neededWater = Number(newarr[2]);
        
       // console.log(neededWater)
        switch (levelOfFire) {
            case "High":
                if(neededWater>=81&&neededWater<=125){
                    water-=neededWater;
                    sum+=neededWater;
                    array.push(neededWater);
                }
                
                break;
            case "Medium":
                if(neededWater>=51&&neededWater<=80){
                    water-=neededWater;
                    sum+=neededWater;
                    array.push(neededWater);
                }
                break;
            case "Low":
                if(neededWater>=1&&neededWater<=50){
                    water-=neededWater;
                    sum+=neededWater;
                    array.push(neededWater);
                }
                break;


        }

    }
console.log("Cells:");
    array.forEach(element => {
        console.log(` - ${element}`)
    });
console.log(`Effort: ${(sum/4).toFixed(2)}`);
console.log(`Total Fire: ${sum}`)
}

solve([ 'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77', '220' ]);