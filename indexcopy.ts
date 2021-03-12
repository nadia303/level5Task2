interface BigObject {
    [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

//example for test
let obj =
{
    hello: {cvalue: 1}, 
    world: { cvalue: 
       { yay: { cvalue: "2" }  } 
    }
 }
 
/**
 * The function transforms (if it's possible) the values of the input object
 * or replaces it by 2021 and then adds it together
 * @param myObj is the object which the following function works with
 */
 function add(myObj: BigObject): number {
    const x: number[] = Object.keys(myObj).map((key) => {
        const elem = myObj[key]?.cvalue;
        if (elem) {
            if (typeof elem === 'string') {
                const number = Number(elem);
                return Number.isNaN(number)? 2021: number
            }
        } else {
            return 2021
        }
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

console.log(`The sum is ${add(obj)}`);




