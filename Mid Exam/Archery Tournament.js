function solve(input = []){
    let points = 0;
    let fields = Array.from(input.shift().split('|'), Number);
    for(let i = 0; i < input.length; i++){
        if(input[i]  == 'Reverse')
            fields = fields.reverse();
        else if(input[i] == 'Game over')
            break;
        else {
            let [command, beginIndex, positions] = input[i].split('@');
            beginIndex = +beginIndex;
            positions = +positions;
            if(beginIndex >= 0 && beginIndex < fields.length){
                let index;
                if(command.includes('Left') && positions > 0 ||
                command.includes('Right') && positions < 0){ // moves left
                    index = beginIndex - Math.abs(positions);
                    while(index < 0) index+=fields.length;
                    //console.log(index);
                }
                else{ // moves right
                    index = beginIndex + Math.abs(positions);
                    while(index > fields.length) index-=fields.length;
                    //console.log(index);
                }
                if(fields[index] > 5){
                    fields[index] -= 5;
                    points += 5;
                }
                else{
                    points += fields[index];
                    fields[index] = 0;
                }
            }
        }
    }
    console.log(fields.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}
solve([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
  ]
  );