function solve(input) {
    let email = input.shift();
    let comand = input.shift().split(" ");
    while (comand[0] !== "Complete") {
        if (comand[0] === "Make") {
            if (comand[1] === "Upper") {
                email = email.toUpperCase();
                console.log(email);
            }
            else {
                email = email.toLowerCase();
                console.log(email);
            }

        }
        if (comand[0] === "GetDomain") {
            let count = Number(comand[1]);
            let lastCount = email.substr(email.length - count, email.length)
            console.log(lastCount)
        }
        if (comand[0] === "GetUsername") {
            if(email.includes("@")){
                let index=email.indexOf("@");
                let x=email.substr(0,index);
                console.log(x)
            }
            else{
                console.log("The email {email} doesn't contain the @ symbol.")
            }
        }
        if(comand[0]==="Replace"){
            for (let i = 0; i < email.length; i++) {
                email=email.replace(comand[1],"-");
                
            }
            console.log(email)
        }
        if(comand[0]==="Encrypt"){
            let arr=[];
            for (let i = 0; i < email.length; i++) {
                let e=email.charCodeAt(i);
                arr.push(e)

            }
            console.log(arr.join(" "))
        }
        comand = input.shift().split(" ");
    }
}

solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Replace O',
    'Encrypt',
    'Complete'
]
);