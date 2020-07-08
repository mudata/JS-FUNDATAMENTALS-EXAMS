function solve(input) {
    let nums=+input.shift();
    let first,second,third,fourth;
    input.forEach(element => {
        //console.log(element)
        //let ind=element.indexOf(">");
        let last=element.indexOf("<");
        //let sl=element.slice(0,ind)
        //element=element.slice(ind-1,element.length)
        let leterstoremove=element.slice(last+1,element.length);
        //element=element.slice(ind,last-1);
//console.log(sl);
//console.log(lastsl)
        //console.log(element)
        if(last!==element.length-1){
            let passwithoutlast=element.slice(0,last);
            let newpasswtihvertical=passwithoutlast.slice(leterstoremove.length+1);
            
            //console.log(passwithoutlast)
            //console.log(newpasswtihvertical)
            let t=newpasswtihvertical.split("|");
            //console.log(t);
                    first=t[0];
                    second=t[1];
                    third=t[2];
                    fourth=t[3];
                if(t.length===4&&first.match(/^[0-9]+$/) != null&&second.toLowerCase()===second&&third.toUpperCase()===third&&fourth.replace("<","")===fourth&&fourth.replace(">",""===fourth)){
                        console.log("Password: "+first+second+third+fourth)
                }
                else{
                    console.log("Try another password!")
                }
        
        }
        else{
            console.log("Try another password!")
        }

        
    });
}

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]);