def solution(video_len, pos, op_start, op_end, commands):
    video_len = convertToSecs(video_len)
    pos = convertToSecs(pos)
    op_start = convertToSecs(op_start)
    op_end = convertToSecs(op_end)
    
    # 현재 시간이 오프닝인 경우     
    def isInOpening(pos):
        if op_start <= pos and pos <= op_end:
            return op_end
        else:
            return pos
    def pressPrev(pos):
        if pos < 10:
            return 0
        else: 
            return pos - 10
    def pressNext(pos):
        if pos > video_len - 10:
            return video_len
        else:
            return pos + 10
        
    for command in commands:
        pos = isInOpening(pos)
        if command == "next":
            pos = pressNext(pos)
        elif command == "prev":
            pos = pressPrev(pos)
    
    pos = isInOpening(pos)
    return convertToFormat(pos)
    
def convertToSecs(target_time):
    [minutes, seconds] = target_time.split(":")
    
    return int(minutes) * 60 + int(seconds)

def convertToFormat(target):
    minutes= target // 60
    seconds = target % 60
    
    return f"{minutes:02d}:{seconds:02d}"


    