function solve(input) {
    let line = input.shift()
    let threshold = 1;
    line.match(/[1-9]/g).forEach(num => threshold = threshold * Number(num));
    
let reg=/((::)|(\*\*))(?<names>[A-Z][a-z]{2,})(\1)/g;
let matches=line.match(reg);
//console.log(matches)
let arr=[];
matches.forEach(element => {
    let emojiAscii=0;
    let x=element;
    element=element.substr(2,element.length-4);
    for (let i = 0; i < element.length; i++) {
        emojiAscii=emojiAscii+ element[i].charCodeAt();
        
    }

    //console.log(emojiAscii)
    if(threshold<=emojiAscii){arr.push(x);}
});
if (matches.length>0) {
    console.log("Cool threshold: "+threshold)
    console.log(`${matches.length} emojis found in the text. The cool ones are:`);
arr.forEach(element => {
    console.log(element)
});
}

}

solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);


// function coolEmojis(input) {
//     let coolThres = coolThreshold(input);
//     console.log(Cool threshold: ${coolThres});

//     let emojits = input.match(/\*\*[A-Z]([a-z]{2,})\*\*|\:\:[A-Z]([a-z]{2,})\:\:/g);
//     let coolEmojis = emojits.filter((emoji) => {
//         let emojiThreshold = 0;
//         emoji.split('').forEach(char => {
//             if(char !== '*' && char !== ':') {
//                 emojiThreshold += char.charCodeAt();
//             }
//         })
//         return emojiThreshold > coolThres;
//     })
//     console.log(${emojits.length} emojis found in the text. The cool ones are:);
//     coolEmojis.forEach(emoji => console.log(emoji));

// }
// coolEmojis('In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 *Tigers*, 1 ::Elephant:, 12 *Monk3ys*, a *Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy*');