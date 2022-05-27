function mergeSort(arr) {

    if (arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)


    // console.log(left, right);
    return mergeConcatinate(mergeSort(left), mergeSort(right));

}

let newArr = []
function mergeConcatinate(arr1, arr2) {
    console.log(arr1, arr2);
}

let arr1 = [2, 5, 7, 3, 5, 7, 4, 3, 7, 8, 4, 100, 111, 22, 55]
console.log(mergeSort(arr1));

