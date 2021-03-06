interface BigObject {
    [a: string]: { value: number | string | undefined | BigObject } | undefined;
}

//example for test
let obj1 =
    {
        hello: {value: 1},
        world: {
            value:
                {yay: {value: "2"}}
        }
    }

//example for test
const obj2 =
    {
        hello: {value: 1},
        world: {
            value: 5
        },
        hi: {value: 3},
        bye: undefined
    }

//example for test
const obj3 =
    {
   hi: undefined
};

/**
 * The function transforms (if it's possible) the values of the input object
 * or replaces it by 2021 and then adds it together
 * @param myObj is the object which the following function work with
 */
function add(myObj: BigObject): number {
    const x: number[] = Object.keys(myObj).map((key) => {
        let elem = myObj[key]?.value;
        if (elem) {
            if (typeof elem === 'string') {
                return +elem || 2021
            }
            return (typeof elem === 'object') && true ? add(elem) : elem;
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

console.log(`The sum is ${add(obj3)}`);



