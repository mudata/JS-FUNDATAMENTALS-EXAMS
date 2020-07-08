function solve(array) {
    let arr=array.shift().split(" ");

while (array.length>0) {
    let comand=array.shift().split(" ");
    let first=comand[1];
    let second=Number(comand[2]);
    switch (comand[0]) {
        case "Join":
            arr.push(comand[1]);
            arr = [...new Set(arr)];
        break;
        case "Jump":
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if(comand[2]==i){arr.splice(i, 0, comand[1]);}
            }
            
        break;
        case "Dive":
            first=Number(first);
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if(first==i){arr.splice(i, 1);}
            }

        break;
        case "First":
            first=Number(first);
            if(first>arr.length){console.log(arr.join(" "));}
            
            else{
                let print="";
                for (let i = 0; i < first; i++) {
                    print+=arr[i]+" ";
                    
                }
                console.log(print);
            }
        break;
        case "Last":
            first=Number(first);
            if(first>arr.length){console.log(arr.join(" "));}
            
            else{
                
               console.log(arr.slice(Math.max(arr.length - first, 0)).join(" "))
            }
            
        break;
        case "Print":
            if(comand[1]=="Normal"){console.log(`Frogs: ${arr.join(" ")}`);}//normal
            else{console.log(`Frogs: ${arr.reverse().join(" ")}`);}//reversev
            
        break;
    
        default:
            break;
    }
}

//console.log(arr)


}

solve([
    'A B C D E F',
   'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
]);