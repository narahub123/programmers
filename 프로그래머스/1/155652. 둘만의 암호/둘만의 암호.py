def solution(s, skip, index):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    skip_set = set(skip)

    result = []

    for char in s:
        current = alphabet.index(char)
        count = 0

        while count < index:
            current = (current + 1) % 26

            if alphabet[current] in skip_set:
                continue

            count += 1

        result.append(alphabet[current])

    return "".join(result)