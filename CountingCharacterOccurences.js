var string1 = 'This is a test!!!'

function countletters(strings) {
    //Object that stores key to group words together.
    let occurances = {}

    //check if parameter is a string
    if (typeof strings === 'string' || strings instanceof String) { 
        // console.log('It is a string')

        //clean the parameter to remove whitespace & special characters.
        cleaned = strings.toLowerCase().replace(/[^a-z\d]/g, '')
        // console.log(cleaned)

        //Iterate each letter in variable cleaned
        for (let letter of cleaned) {
            if (!occurances[letter]) { //check if letter does not exist in occurances object.
                occurances[letter] = 1 //if it does not, add one value to letter key.
            } else {
                occurances[letter] = occurances[letter] + 1; //if it already exist, add one value to the existing letter key.
            }
        }
        console.log(occurances)
    } else {
        console.log('It is not a string')
    }
}

countletters(string1)