function mergeSort(arr) {

    if (arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)


    // console.log("left and right",left, right);
    let whatGot = mergeConcatinate(mergeSort(left), mergeSort(right));
    // console.log("whatGot",whatGot);
    return whatGot;

}


function mergeConcatinate(arr1, arr2) {
    let newArr = []
    // console.log("took",arr1, arr2);
    while(arr1[0] && arr2[0]) {
        // console.log(arr1[0],arr2[0]);
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1.shift());
        } else {
            newArr.push(arr2.shift());
        }
    }
    while(arr1[0]) newArr.push(arr1.shift());
    while(arr2[0]) newArr.push(arr2.shift());

    // console.log("given",newArr);
    return newArr;
}

let arr1 = [2, 5, 7, 3, 5, 7, 4, 3, 7, 8, 4, 100, 111, 22, 55]
let arr2 = [5,3,7,10,4,1,5]
console.log(mergeSort(arr1));
