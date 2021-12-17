function shout(string){
    //Receives one argument and returns it in all caps
    return string.toUpperCase();
}

function whisper(string){
    //receives on argument and returns it in all lowercase
    return string.toLowerCase();
}

function logShout(string){
    //takes a string argument and logs it in all caps using console.log()
    console.log(string.toUpperCase());
}

function logWhisper(string){
    //takes a string argument and logs it in all lowercase using console.log()
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    /*
    Question: When attempting to use the switch statement, it did not work - Why?
    Test says "if `string` returns" - does this mean in this situation we need to use an if statement over a switch?
    Would a switch statement work here normally?
    Attempted the switch without the strict operator and it worked - why isn't it working with the strict operator comparison?
    */

    // switch (string) {
    //     //return "I can't hear you!" if `string` is lowercase
    //     case (string === string.toLowerCase()):
    //         return "I can't hear you!";
    //     //return "YES INDEED!" if `string` is uppercase
    //     case string === string.toUpperCase():
    //         return "YES INDEED!";
    //    //retruns "I would love to!" if `string` is "Let's have dinner together!"
    //     case string === "Let's have dinner together!":
    //         return `I would love to!`;
    // }

    if (string === string.toLowerCase()){
        return "I can't hear you!";
    }

    else if (string === string.toUpperCase()){
        return "YES INDEED!";
    }

    else if (string === "Let's have dinner together!"){
        return `I would love to!`;
    }

}