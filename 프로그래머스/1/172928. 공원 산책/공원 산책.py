def solution(park, routes):
    height = len(park)
    width = len(park[0])
    print("높이", height, "너비", width)
    
    direction = {
        "N": (-1, 0),
        "S": (1, 0),
        "E": (0, 1),
        "W": (0, -1),
    }
    
    start_point = [0, 0]
    for h, row in enumerate(park):
        for w, col in enumerate(row):
            if col == "S":
                start_point = [h, w]
    print("시작점", start_point)
    cur_pos = start_point
    print("현재위치", cur_pos)
    for route in routes:
        [dir, dist] = route.split()
        print("방향", dir, "이동거리", dist)
        [h, w] = cur_pos
        can_add = True
        for i in range(1, int(dist) + 1):
            print(i)
            (dh, dw) = direction[dir]
            print("이동", dh, dw)
            h += dh
            w += dw
            if h < 0 or h >= height or w < 0 or w >= width or park[h][w] == "X":
                can_add = False
                break
        if can_add:
            cur_pos = [h, w]
            print("추가", h, w)
    return cur_pos
        