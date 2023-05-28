// 注意、これを使う前に必ず配列をソートしておくこと！！！！
const next_permutation = (arr: any): boolean => {
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] > arr[i]) {
                    ;[arr[i], arr[j]] = [arr[j], arr[i]]
                    const len = (arr.length - (i + 1)) >> 1
                    for (let k = 0; k < len; k++) {
                        ;[arr[i + 1 + k], arr[arr.length - 1 - k]] = [
                            arr[arr.length - 1 - k],
                            arr[i + 1 + k],
                        ]
                    }
                    return true
                }
            }
        }
    }
    return false
}

// 使い方
// let row = Array.from(Array(3).keys())
// do {
//     console.log(row)
// } while (next_permutation(row))
// 0,1,2
// 0,2,1
// 1,0,2
// 1,2,0
// 2,0,1
// 2,1,0
