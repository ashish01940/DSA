function binarySearch(arr, l, r, t) {

    let mid = Math.floor((l + r) / 2)
    if (arr[mid] == t) return `${arr[mid]} found on index ${mid}`;

    if ((l == r || l > r) && mid != t) {
        return "element Not Found";
    }

    if (arr[mid] < t) return binarySearch(arr, mid + 1, r, t)
    if (arr[mid] > t) return binarySearch(arr, l, mid - 1, t)
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(arr, 0, arr.length - 1, 9)); 

let arr = [1, 3]
console.log(binarySearch(arr, 0, arr.length - 1, 10)); 
