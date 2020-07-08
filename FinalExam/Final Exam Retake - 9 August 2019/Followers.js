function solve(input) {
    let followers={};
let comand,first,second;
while (comand!== "Log out") {
    comand=input.shift().split(":");
    first=comand[1];
    second=comand[2];
    //console.log(second)
    if(comand[0]==="Log out")break;
    else if(comand[0]==="New follower"){
        if(!followers.hasOwnProperty(first)){
        followers[first]= {
            likes: 0,
            comments: 0
        };
        }
    }
    else if(comand[0]==="Like"){
        if(!followers.hasOwnProperty(first)){
            followers[first]= {
                likes: 0,
                comments: 0
            };
            }
            followers[first].likes+=+second

    }
    else if(comand[0]==="Comment"){
        if(!followers.hasOwnProperty(first)){
            followers[first]= {
                likes: 0,
                comments: 0
            };
            }
            followers[first].comments++;
    }
    else if(comand[0]==="Blocked"){
        if(followers.hasOwnProperty(first)){
delete followers[first]
        }
        else{
console.log(`${first} doesn't exist.`)
        }
    }
    

    
}
let sorted=Object.entries(followers);
    sorted.sort((a,b)=>{
        return b[1].likes-a[1].likes;
    });
//     sorted.sort((a,b)=>{
// return a[0].localeCompare(b[0]);
//     });
console.log(sorted.length+" followers")
for (const iterator of sorted) {
    console.log(iterator[0]+": "+(iterator[1].likes+iterator[1].comments))
}
}
solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Blocked: goshxo',
    'Comment: pesho',
    'Log out'
  ]
  );