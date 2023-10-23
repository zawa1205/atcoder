import * as fs from 'fs'
const arg = fs.readFileSync('/dev/stdin', 'utf8')
// prettier-ignore
const input = arg.trim().split('\n').filter(e => { return e !== '' })
/**
 * 標準入力
 */
// const N: number = Number(input[0])  // １文字
// const [A, B]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// const S: string[] = input[0].split(' ') // 1次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

const costSet = new Set()

class WeightedGraph {
    adjacenyList: Obj
    constructor() {
        this.adjacenyList = {}
    }

    addVertex(vertex: any) {
        if (!this.adjacenyList[vertex]) {
            this.adjacenyList[vertex] = []
        }
    }

    addEdge(vertex1: any, vertex2: any, weight: any) {
        this.adjacenyList[vertex1] = { node: vertex2, weight }
        this.adjacenyList[vertex2] = { node: vertex1, weight }
    }

    removeEdge(vertex1: any, vertex2: any) {
        this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
            (v: any) => v !== vertex2
        )
        this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
            (v: any) => v !== vertex1
        )
    }

    removeVertex(vertex: any) {
        const edges = this.adjacenyList[vertex]
        edges.forEach((e: any) => this.removeEdge(e, vertex))
        delete this.adjacenyList[vertex]
    }
}

// prettier-ignore
const [N,M]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const ABC = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

const main = () => {
    const graph = new WeightedGraph()

    for (let i = 1; i <= N; i++) {
        graph.addVertex(i)
    }

    for (let i = 0; i < ABC.length; i++) {
        graph.addEdge(ABC[0], ABC[1], ABC[2])
    }

    console.log(graph)
}

main()
