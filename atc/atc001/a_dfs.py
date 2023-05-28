import sys
sys.setrecursionlimit(10**6)

H,W = map(int, input().split())
C = [list(input()) for _ in range(H)]

for i in range(H):
    for j in range(W):
        if C[i][j] == 's':
            start = [i,j]
        if C[i][j] == 'g':
            goal = [i,j]


visited = []
for i in range(H):
    visited.append([False]*W)

def dfs(i, j):
    visited[i][j] = True

    for i2,j2 in [[i+1,j],[i-1,j],[i,j+1],[i,j-1]]:
        if not (0<= i2 < H and 0 <= j2 < W ):
            continue
        if C[i2][j2] == '#':
            continue
        if not visited[i2][j2]:
            dfs(i2,j2)
    
dfs(start[0], start[1])
# print(visited)
if visited[goal[0]][goal[1]]:
    print('Yes')
else:
    print('No')