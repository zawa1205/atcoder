# Getting Start

## Installing pnpm

```sh
corepack enable
```

```sh
corepack prepare pnpm@latest --activate
```

## Installing packages

```sh
pnpm i
```

## Execute files

```sh
pnpm test abc123/a.ts
```

### ※ Caution ※

実行後、標準入力を終了する場合は Control + D

```sh
pnpm test abc123/a.ts

> aaa bbb ccc
（ Press Control + D ）
```

graph など一部、Atcoder 上のコンパイラとの相性で RE になるので、その場合は以下で js にトランスパイルして提出

```sh
pnpm tsc atc/atc001/a_dfs.ts
```
