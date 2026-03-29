def solution(numbers):
    return sum(n for n in set(range(10)) - set(numbers))