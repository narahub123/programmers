def solution(wallpaper):
    lux = float("inf")
    luy = float("inf")
    rdx = 0
    rdy = 0
    
    for x,row in enumerate(wallpaper):
        for y,col in enumerate(row):
            if col == "#":
                if x < lux:
                    lux = x
                if y < luy:
                    luy = y
                if x + 1 > rdx:
                    rdx = x + 1
                if y + 1 > rdy:
                    rdy = y + 1
                    
    return [lux, luy, rdx, rdy]
    