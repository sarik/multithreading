//Most repeated second character from word: "parallel"

function secondMostChar(input) {

    if (input.length < 2) return "invalid"

    if (input.length === 2) return input[0]

    let charMapping = new Map()

    let keys = []

    for (let i = 0; i < input.length; i++) {

        if (charMapping.has(input[i])) {
            charMapping.set(input[i], charMapping.get(input[i]) + 1)
        }
        else {
            keys.push(input[i])
            charMapping.set(input[i], 1)
        }

    }

    //keys [p,a,r,l,e]
    //largest a 2
    //secondlargest p 1
    let largestChar = keys[0]
    let largestCharCount = charMapping.get(keys[0])
    let secondLargestChar = keys[1]
    let secondLargestCharCount = charMapping.get(keys[1])

    if (charMapping.get(keys[0]) < charMapping.get(keys[1])
    ) {
        largestChar = keys[1]
        largestCharCount = charMapping.get(keys[1])
        secondLargestChar = keys[0]
        secondLargestCharCount = charMapping.get(keys[0])
    }


    console.log(charMapping)
    console.log(keys)
    // console.log(largestChar)
    // console.log(secondLargestChar)
    // console.log(keys)


    for (let i = 2; i < keys.length; i++) {
        //if incoming count is greater than largest, largest become second largest and incoming becomes new largest
        //if incoming count is smaller than both, continue
        //if is smaller than large but bigger than secondLarge, update my second large to incoming

        let currentChar = keys[i]
        let currentCharCount = charMapping.get(currentChar)

        if (currentCharCount < secondLargestCharCount) {
            console.log(keys[i], largestChar, secondLargestChar)
            continue
        }

        if (currentCharCount >= largestCharCount) {
            largestChar = currentChar
            largestCharCount = currentCharCount
            secondLargestChar = largestChar
            secondLargestCharCount = largestCharCount

        }
        else if (currentCharCount > secondLargestCharCount) {
            secondLargestChar = currentChar
            secondLargestCharCount = currentCharCount

        }
        console.log(keys[i], largestChar, secondLargestChar)
    }
    //console.log(largestChar,secondLargestChar)
    //console.log(secondLargestChar)

    return secondLargestChar

}


console.log(secondMostChar("parallel"))