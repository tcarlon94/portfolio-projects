//randomizer
let randomNumber = Math.floor(Math.random() * 8)

//message array
const baseballPlays = ['hit', 'walk', 'hit by pitch', 'fielders choice', 'error', 'catchers interference', 'dropped 3rd strike', 'out']

let batterResult = '';

for (let i = 0; i < baseballPlays.length; i++) {
    const randomPlay = baseballPlays[randomNumber];
    console.log(randomPlay);

    if (randomPlay === 'hit') {
        const hitResult = ['single', 'double', 'triple', 'HOME RUN'];
        let randomHit = hitResult[Math.floor(Math.random() * 4)];
        console.log(hitResult);

        if (randomHit === 'single') {
            batterResult = 'You hit a single!'
        } 
        else if (randomHit === 'double') {
            batterResult = 'Extra base hit! Nice double!'
        } 
        else if (randomHit === 'triple') {
            batterResult = 'Triple! Wow you are fast!'
        } 
        else {
            batterResult = 'That ball is outta here! HOME RUN!!'
        }
    } 
    else if (randomPlay === 'walk') {
        batterResult = 'Ball 4. Good eye! Take your base'
    } 
    else if (randomPlay === 'hit by pitch') {
        batterResult = 'Ouch! That one hurt! Go to first base'
    } 
    else if (randomPlay === 'fielders choice') {
        batterResult = 'They got the other runner. But you got to first base!'
    } 
    else if (randomPlay === 'error') {
        batterResult = 'Well they really botched that one. Good job getting on!'
    } 
    else if (randomPlay === 'catchers interference') {
        batterResult = 'Catcher stuck his glove out too far. We got lucky there!'
    } 
    else if (randomPlay === 'dropped 3rd strike') {
        batterResult = 'You struck out. But hey they messed up worse!'
    } else {
        const outResult = ['strikeout', 'fly out', 'ground out', 'tagged out']
        let randomOut = outResult[Math.floor(Math.random() * 4)]
        console.log(randomOut);

        if (randomOut === 'strikeout') {
            batterResult = "3 strikes. YOU'RE OUT!"
        } 
        else if (randomOut === 'fly out') {
            batterResult = "A little too much air under that one. That's an out."
        } 
        else if (randomOut === 'ground out') {
            batterResult = "Ground out in the infield. That's an out."
        }
        else {
            batterResult = "Tried to stretch that one a little too far. You're out!"
        }
    }
    return console.log(batterResult)
}
