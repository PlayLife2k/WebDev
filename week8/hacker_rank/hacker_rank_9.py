if __name__ == '__main__':

    array = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        array.append([score,name])
        
    array.sort()
    min = array[0][0]
    res = [[array[i][0],array[i][1]] for i in range(len(array)) if array[i][0] != min] 
    for i in range(len(res)): 
        if res[i][0] == res[0][0]:
            print(res[i][1])
    