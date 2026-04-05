def solution(n):
    # 짝수엔 '수' 홀수엔 '박'을 리턴하면 됨
    return "".join("수" if (i % 2) == 0 else "박" for i in range(n))
        