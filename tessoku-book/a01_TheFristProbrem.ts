import * as fs from 'fs'
const arg = fs.readFileSync('/dev/stdin', 'utf8')
const input = arg
    .trim()
    .split('\n')
    .filter((e) => {
        return e !== ''
    })

function main() {
    const N: number = Number(input[0])
    console.log(Math.pow(N, 2))
}

main()
