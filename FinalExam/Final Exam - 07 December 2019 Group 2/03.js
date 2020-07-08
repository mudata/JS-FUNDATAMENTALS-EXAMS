function solve(input) {
    let people={};
    let comand,guest,meal;
    let count=0;
    while(comand!=="Stop"){
        [comand,guest,meal]=input.shift().split("-");
        if(comand==="Stop")break;
        if(comand==="Like"){
            if(!people.hasOwnProperty(guest)){
                people[guest]=new Set();
            }
            if(people.hasOwnProperty(guest)&&!people[guest].has(meal)){
                people[guest].add(meal);
            }
        }
        if(comand==="Unlike"){
            if(!people.hasOwnProperty(guest)){console.log(`${guest} is not at the party.`);}
            if(people.hasOwnProperty(guest)&&!people[guest].has(meal)){
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
            }
            if(people.hasOwnProperty(guest)&&people[guest].has(meal)){
                count++;
                people[guest].delete(meal);
                console.log(`${guest} doesn't like the ${meal}.`)
            }
        }
        
    }
    let sorted=Object.entries(people);
    //console.log(sorted)
    sorted.sort((a,b)=>{
    
    return b[1].size-a[1].size;
    });
sorted.sort((a,b)=>{
return b[0].localeCompare(a[1]);
});
for (const iterator of sorted) {
    //console.log(iterator[1])
    let arr=[];
    let x=Array.from(iterator[1]);
    //console.log(x)
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        //console.log(element)
        arr.push(element);
        
    }
    console.log(`${iterator[0]}: ${arr.join(", ")}`);
}
    console.log(`Unliked meals: ${count}`)
}

solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
  ]
  );