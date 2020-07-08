function solve(arr) {
    let students=Number(arr.shift());
    let lectures=Number(arr.shift());
    let bonus=Number(arr.shift());
    let array=[];
    for (let i = 0; i < students; i++) {
        let el=Number(arr.shift());
        array.push(el);
            
    }
    array.sort(function(a,b) {
        return b-a;
      });
      let num=array[0]
    //console.log(num)
    let print=(num/lectures)*(5+(bonus))
    console.log(`Max Bonus: ${Math.ceil(print)}.`)
console.log(`The student has attended ${num} lectures.`)

}

solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);