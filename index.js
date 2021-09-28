// Code your solutions in this file

function  writeCards(array, event){
    const newArray = []
    for (let i = 0; i< array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(integer) {
    let i = integer;
    while (i>-1){
        console.log(i)
        i--
    }
}