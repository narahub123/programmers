from math import gcd
from functools import reduce

def lcm(a, b):
    return a * b // gcd(a, b)

def solution(signals):
    lengths = [sum(signal) for signal in signals]
    limit = reduce(lcm, lengths)

    converted = []

    for signal in signals:
        converted_signal = []

        for n, s in enumerate(signal):
            color = "G" if n == 0 else "Y" if n == 1 else "R"
            converted_signal.extend([color] * s)

        converted.append(converted_signal)

    for time in range(1, limit + 1):
        is_all_yellow = True

        for j, length in enumerate(lengths):
            cur_pos = (time - 1) % length

            if converted[j][cur_pos] != "Y":
                is_all_yellow = False
                break

        if is_all_yellow:
            return time

    return -1