def solution(absolutes, signs):
    return sum(absolutes[i] * (1 if signs[i] else -1) for i in range(len(signs)))
        