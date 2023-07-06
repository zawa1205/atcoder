function binarySearch(arr: number[], target: number): number {
    // 探索配列の左端と右端のindex
    let left = 0,
        right = arr.length - 1

    while (left <= right) {
        // 探索配列の中間のindex
        const mid = Math.floor((left + right) / 2)

        if (target < arr[mid]) {
            // 探索配列の中間の要素よりtargetが小さい場合、探索配列の右端を変更する。
            // 次回の繰り返し処理では今回の探索配列の左半分を探索する
            right = mid - 1
        } else if (target > arr[mid]) {
            // 探索配列の中間の要素よりtargetが大きい場合、探索配列の左端を変更する。
            // 次回の繰り返し処理では今回の探索配列の右半分を探索する
            left = mid + 1
        } else {
            //探索配列の中間の要素がtargetと等しい場合、それを返す。
            return mid
        }
    }

    // targetがarrの中にない場合は、-1を返す
    return -1
}

console.log(binarySearch([1, 5, 6, 10], 5)) // 1
console.log(binarySearch([1, 5, 6, 10], 2)) // 1
