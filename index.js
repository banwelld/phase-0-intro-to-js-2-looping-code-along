function writeCards(names, event) {
    const thankYouNotes = [];
    for(let i = 0; i < names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        thankYouNotes.splice(i, 0, message);
    }
    return thankYouNotes;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}