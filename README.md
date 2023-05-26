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
To use standard input, press Control+D to exit input.
```sh
pnpm test abc123/a.ts

> aaa bbb ccc
（ Press Control + D ）
```