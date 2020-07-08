function solve(arr) {
let books=arr.shift().split("&");
//console.log(books);
let comand="";
while (comand!="Done") {
    comand=arr.shift().split(" | ");
    //console.log(comand)
    if(comand[0]==="Add Book"){
        if(!books.includes(comand[1])){books.unshift(comand[1]);}
    }
    if(comand[0]==="Take Book"){
        if(books.includes(comand[1])){
            //console.log(books)
            let index=books.indexOf(comand[1]);
            books.splice(index,1);
            //console.log(books)
        }
    }
    if(comand[0]==="Swap Books"){
        if(books.includes(comand[1])&&books.includes(comand[2])){
            let ind1=books.indexOf(comand[1]);
            let ind2=books.indexOf(comand[2]);
            let x=books[ind2];
            books[ind2]=books[ind1];
            books[ind1]=x;
            
        }
    }
    if(comand[0]==="Insert Book"){
        books.push(comand[1]);
    }
    if(comand[0]==="Check Book"){
        if(comand[1]>=0&&comand[1]<books.length){
            console.log(books[comand[1]]);
        }
    }
}
console.log(books.join(", "))
}

solve([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
  ]
  );