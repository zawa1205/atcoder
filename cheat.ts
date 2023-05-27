import * as fs from 'fs'
const arg = fs.readFileSync('/dev/stdin', 'utf8')
const input = arg.trim().split('\n').filter(e => { return e !== '' })

/**
 * 標準入力
 */

// 一行で１つ
const N: number = Number(input[1])
// 一行で複数
const [A, B]: number[] = input[0].split(' ').map((s: string) => Number(s))
const C: number[] = input[1].split(' ').map((s: string) => Number(s))
// string
const S: string[] = input[2].split(' ')

// ２次元配列(string)
const origin = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ')))
// ２次元配列(number)
const origin2 = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s))))

/**
 * 処理
 */

// A配列, B配列を転置して[A,B]配列を作る
const transpose = (a: any) => a[0].map((_ :any, c: any) => a.map((r: any) => r[c]))
const trans = transpose(origin)

// n個の要素を持つ配列を、vで埋める
const generateArray = <T>(n: number, v: T): T[] => {
    return new Array<T>(n).fill(v);
}
const array = generateArray(10,-1)

// number配列から最大値、最小値を見つける
const aryMax = function (a:number, b:number) {return Math.max(a, b)}
const aryMin = function (a:number, b:number) {return Math.min(a, b)}
let ary = [5, 2, 3, 1, 10];
let max = ary.reduce(aryMax) // => 10
let min = ary.reduce(aryMin) // => 1

console.log(A, B)
console.log(N)
console.log(S)

// dp初期化
// const dp = Array.from(new Array(N), () => new Array(2).fill(0))
// dpを最大値で初期化する場合。最小値は0等で初期化
const dp = Array.from({length: N}, () => Infinity)

/**
 * etc
 */

// プロパティを後から追加する場合
interface Obj {
    [prop: string]: any
}
let obj: Obj = {}
obj.hoge = 'hogehoge'