# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    l = []
    for num in numbers:
        length = len(str(num))
        numStr = str(num)
        
        total = 0
        for dig in numStr:
            total += int(dig)**int(length)

        if total == num:
            l.append(num)
    return l

# print(find_armstrong_numbers([1,2,3,4,6,6,371]))
