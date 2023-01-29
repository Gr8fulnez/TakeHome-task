const rotateArray = (array: number[], k: number): number[] => {
        if (array.length === 0) {
        return [];
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[(i + k) % array.length] = array[i];
    }
    return result;
    
}

console.log(rotateArray([1, 2, 3], 2));
console.log(rotateArray([], 3));