// Binary Search

// half the array, if the number is higher or lower do that again with the split array

// funciton
// array end points 0,-1
// array.length()
// array.slice()?

const array = [0,1,21,33,45,45,61,71,72,73]

const target = 33

const binarySearch = (array, target) =>{
    array.sort((a,b) => a - b)
    binarySearch(array,target)
        if (target === array[mid]){
            return mid
        }else if (target > array[mid]){

        }
    const findArrayMid = (arr) =>{
        arr.length / 2
    }
}

if (array.indexOf(target) === (array.length/2)-1){
    return target
}else if (array.indexOf(target) > (array.length/2)-1){
    array.slice((array.length/2)-1, -1)
}

// add low and high indexes, divide by 2, and round down
// if target is lower than mid value, move high index to previous mid index
// repeat first step
//if target is higher than mid value, move low index to previous mid index
// repeat
// once mid === target, return index
// if low > high, return -1

const binarySearch = (arr, x) => {
    let start=0, end=arr.length-1;
    // Iterate while start not meets end
    while (start<=end){
        // Find the mid index
        let mid=Math.floor((start + end)/2);
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
}