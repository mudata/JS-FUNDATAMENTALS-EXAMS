function solve(input) {
    let words={};
    let line=input.shift().split(" | ");
    while (input.length>0) {
       
        for (let i = 0; i < line.length; i++) {
            let x=line[i].split(": ");
            let word=x[0];
            let definition=x[1];
            if(!words.hasOwnProperty(word)){
                words[word]=[];
            }
            if(definition!==undefined){
                words[word].push(definition);
            }
            
        // console.log(line[i])
        //console.log(word);
        // console.log(definition)
        }
        line=input.shift().split(" | ");
        if(line[0]==="End"){
            let y=Object.entries(words);
            y.sort((a,b)=>{
                return a[0].localeCompare(b[0])
            });
            for (const iterator of y) {
                console.log(iterator[0])
                for (let j = 0; j < iterator[1].length; j++) {
                    const element = iterator[1][j];
                    console.log("-"+element)
                    
                }
            }
           break;
        }
        if(line[0]==="List"){
            //console.log(words)
            let x=Object.entries(words);
            x.sort((a,b)=>{
                return a[0].localeCompare(b[0])
            });
            let arr=[];
            x.forEach(element => {
                //let arr=[];
                if(element[1].length>0)
                {
                    arr.push(element[0]);
                    //console.log(element[0])
                }
                
            });
            //console.log("hhh")
            console.log(arr.join(" "));
        }
    }
    //console.log(words)
}

solve([
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
  ]);