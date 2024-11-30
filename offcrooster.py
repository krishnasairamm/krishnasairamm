def office_rostering(N, M, friendships, K):

    friends = [[] for _ in range(N)]
    for f1, f2 in friendships:
        friends[f1].append(f2)
        friends[f2].append(f1)
    

    working_from_office = [True] * N
    total_rostering_value = N  
    day_count = 1

   
    while total_rostering_value < K:
        next_day_working_from_office = [False] * N
        
        
        for i in range(N):
            office_friends = sum(1 for friend in friends[i] if working_from_office[friend])
            
            if working_from_office[i]:  
                next_day_working_from_office[i] = (office_friends == 3)
            else:  
                next_day_working_from_office[i] = (office_friends < 3)
        

        daily_rostering_value = sum(next_day_working_from_office)
        total_rostering_value += daily_rostering_value
        day_count += 1
        
        
        if total_rostering_value >= K:
            break
        
        
        working_from_office = next_day_working_from_office
    
    return day_count


import sys
input = sys.stdin.read
data = input().split()

N = int(data[0])
M = int(data[1])
friendships = []
index = 2
for _ in range(M):
    f1 = int(data[index])
    f2 = int(data[index + 1])
    friendships.append((f1, f2))
    index += 2
K = int(data[index])


result = office_rostering(N, M, friendships, K)
print(result,end ="")
