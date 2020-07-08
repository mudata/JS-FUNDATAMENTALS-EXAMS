function solve(input) {
    let reg=/U\$([A-Z]([a-z]+){2})U\$P@\$(([a-z]+){5}(\d+))P@\$/g;
let nums=+input.shift();
let count=0;
for (let i = 0; i < nums; i++) {
    let line=input.shift();
    let matches=line.match(reg);
    if(matches!==null){
        count++
        let x=matches[0].split("U$");
        let username=x[1];
        let y=x[2].split("P@$");
console.log("Registration was successful")
        console.log(`Username: ${username}, Password: ${y[1]}`)
    }
    else{
        console.log("Invalid username or password");
    }
    
}
console.log("Successful registrations: "+count)
}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ]
  );