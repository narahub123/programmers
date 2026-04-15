def solution(s):
    return [i - s.rfind(char, 0, i) if s.rfind(char, 0, i) != -1 else -1 for i, char in enumerate(s)]