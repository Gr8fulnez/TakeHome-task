/*
For monotonic increasing, 11223344, the preceding number MUST not be greater than the succeeding number but may be equal to it. This is called monotonic increasing. We could also have STRICTLY monotonic increasing where we will have something like 123456 no equality but strictly increasing. The reverse is monotonic decreasing and STRICTLY monotonic decreasing
*/

const isMonotonic = (array: number[]): boolean => {
    let isIncreasing = true;
    let isDecreasing = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            isIncreasing = false;
        }
        if (array[i] > array[i - 1]) {
            isDecreasing = false;
        }
    }
    return isIncreasing || isDecreasing;
}

console.log(isMonotonic([1, 2, 3, 4]));
console.log(isMonotonic([10, 3, 4, 6]));
console.log(isMonotonic([9]));
