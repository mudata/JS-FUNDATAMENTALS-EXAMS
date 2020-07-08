function solve(input) {
    let nums=+input.shift();
    let us;
    let pas;
    let count=0;
    for (let i = 0; i < nums; i++) {
        let line=input.shift();
        let u=false;
        let p=false;
        if(line.split("U$")&&line.startsWith('U$')){
            us=line.split("U$");
            //console.log(us[1])
            if(us[1].length>=3&&us[1][0]===us[1][0].toUpperCase()
            &&
            us[1].substr(1,us[1].length)===us[1].substr(1,us[1].length).toLowerCase()&&
            /^[a-zA-Z]+$/.test(us[1])
            ){
            u=true;
            //console.log(line);
            }
        }
        if(line.split("P@$")&&line.endsWith("P@$")){
            let x=line.split("P@$");
            pas=x[1];
            //console.log(pas.substr(0,5))
            if(/^[a-zA-Z]+$/.test(pas.substr(0,5))&&
            /^\d+$/.test(pas.substr(pas.length-1,pas.length))){
                p=true;
            }
        }
        
        if(u&&p){
            count++;
            console.log("Registration was successful");
            console.log(`Username: ${us[1]}, Password: ${pas}`)
        } 
        else{console.log("Invalid username or password");}    
    }
    console.log(`Successful registrations: ${count}`);
}

solve([
    '3',
    'U$MichaelU$ P@$asdqwe123P@$',
    'U$NameU$ P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ]);