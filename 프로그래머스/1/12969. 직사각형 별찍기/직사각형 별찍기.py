a, b = map(int, input().strip().split(' '))

result = ""

row = '*' * a

for y in range(b):
    if y != b-1:
        result += row + '\n'
    else:
        result += row

print(result)
