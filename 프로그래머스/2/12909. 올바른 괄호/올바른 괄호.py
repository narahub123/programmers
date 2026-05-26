def solution(s):
    stack = []
    for str in s:
        if str == "(":
            stack.append(str)
        else:
            if (len(stack) == 0):
                stack.append(str)
            else:
                last = stack.pop()
                if last == ")":
                    stack.append(last)
                    stack.append(str)
        
    return True if len(stack) == 0 else False
                    