function solve(input) {
    let patern=/([$|%])(?<tag>[A-Z][a-z]{2,})\1[: ]*(([\[]+([0-9]{1,})[\]][|]){3})/g;
    let x=/\d+/g;
let nums=+input.shift();

for (let i = 0; i < nums; i++) {
    let line=input.shift();
    //line=line.toString();
    //console.log(line)
    let matches=patern.exec(line);
    
    if(matches!==null){
        let name=matches[2];
    //console.log(name)
        let numbers=matches[3];
        let t=numbers.match(x);
        //console.log(t)
        let arr=[];
        t.forEach(element => {
            let d=String.fromCharCode(element);
            arr.push(d);
        });
        console.log(name+": "+arr.join(""));
        ///console.log(numbers.split())
        // console.log(matches)
    }
    else{
        console.log("Valid message not found!")
    }
    
    
}

}
//
solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
  ]);