
// abc,28
// pqr,17.9
// xyz,9.8
// abc,26.8
// pqr,17.2

//abc -2 -2 
//pqr - 33 - 0

//1 master 3 slaves


// abc, [min,max] -> pqr -> xyz - O(assets)
// Map abc -1, pqr -2, xyz -3 - O(assets)





function getMaxAndMin(inputFile) {



    let maxMapping = new Map()
    let minMapping = new Map()
    let allRecords = inputFile.split("\n")

    let assets = []

    //SC - maps,assets array - No of assets - O(unique assets)
    //TC - no of assets, O(no of lines)

    console.log(allRecords.length)

    for (let i = 0; i < allRecords.length; i++) {
        //abc,28
        let currLine = allRecords[i]

        let delIndex = currLine.indexOf(",")
        //abc
        let asset = currLine.substring(0, delIndex)
        //28
        let price = Number(currLine.substring(delIndex + 1))

        console.log(asset, price)


        if (maxMapping.has(asset)) {
            if (maxMapping.get(asset) < price) {
                maxMapping.set(asset, price)
            }
        }
        else {
            assets.push(asset)
            maxMapping.set(asset, price)
        }


        if (minMapping.has(asset)) {
            if (minMapping.get(asset) > price) {
                minMapping.set(asset, price)
            }
        }
        else
            minMapping.set(asset, price)

    }

    console.log(minMapping)
    console.log(maxMapping)

    //printing logic

    for (let i = 0; i < assets.length; i++) {

        console.log("Asset ", assets[i], " has min:", minMapping.get(assets[i]), " and has max:", maxMapping.get(assets[i]))
    }

}


console.log(getMaxAndMin(`abc,28
abc,21
abc,2
pqr,17.9
xyz,9.8
abc,26.8
abc,2
pqr,17.2`))