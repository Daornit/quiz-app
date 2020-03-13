function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

export const randomSelectedArrayOfIndex = (max = 12, optionsMax = 6) => {
    let array = [];
    for(let i=0; i<12; i++){
        array.push(i);
    }
    shuffle(array);
    return [...array.slice(0,6)]; 
}