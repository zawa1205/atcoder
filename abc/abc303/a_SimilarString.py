import sys

N = int(input())
S = list(input())
T = list(input())

for i in range(N):
    if S[i] == 'l':
        S[i] = '1'
    if S[i] == '0':
        S[i] = 'o'
    if T[i] == 'l':
        T[i] = '1'
    if T[i] == '0':
        T[i] = 'o'

# print(N,S,T)
if S == T:
    print('Yes')
else: print('No')