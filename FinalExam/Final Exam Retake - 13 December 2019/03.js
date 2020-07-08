function solve(input) {
    
    let first,second,third;
    let heros={};
    while (first!=="End") {


        let[first,second,third]=input.shift().split(" ");
        if(first==="End")break;
        //console.log(first,second,third);
        if(first==="Enroll"){
            if(!heros.hasOwnProperty(second)){
                heros[second]=new Set();
            }
            else{
                console.log(`${second} is already enrolled.`)
            }
        }
        if(first==="Learn"){
            if(heros.hasOwnProperty(second)){
                if(!heros[second].has(third)){
                    heros[second].add(third);
                }
                else{
                    console.log(`${second} has already learnt ${third}.`)
                }
            }
            else{
                console.log(`${second} doesn't exist.`)
            }
        }
        if(first==="Unlearn"){
            if(heros.hasOwnProperty(second)){
                if(heros[second].has(third)){
                    heros[second].delete(third);
                }
                else{
                    console.log(`${second} doesn't know ${third}.`)
                }
            }
            else{
                console.log(`${second} doesn't exist.`)
            }
        }





    }
    let sorted=Object.entries(heros);
    //console.log(sorted)
    sorted.sort((a,b)=>{
        return b[1].size-a[1].size;
    });
    //console.log(sorted)
    sorted.sort((a,b)=>{
        return a[0].length-b[0].length;
    });
    //console.log(sorted)
    console.log("Heroes:")
    for (const iterator of sorted) {
        let arr=[];
        
        iterator[1].forEach(element => {
            arr.push(element);
        });
        console.log(`== ${iterator[0]}: ${arr.join(", ")}`)
    }
}

solve([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
  ]
  
  );