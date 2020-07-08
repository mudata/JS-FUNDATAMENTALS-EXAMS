function solve(arr) {
    let array=arr.shift().split(" ");
    //console.log(array);
    let comand="";
    
    let countCompleted=0;
    let countInCompleted=0;
    let countDropped=0;
    let index=0;
    let time=0;
    while (comand!="End") {
        let drop1=arr[0];
        comand=arr.shift().split(" ");
        index=Number(comand[1]);//first value
        time=Number(comand[2]);//second value
        switch (comand[0]) {
            case "Complete":
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    if(i==index){array[i]=0;}
                    
                }
               // console.log(array);
            break;
        
            case "Change":
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    if(i==index){array[i]=time;}
                }
               // console.log(array);
            break;
            case "Drop":
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    if(i==index){array[i]=-1;}
                }
              // console.log(array);
            break;
            case "Count":
                
                array.forEach(element => {
                    if(element<0){countDropped++;}
                    if(element>0){countInCompleted++;}
                    if(element==0){countCompleted++;}
                });
                if(comand[1]=="Dropped"){
                  console.log(countDropped);
                }
                else if(comand[1]=="Completed"){
                    console.log(countCompleted);
                }
                else{console.log(countInCompleted);}
                
            break;
            default:
                break;
        }
    }
    let print=array.filter(word => word>0);
    console.log(print.join(" "))
}

solve([
    '1 2 3 4 5 4 0 3 2 1',
'Complete 0',
'Complete 1',
'Complete 2',
'Drop 3',
'Change 4 1',
'Count Completed',
'End'
  ]);