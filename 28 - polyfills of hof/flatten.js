// Q. WAF in JS to flatten a nested array into a single dimension array.
// where all nested elements move towards the top of the array.

const nestedArray = [1, [2, 3], [4, [5, 6]]];

// flatten array 
// output  >> [1, 2, 3, 4, 5, 6]


function flattenArray(arr) {

    // implement

    // return an array in flatten form

   return arr.reduce((accArray, curr) => {

        if(Array.isArray(curr)) {
            // flatted it.
            const flatValue = flattenArray(curr);
            console.log('flatValue:  ', flatValue)
            accArray.push(...flatValue)

            // accArray.push(...flattenArray(curr))

        } else {
            // push to my output
            accArray.push(curr)
        }

        return accArray

    }, [])


}

console.log(flattenArray(nestedArray)) // [1, 2, 3, 4, 5, 6]