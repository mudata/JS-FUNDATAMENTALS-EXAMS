function solve(arr) {
    
let perday=arr.shift();
let workers=arr.shift();
let for30days=arr.shift();
let cuurbiscuits=0;
  for (let i = 1; i <= 30; i++) {
      
      if(i%3==0){
          cuurbiscuits+=(perday*workers)*0.75; 
        }
        else{cuurbiscuits+=perday*workers;}
      //cuurbiscuits=parseFloat(cuurbiscuits);
  }
  if(cuurbiscuits>for30days){
    console.log(`You have produced ${cuurbiscuits} biscuits for the past month.`);
    cuurbiscuits-=for30days;
    console.log(`You produce ${(cuurbiscuits/for30days*100).toFixed(2)} percent more biscuits.`);
  }
  else{
    console.log(`You have produced ${cuurbiscuits} biscuits for the past month.`);
    cuurbiscuits-=for30days
    console.log(`You produce ${(Math.abs(cuurbiscuits/for30days*100)).toFixed(2)} percent less biscuits.`);
}
 



}

solve([ '65', '12', '26000' ]);