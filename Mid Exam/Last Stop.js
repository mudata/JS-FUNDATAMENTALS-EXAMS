function solve(arr) {
    let newarr=[];
    let ff=arr.shift().split(" ");
    for (let i = 0; i < ff.length; i++) {
        const element = +ff[i];
        newarr.push(element);
    }
    //console.log(newarr);
    let comand="";

    while (comand!="END") {
        comand=arr.shift().split(" ");
        let first=Number(comand[1]);
    let second=Number(comand[2]);
        switch (comand[0]) {
            case "Insert":
                if(Number(comand[1])>=0&&Number(comand[1])<=newarr.length-1)
                {
                newarr.splice(Number(comand[1])+1, 0, Number(comand[2]));
                }
                //console.log(newarr)
                break;
            case "Switch":
                if(newarr.includes(first)&&newarr.includes(second))
                {
                    let firstIndex=newarr.indexOf(first);
                    let secondIndex=newarr.indexOf(second);
                    let x=newarr[firstIndex];
                    //console.log(newarr);
                    newarr[firstIndex]=newarr[secondIndex];
                    newarr[secondIndex]=x;
                    //console.log(newarr);
                }
                break;
                case "Hide":
                if(newarr.includes(first)){
                    let ind=newarr.indexOf(first);
                    //console.log(newarr);
                    newarr.splice(ind,1);
                    //console.log(newarr);
                }
                break;
                case "Change":
                    if(newarr.includes(first))
                    {
                        let ij=newarr.indexOf(first)
                        //console.log(newarr);
                        newarr[ij]=second;
                        //console.log(newarr);
                    }
                break;
                case "Reverse":
                newarr.reverse();    
                break;
        
            default:
                break;
        }
    }
    console.log(newarr.join(" "))
}

solve([
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'
  ]);