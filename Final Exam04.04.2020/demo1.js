function solve(input) {
    

    return JSON.stringify(input.reduce((acc,herostring,i,arr)=>{
    let [heroname,age,inventory]=herostring.split(" / ");
    inventory=inventory.split(",")
    acc.push({name:heroname,age,inventory});
    return acc;
    },[]))
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))