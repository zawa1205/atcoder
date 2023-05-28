import sys
sys.setrecursionlimit(10**6)

N = int(input())
C = [list(map(int,input().split(" "))) for i in range(N-1)]
G = [[] for i in range(N+1)]
color = [-1]*(N+1)
for i in range(N-1):
  G[C[i][0]].append(C[i][1])
  G[C[i][1]].append(C[i][0])
print(C)
print(G)
print(color)

def dfs(crr, ev):
  print(crr)
  global color
  if color[crr] != -1:
    return
  
dfs(1, 1)

