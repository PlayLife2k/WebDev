def isPalindrome(s):
    revers = s[::-1]
    if s==revers:
        return True
    return False

s = input()
answer = isPalindrome(s)
if answer:
    print(s, "is palindrome")
else:
    print(s, "is not palindrome")